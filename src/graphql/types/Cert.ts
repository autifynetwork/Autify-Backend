import { Field, ID, ObjectType, Int } from 'type-graphql'

@ObjectType()
export class certInput {
    @Field(() => ID)
    id: string

    @Field(() => String)
    certName: string

    @Field(() => String)
    issuedBy: string
}

@ObjectType()
export class certObject {
    @Field(() => ID)
    id: string

    @Field(() => String)
    certName: string

    @Field(() => String)
    issuedBy: string
}
