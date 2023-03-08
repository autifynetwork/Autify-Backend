import { Arg, Mutation, Query, Resolver } from 'type-graphql'

import { BrandObject } from '@graphql/types/Brand'
import { Brand } from '@prisma/client'
import prisma from '@services/prisma'

@Resolver()
export class BrandResolver {
    @Query(() => String)
    async checkEmail(@Arg('email') email: string) {
        const checkEmail = await prisma.brand.findFirst({ where: { email } })
        try {
            if (checkEmail) {
                if (checkEmail.whitelist == true) {
                    return true
                } else {
                    return false
                }
            } else {
                return 'Brand Email Not Found'
            }
        } catch (error) {
            throw new error('Something went wrong, Please try again')
        }
    }

    @Query(() => BrandObject)
    async checkBrand(@Arg('email') email: string) {
        const checkBrand = await prisma.brand.findFirst({ where: { email } })
        try {
            if (!checkBrand) {
                return `${checkBrand} not found`
            } else {
                return checkBrand
            }
        } catch (error) {
            throw new error('Something went wrong, Please try again')
        }
    }
    // Creation and Update validation of a brand
    @Mutation(() => BrandObject)
    async populateBrand(
        @Arg('email') email: string,
        @Arg('name', { nullable: true }) name: string,
        @Arg('whitelist', { nullable: true }) whitelist: boolean,
    ): Promise<Brand> {
        let brandEmail = await prisma.brand.findUnique({ where: { email } })
        if (!brandEmail) {
            brandEmail = await prisma.brand.create({
                data: {
                    email,
                    whitelist,
                    name,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            })
        } else {
            brandEmail = await prisma.brand.update({
                where: { email },
                data: { whitelist, name, updatedAt: new Date() },
            })
        }
        return brandEmail
    }

    // Deletion of a brand
    @Mutation(() => BrandObject)
    async deleteBrand(@Arg('email') email: string): Promise<Brand> {
        const brand = await prisma.brand.delete({ where: { email } })
        return brand
    }
}
