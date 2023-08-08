import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class ProfileObject {
    @Field(() => ID)
    id: string

    @Field()
    firstName: string

    @Field()
    lastName: string

    @Field()
    email: string

    @Field()
    phone?: string

    @Field()
    bName?: string

    @Field()
    bEmail?: string

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date
}
