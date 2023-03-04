import { Arg, Mutation, Resolver } from 'type-graphql'

import { BrandObject } from '@graphql/types/Brand'
import { Brand } from '@prisma/client'
import prisma from '@services/prisma'

@Resolver()
export class BrandResolver {
    // Creation and Update validation of a brand
    @Mutation(() => BrandObject)
    async populateBrand(
        @Arg('email') email: string,
        @Arg('name', { nullable: true }) name: string,
        @Arg('whitelist', { nullable: true }) whitelist: string,
    ): Promise<Brand> {
        let brand = await prisma.brand.findUnique({ where: { email } })
        if (!brand) {
            brand = await prisma.brand.create({
                data: {
                    email,
                    whitelist,
                    name,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            })
        } else {
            brand = await prisma.brand.update({
                where: { email },
                data: { whitelist, name, updatedAt: new Date() },
            })
        }
        return brand
    }

    // Deletion of a brand
    @Mutation(() => BrandObject)
    async deleteBrand(@Arg('email') email: string): Promise<Brand> {
        const brand = await prisma.brand.delete({ where: { email } })
        return brand
    }
}
