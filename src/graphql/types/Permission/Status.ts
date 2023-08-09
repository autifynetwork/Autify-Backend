import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class PermissionStatusInput {
    @Field(() => ID)
    id: string

    @Field(() => Boolean)
    categorySetup: boolean

    @Field(() => Boolean)
    categories: boolean

    @Field(() => Boolean)
    subCategories: boolean

    @Field(() => Boolean)
    productSetup: boolean

    @Field(() => Boolean)
    productList: boolean

    @Field(() => Boolean)
    productAttribute: boolean

    @Field(() => Boolean)
    productSKU: boolean

    @Field(() => Boolean)
    userManagement: boolean

    @Field(() => Boolean)
    vendorSetup: boolean

    @Field(() => Boolean)
    vendorRoles: boolean

    @Field(() => Boolean)
    orderManagement: boolean
}
@ObjectType()
export class PermissionStatusObject {
    @Field(() => ID)
    id: string

    @Field(() => Boolean)
    categorySetup: boolean

    @Field(() => Boolean)
    categories: boolean

    @Field(() => Boolean)
    subCategories: boolean

    @Field(() => Boolean)
    productSetup: boolean

    @Field(() => Boolean)
    productList: boolean

    @Field(() => Boolean)
    productAttribute: boolean

    @Field(() => Boolean)
    productSKU: boolean

    @Field(() => Boolean)
    userManagement: boolean

    @Field(() => Boolean)
    vendorSetup: boolean

    @Field(() => Boolean)
    vendorRoles: boolean

    @Field(() => Boolean)
    orderManagement: boolean
}
