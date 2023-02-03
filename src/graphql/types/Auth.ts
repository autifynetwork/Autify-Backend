import { Length } from 'class-validator'
import { Field, InputType } from 'type-graphql'

import { emailotp } from '@config'

import { UserAuth } from '@graphql/types/UserAuth'

@InputType()
export class Auth implements Partial<UserAuth> {
    @Field()
    to: string
}

@InputType()
export class EmailOTP implements Partial<UserAuth> {
    @Field()
    to: string

    @Field()
    @Length(emailotp.length)
    otp: string
}
