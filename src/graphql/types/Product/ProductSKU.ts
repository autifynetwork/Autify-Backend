import { Field, ID, ObjectType } from 'type-graphql'
import { CategoryObject } from '@graphql/types/Category'

@ObjectType()
export class ProductSKUInput {
    @Field(() => ID)
    id: string

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
    id: string

    @Field(() => String)
    productsku: string

    @Field(() => Boolean)
    status: boolean

    @Field(() => String)
    SKUCategoryId: string

    @Field(() => CategoryObject, { nullable: true })
    SKUCategory: CategoryObject | null
}
