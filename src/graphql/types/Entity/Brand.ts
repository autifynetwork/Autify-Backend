import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class BrandObject {
    @Field(() => ID)
    id: string

    @Field()
    email?: string

    @Field({ nullable: true })
    name?: string

    @Field()
    whitelist: boolean

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date
}
