import { Arg, Mutation, Resolver } from 'type-graphql'

import { BrandObject } from '@graphql/types/Brand'
import { Brand } from '@prisma/client'
import prisma from '@services/prisma'

@Resolver()
export class BrandResolver {
    @Mutation(() => BrandObject)
    async populateBrand(
        @Arg('email') email: string,
        @Arg('name', { nullable: true }) name: string,
    ): Promise<Brand> {
        let brand = await prisma.brand.findUnique({ where: { email } })
        if (!brand) {
            brand = await prisma.brand.create({ data: { email, whitelist: false, name } })
        } else {
            brand = await prisma.brand.update({
                where: { email },
                data: { whitelist: true, name },
            })
        }
        return brand
    }
}
