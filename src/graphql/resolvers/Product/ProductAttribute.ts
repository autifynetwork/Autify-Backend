import { ProductAttribute } from '@prisma/client'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import {
    ProductAttributeInput,
    ProductAttributeObject,
} from '@graphql/types/Product/ProductAttribute'
import prisma from '@services/prisma'

@Resolver()
export class ProductAttributeResolver {
    @Mutation(() => ProductAttributeInput)
    async createProductAttribute(
        @Arg('attributeName') attributeName: string,
        @Arg('status', { nullable: true }) status: boolean,
        @Arg('attributeCategoryId') attributeCategoryId: string
    ): Promise<ProductAttribute> {
        let product_name = await prisma.productAttribute.findFirst({
            where: { attributeName },
        })
        if (product_name?.attributeName) {
            throw new Error(`product name already exists`)
        } else {
            product_name = await prisma.productAttribute.create({
                data: {
                    attributeName,
                    status,
                    attributeCategoryId,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            })
        }
        return product_name
    }

    @Mutation(() => ProductAttributeObject)
    async updateProductAttribute(
        @Arg('attributeId') attributeId: string,
        @Arg('attributeName', { nullable: true }) attributeName: string,
        @Arg('status', { nullable: true }) status: boolean,
        @Arg('attributeCategoryId', { nullable: true })
        attributeCategoryId: string
    ): Promise<ProductAttribute> {
        const product = await prisma.productAttribute.findUnique({
            where: { id: attributeId },
        })

        if (!product) {
            throw new Error(`product not found`)
        } else {
            return await prisma.productAttribute.update({
                where: { id: attributeId },
                data: {
                    attributeName,
                    status,
                    attributeCategoryId,
                    updatedAt: new Date(),
                },
            })
        }
    }

    @Mutation(() => ProductAttributeObject)
    async deleteProductAttribute(@Arg('attributeId') attributeId: string) {
        const product = await prisma.productAttribute.findUnique({
            where: { id: attributeId },
        })

        if (!product) {
            throw new Error(`product not found`)
        } else {
            return await prisma.productAttribute.delete({
                where: { id: attributeId },
            })
        }
    }

    @Query(() => [ProductAttributeObject])
    async productAttributes() {
        const productAttributes = await prisma.productAttribute.findMany({
            include: { attributeCategory: true },
        })
        return productAttributes
    }
}
