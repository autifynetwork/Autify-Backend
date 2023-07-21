import { Field, ID, ObjectType } from 'type-graphql'
import { CategoryObject } from '@graphql/types/CategorySectionTypes/Category'

@ObjectType()
export class ProductSKUInput {
    @Field(() => ID)
    ID: string

    @Field(() => String)
    productsku: string

    @Field(() => Boolean)
    status: boolean

    @Field(() => String)
    SKUCategoryId: string
}

@ObjectType()
export class ProductSKUObject {
    @Field(() => ID)
    ID: string

    @Field(() => String)
    productsku: string

    @Field(() => Boolean)
    status: boolean

    @Field(() => String)
    SKUCategoryId: string

    @Field(() => CategoryObject, { nullable: true })
    SKUCategory: CategoryObject | null
}
