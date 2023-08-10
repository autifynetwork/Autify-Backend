import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import {
    ProductSKUInput,
    ProductSKUObject
} from '@graphql/types/Product/ProductSKU'
import { ProductSKU } from '@prisma/client'
import prisma from '@services/prisma'

@Resolver()
export class ProductSKUResolver {
    // creation of product sku
    @Mutation(() => ProductSKUInput)
    async createProductSKU(
        @Arg('productsku') productsku: string,
        @Arg('status', { nullable: true }) status: boolean,
        @Arg('SKUCategoryId') SKUCategoryId: string
    ): Promise<ProductSKU> {
        let product_sku = await prisma.productSKU.findFirst({
            where: { productsku }
        })
        if (product_sku?.productsku) {
            throw new Error(`product sku already exists`)
        } else {
            product_sku = await prisma.productSKU.create({
                data: {
                    productsku,
                    status,
                    SKUCategoryId,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            })
        }
        return product_sku
    }

    // update of product sku
    @Mutation(() => ProductSKUObject)
    async updateProductSKU(
        @Arg('productsku', { nullable: true }) productsku: string,
        @Arg('status', { nullable: true }) status: boolean,
        @Arg('SKUCategoryId', { nullable: true }) SKUCategoryId: string
    ): Promise<ProductSKU> {
        const product = await prisma.productSKU.findUnique({
            where: { id: SKUCategoryId }
        })

        if (!product) {
            throw new Error(`product not found`)
        } else {
            return prisma.productSKU.update({
                where: { id: SKUCategoryId },
                data: {
                    productsku,
                    status,
                    SKUCategoryId,
                    updatedAt: new Date()
                }
            })
        }
    }

    // delete of product sku
    @Mutation(() => ProductSKUObject)
    async deleteProductSKU(@Arg('SKUCategoryId') SKUCategoryId: string) {
        const product = await prisma.productSKU.findUnique({
            where: { id: SKUCategoryId }
        })

        if (!product) {
            throw new Error(`product not found`)
        } else {
            return prisma.productSKU.delete({
                where: { id: SKUCategoryId }
            })
        }
    }

    // get all product sku
    @Query(() => [ProductSKUObject])
    async getAllProductSKU(): Promise<ProductSKU[]> {
        const productSku = await prisma.productSKU.findMany({
            include: { SKUCategory: true }
        })
        return productSku
    }

    //find product sku by id
    @Query(() => ProductSKUObject)
    async getProductSKUById(@Arg('SKUCategoryId') SKUCategoryId: string) {
        const product = await prisma.productSKU.findUnique({
            where: { id: SKUCategoryId }
        })

        if (!product) {
            throw new Error(`product not found`)
        } else {
            return product
        }
    }
}
