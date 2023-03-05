import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class TagObject {
    @Field()
    id: string

    @Field()
    name: string

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date
}
