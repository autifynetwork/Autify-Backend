import { InputType, Field, ID, ObjectType, Int } from 'type-graphql'

@ObjectType()
export class ProductListInput {
    @Field(() => ID)
    ID: string

    @Field(() => String)
    productName: string

    @Field(() => Boolean)
    status: boolean

    @Field(() => String)
    productDesc: string

    @Field(() => String)
    expiryDate: string

    @Field(() => Int)
    unit: number
}

@ObjectType()
export class ProductListObject {
    @Field(() => ID)
    ID: string

    @Field(() => String)
    productName: string

    @Field(() => Boolean)
    status: boolean

    @Field(() => String)
    productDesc: string

    @Field(() => String)
    expiryDate: string

    @Field(() => Int)
    unit: number
}
