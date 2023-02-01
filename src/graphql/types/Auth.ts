import { Field, InputType } from 'type-graphql'

import { UserAuth } from './UserAuth'

@InputType()
export class Auth implements Partial<UserAuth> {
    @Field()
    to: string

    @Field()
    text: string
}
