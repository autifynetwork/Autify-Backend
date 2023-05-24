import { Query, Arg, Mutation, Resolver } from 'type-graphql'
import { CategoryObject, CreateCategoryInput } from '@graphql/types/Category'
import { Category } from '@prisma/client'
import prisma from '@services/prisma'

@Resolver()
export class CategoryResolver {
    @Query(() => String)
    async hello() {
        return 'Hello, World!'
    }

    @Mutation(() => CategoryObject)
    async createCategory(
        @Arg('data') data: CreateCategoryInput
    ): Promise<Category> {
        const category = await prisma.category.create({
            data: {
                id: data.id,
                categoryName: data.categoryName,
                image: data.image,
            },
        })
        return category
    }
}
