import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Brand {
    @Field() 
    email?: string

    @Field()
    name?: string

    @Field(() => Boolean)
    whitelist: boolean
}
