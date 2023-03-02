import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Vendor {
    @Field()
    email: string

    @Field()
    name: string

    @Field()
    whitelist: boolean
}
