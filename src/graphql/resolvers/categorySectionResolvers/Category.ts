import { Query, Arg, Mutation, Resolver } from 'type-graphql'
import {
    CreateCategoryInput,
    CategoryObject,
} from '@graphql/types/categorySectionTypes/Category'
import { Category } from '@prisma/client'
import prisma from '@services/prisma'

@Resolver()
export class CategoryResolver {
    @Query(() => String)
    async hello() {
        return 'Hello, World!'
    }

    // creation of category
    @Mutation(() => CreateCategoryInput)
    async createCategory(
        @Arg('categoryName') categoryName: string,
        @Arg('status', { nullable: true }) status: boolean
    ): Promise<Category> {
        let category_name = await prisma.category.findFirst({
            where: { categoryName },
        })
        if (category_name?.categoryName) {
            throw new Error(`category name already exists`)
        } else {
            category_name = await prisma.category.create({
                data: {
                    categoryName,
                    status,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            })
        }
        return category_name
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
