import { Field, ID, InputType, ObjectType } from 'type-graphql'
import { TagObject } from '@graphql/types/Tag'
import { Brand } from '@prisma/client'

@InputType()
export class CreateVendorInput {
    @Field(() => ID)
    id: string
    @Field({ nullable: true })
    name?: string

    @Field()
    email: string

    @Field()
    whitelist: string

    @Field()
    brandId: string

    @Field(() => [String])
    tags: TagObject[]
}

@ObjectType()
export class VendorObject {
    @Field(() => ID)
    id: string

    @Field()
    name: string

    @Field()
    email: string

    @Field()
    whitelist: string

    @Field(() => [TagObject])
    tags: TagObject[]

    @Field(() => [String])
    brand: Brand

    @Field(() => Date)
    createdAt: Date

    @Field(() => Date)
    updatedAt: Date
}
