import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class ProductAttributeInput {
    @Field(() => ID)
    ID: string

    @Field(() => String)
    productName: string

    @Field(() => Boolean)
    status: boolean

    @Field(() => String)
    attributeCategoryId: string
}

@ObjectType()
export class ProductAttributeObject {
    @Field(() => ID)
    ID: string

    @Field(() => String)
    productName: string

    @Field(() => Boolean)
    status: boolean

    @Field(() => String)
    attributeCategoryId: string

    @Field(() => ProductAttributeObject, { nullable: true })
    attributeCategory: ProductAttributeObject | null
}
