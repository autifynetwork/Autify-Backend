import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import {
    ProductListInput,
    ProductListObject,
} from '@graphql/types/Product/ProductList'
import { ProductList } from '@prisma/client'
import prisma from '@services/prisma'

@Resolver()
export class ProductListResolver {
    @Mutation(() => ProductListInput)
    async createProduct(
        @Arg('productName') productName: string,
        @Arg('status', { nullable: true }) status: boolean,
        @Arg('productDesc') productDesc: string,
        @Arg('expiryDate') expiryDate: string,
        @Arg('unit') unit: number,
        @Arg('materialUsed', { nullable: true }) materialUsed: string,
        @Arg('location', { nullable: true }) location: string,
        @Arg('ManufacturingDeatils', { nullable: true })
        ManufacturingDeatils: string,
        @Arg('attributeId', { nullable: true }) attributeId: string,
        @Arg('SKU', { nullable: true }) SKU: string,
        @Arg('SpecialFeatures', { nullable: true }) SpecialFeatures: string
    ): Promise<ProductList> {
        let product_name = await prisma.productList.findFirst({
            where: { productName },
        })
        if (product_name?.productName) {
            throw new Error(`product name already exists`)
        } else {
            product_name = await prisma.productList.create({
                data: {
                    productName,
                    status,
                    productDesc,
                    expiryDate,
                    unit,
                    materialUsed,
                    location,
                    ManufacturingDeatils,
                    attributeId,
                    SKU,
                    SpecialFeatures,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            })
        }
        return product_name
    }

    @Mutation(() => ProductListObject)
    async updateProduct(
        @Arg('productId') productId: string,
        @Arg('productName', { nullable: true }) productName: string,
        @Arg('status', { nullable: true }) status: boolean,
        @Arg('productDesc', { nullable: true }) productDesc: string,
        @Arg('expiryDate', { nullable: true }) expiryDate: string,
        @Arg('unit', { nullable: true }) unit: number,
        @Arg('materialUsed', { nullable: true }) materialUsed: string,
        @Arg('location', { nullable: true }) location: string,
        @Arg('ManufacturingDeatils', { nullable: true })
        ManufacturingDeatils: string,
        @Arg('attributeId', { nullable: true }) attributeId: string,
        @Arg('SKU', { nullable: true }) SKU: string
    ): Promise<ProductList> {
        const product = await prisma.productList.findUnique({
            where: { id: productId },
        })

        if (!product) {
            throw new Error(`product not found`)
        } else {
            return await prisma.productList.update({
                where: { id: productId },
                data: {
                    productName,
                    status,
                    productDesc,
                    expiryDate,
                    unit,
                    materialUsed,
                    location,
                    ManufacturingDeatils,
                    attributeId,
                    SKU,
                    updatedAt: new Date(),
                },
            })
        }
    }

    @Mutation(() => ProductListObject)
    async deleteProduct(@Arg('productId') productId: string) {
        const product = await prisma.productList.findUnique({
            where: { id: productId },
        })

        if (!product) {
            throw new Error(`product not found`)
        } else {
            return await prisma.productList.delete({
                where: { id: productId },
            })
        }
    }

    @Mutation(() => ProductListObject)
    async deleteAllProduct() {
        const product = await prisma.productList.deleteMany()
        return product
    }

    @Query(() => [ProductListObject])
    async productList(): Promise<ProductList[]> {
        const product = await prisma.productList.findMany()
        return product
    }

    @Query(() => ProductListObject)
    async productById(@Arg('productId') productId: string) {
        const product = await prisma.productList.findUnique({
            where: { id: productId },
        })

        if (!product) {
            throw new Error(`product not found`)
        } else {
            return product
        }
    }
}
