import { Field, InputType, ObjectType } from 'type-graphql'

// @ArgsType()
// export class EmailInput {
//     @Field()
//     email: string

//     @Field()
//     whitelist: boolean
// }

@InputType()
export class EmailInput {
    @Field()
    email: string

    @Field()
    whitelist: boolean
}

@ObjectType()
export class BrandObject {
    @Field()
    id: number

    @Field()
    email?: string

    @Field(() => Boolean)
    whitelist: boolean
}
