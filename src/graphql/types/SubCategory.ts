import { Field, ID, ObjectType } from 'type-graphql'

import { CategoryObject } from './Category'

@ObjectType()
export class CreateSubCategoryInput {
    @Field(() => ID)
    id: string

    @Field(() => String)
    subCategoryName: string

    @Field(() => String)
    categoryId: string

    @Field(() => Boolean)
    status: boolean
}

@ObjectType()
export class SubCategoryObject {
    @Field(() => ID)
    id: string

    @Field(() => String)
    subCategoryName: string

    @Field(() => String)
    categoryId: string

    @Field(() => Boolean)
    status: boolean

    @Field(() => CategoryObject, { nullable: true })
    mainCategory: CategoryObject | null
}
