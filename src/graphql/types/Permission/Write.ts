import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class PermissionWriteInput {
    @Field(() => ID)
    id: string

    @Field(() => Boolean)
    categorySetup: Boolean

    @Field(() => Boolean)
    categories: Boolean

    @Field(() => Boolean)
    subCategories: Boolean

    @Field(() => Boolean)
    productSetup: Boolean

    @Field(() => Boolean)
    productList: Boolean

    @Field(() => Boolean)
    productAttribute: Boolean

    @Field(() => Boolean)
    productSKU: Boolean

    @Field(() => Boolean)
    userManagement: Boolean

    @Field(() => Boolean)
    vendorSetup: Boolean

    @Field(() => Boolean)
    vendorRoles: Boolean

    @Field(() => Boolean)
    orderManagement: Boolean
}

@ObjectType()
export class PermissionWriteObject {
    @Field(() => ID)
    id: string

    @Field(() => Boolean)
    categorySetup: Boolean

    @Field(() => Boolean)
    categories: Boolean

    @Field(() => Boolean)
    subCategories: Boolean

    @Field(() => Boolean)
    productSetup: Boolean

    @Field(() => Boolean)
    productList: Boolean

    @Field(() => Boolean)
    productAttribute: Boolean

    @Field(() => Boolean)
    productSKU: Boolean

    @Field(() => Boolean)
    userManagement: Boolean

    @Field(() => Boolean)
    vendorSetup: Boolean

    @Field(() => Boolean)
    vendorRoles: Boolean

    @Field(() => Boolean)
    orderManagement: Boolean
}
