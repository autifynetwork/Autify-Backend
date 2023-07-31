import { Field, ID, ObjectType } from 'type-graphql'
import { CategoryObject } from '@graphql/types/CategorySectionTypes/Category'

@ObjectType()
export class ProductAttributeInput {
    @Field(() => ID)
    id: string

    @Field(() => String)
    attributeName: string

    @Field(() => Boolean)
    status: boolean

    @Field(() => String)
    attributeCategoryId: string
}

@ObjectType()
export class ProductAttributeObject {
    @Field(() => ID)
    id: string

    @Field(() => String)
    attributeName: string

    @Field(() => Boolean)
    status: boolean

    @Field(() => String)
    attributeCategoryId: string

    @Field(() => CategoryObject, { nullable: true })
    attributeCategory: CategoryObject | null
}
