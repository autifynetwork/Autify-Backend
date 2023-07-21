import { InputType, Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class ProductListInput {
    @Field(() => ID)
    ID: string

    @Field(() => String)
    productName: string

    @Field(() => Boolean)
    status: boolean
}

@ObjectType()
export class ProductListObject {
    @Field(() => ID)
    ID: string

    @Field(() => String)
    productName: string

    @Field(() => Boolean)
    status: boolean
}
