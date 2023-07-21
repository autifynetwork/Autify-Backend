import { Query, Arg, Mutation, Resolver } from 'type-graphql'
import {
    CreateCategoryInput,
    CategoryObject,
} from '@graphql/types/CategorySectionTypes/Category'

import { Category } from '@prisma/client'
import prisma from '@services/prisma'
import { awsConfig } from '@config'
import Upload from 'graphql-upload/Upload.js'
import GraphQLUpload from 'graphql-upload/GraphQLUpload.js'
import { CategoryOutput } from '@graphql/types/CategorySectionTypes/category-output'
@Resolver()
export class CategoryResolver {
    @Query(() => String)
    async hello() {
        return 'Hello, World!'
    }

    // creation of category
    @Mutation(() => CreateCategoryInput, { name: 'createCategory' })
    async createCategory(
        @Arg('categoryName') categoryName: string,
        @Arg('categoryImgUrl', { nullable: true }) categoryImgUrl: string,
        @Arg('categoryImg', () => GraphQLUpload) categoryImg: Upload,
        @Arg('status', { nullable: true }) status: boolean
    ): Promise<Category> {
        const existingCategoryByName = await prisma.category.findFirst({
            where: { categoryName },
        })

        if (existingCategoryByName) {
            throw new Error(`Category name already exists.`)
        }

        const existingCategoryByUrl = await prisma.category.findFirst({
            where: { categoryImgUrl },
        })

        if (existingCategoryByUrl) {
            throw new Error(`Category image URL already exists.`)
        }

        const s3 = awsConfig()
        const file = await categoryImg

        console.log(file, 'file uploaded')

        const { createReadStream, filename } = await categoryImg
        const key = `category-images/${uuidv4()}-${filename}`
        const uploadParams = {
            Bucket: 'category-images-dev',
            Key: key,
            Body: createReadStream(),
            ACL: 'private-read',
        }

        try {
            await s3.upload(uploadParams).promise()
        } catch (err) {
            throw new Error('Error uploading file to S3.')
        }
        const category = await prisma.category.create({
            data: {
                categoryName,
                categoryImgUrl,
                status,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        })

        return category
    }

    // update of category
    @Mutation(() => CategoryObject)
    async updateCategory(
        @Arg('categoryId') categoryId: string,
        @Arg('categoryName', { nullable: true }) categoryName: string,
        @Arg('categoryImgUrl', { nullable: true }) categoryImgUrl: string,
        @Arg('status', { nullable: true }) status: boolean
    ): Promise<Category> {
        const category = await prisma.category.findUnique({
            where: { id: categoryId },
        })

        if (!category) {
            throw new Error(`category not found`)
        }
        const updatedCategory = await prisma.category.update({
            where: { id: categoryId },
            data: {
                categoryName: categoryName || category.categoryName,
                categoryImgUrl: categoryImgUrl || category.categoryImgUrl,
                status: status !== undefined ? status : category.status,
                updatedAt: new Date(),
            },
        })
        return updatedCategory
    }

    // delete of category
    @Mutation(() => CategoryObject)
    async deleteCategory(
        @Arg('categoryId') categoryId: string
    ): Promise<Category> {
        const category = await prisma.category.findUnique({
            where: { id: categoryId },
        })
        if (!category) {
            throw new Error(`category not found`)
        }
        const deletedCategory = await prisma.category.delete({
            where: { id: categoryId },
        })
        return deletedCategory
    }

    @Query(() => [CategoryObject])
    async getAllCategories(): Promise<Category[]> {
        const categories = await prisma.category.findMany()
        return categories
    }
}
function uuidv4() {
    throw new Error('Function not implemented.')
}
