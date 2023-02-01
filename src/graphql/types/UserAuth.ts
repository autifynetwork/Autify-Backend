import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class UserAuth {
    @Field()
    to: string

    @Field()
    text: string
}
