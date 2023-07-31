import { Field, ID, ObjectType, Int } from 'type-graphql'
import { certObject } from '@graphql/types/Cert'

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

    @Field(() => String, { nullable: true })
    materialUsed: string

    @Field(() => String, { nullable: true })
    location: string

    @Field(() => String, { nullable: true })
    ManufacturingDeatils: string

    @Field(() => String, { nullable: true })
    attributeId: string

    @Field(() => String, { nullable: true })
    SKU: string

    @Field(() => String, { nullable: true })
    SpecialFeatures: string
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
    ManufacturingDeatils: string

    @Field(() => String)
    attributeId: string

    @Field(() => String)
    SKU: string

    @Field(() => String)
    SpecialFeatures: string
}
