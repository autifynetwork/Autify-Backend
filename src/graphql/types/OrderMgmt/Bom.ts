import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class BomInput {
    @Field(() => ID)
    id: string

    @Field()
    title: string

    @Field({ nullable: true })
    description: string

    @Field()
    vendorId: string

    @Field()
    dueDate: Date

    @Field()
    instructions: string

    @Field()
    remarks: string

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date
}

@ObjectType()
export class BomObject {
    @Field(() => ID)
    id: string

    @Field()
    title: string

    @Field({ nullable: true })
    description: string

    @Field()
    vendorId: string

    @Field({ nullable: true })
    dueDate: Date

    @Field({ nullable: true })
    instructions: string

    @Field({ nullable: true })
    remarks: string

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date
}
