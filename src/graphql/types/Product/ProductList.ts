import { Field, ID, ObjectType, Int } from 'type-graphql'

@ObjectType()
export class ProductListInput {
    @Field(() => ID)
    id: string

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

    @Field(() => String)
    materialUsed: string

    @Field(() => String)
    location: string

    @Field(() => String)
    manfactDetail: string

    @Field(() => String)
    attributes: string

    @Field(() => String)
    sku: string

    @Field(() => String)
    specialFeature: string

    @Field(() => String)
    cartificate: string
}

@ObjectType()
export class ProductListObject {
    @Field(() => ID)
    id: string

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

    @Field(() => String)
    materialUsed: string

    @Field(() => String)
    location: string

    @Field(() => String)
    manfactDetail: string

    @Field(() => String)
    attributes: string

    @Field(() => String)
    sku: string

    @Field(() => String)
    specialFeature: string

    @Field(() => String)
    cartificate: string
}
