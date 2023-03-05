import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class BrandObject {
    @Field(() => ID)
    id: string

    @Field()
    email?: string

    @Field()
    whitelist: string

    @Field({ nullable: true })
    name?: string

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date
}
