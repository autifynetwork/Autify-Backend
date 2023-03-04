import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class BrandObject {
    @Field(() => ID)
    id: number

    @Field()
    email?: string

    @Field(() => Boolean)
    whitelist: boolean

    @Field({ nullable: true })
    name?: string
}
