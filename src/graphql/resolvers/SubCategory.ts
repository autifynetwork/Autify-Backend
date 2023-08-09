import { Query, Arg, Mutation, Resolver } from 'type-graphql'
import {
    CreateSubCategoryInput,
    SubCategoryObject
} from '@graphql/types/SubCategory'
import { SubCategory } from '@prisma/client'
import prisma from '@services/prisma'

@Resolver()
export class SubCategoryResolver {
    @Query(() => String)
    async hello() {
        return 'Hello, World!'
    }

    // creation of subcategory
    @Mutation(() => CreateSubCategoryInput)
    async createSubCategory(
        @Arg('subCategoryName') subCategoryName: string,
        @Arg('categoryId') categoryId: string,
        @Arg('status', { nullable: true }) status: boolean
    ): Promise<SubCategory> {
        const existingSubCategory = await prisma.subCategory.findFirst({
            where: { subCategoryName }
        })
        if (existingSubCategory?.subCategoryName) {
            throw new Error(`Subcategory name already exists`)
        } else {
            const subCategory = await prisma.subCategory.create({
                data: {
                    subCategoryName,
                    categoryId,
                    status,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            })

            return subCategory
        }
    }

    // update of subcategory
    @Mutation(() => SubCategoryObject)
    async updateSubCategory(
        @Arg('subCategoryId') subCategoryId: string,
        @Arg('subCategoryName', { nullable: true }) subCategoryName: string,
        @Arg('categoryId', { nullable: true }) categoryId: string,
        @Arg('status', { nullable: true }) status: boolean
    ): Promise<SubCategory> {
        const subCategory = await prisma.subCategory.findUnique({
            where: { id: subCategoryId }
        })
        if (!subCategory) {
            throw new Error(`Subcategory does not exist`)
        } else {
            const updatedSubCategory = await prisma.subCategory.update({
                where: { id: subCategoryId },
                data: {
                    subCategoryName,
                    categoryId,
                    status,
                    updatedAt: new Date()
                }
            })

            return updatedSubCategory
        }
    }

    // deletion of subcategory
    @Mutation(() => SubCategoryObject)
    async deleteSubCategory(
        @Arg('subCategoryId') subCategoryId: string
    ): Promise<SubCategory> {
        const subCategory = await prisma.subCategory.findUnique({
            where: { id: subCategoryId }
        })
        if (!subCategory) {
            throw new Error(`Subcategory does not exist`)
        } else {
            const deletedSubCategory = await prisma.subCategory.delete({
                where: { id: subCategoryId }
            })

            return deletedSubCategory
        }
    }

    // get all subcategories
    @Query(() => [SubCategoryObject])
    async getAllSubCategories(): Promise<SubCategory[]> {
        const subCategories = await prisma.subCategory.findMany({
            include: { mainCategory: true }
        })
        return subCategories
    }
}
