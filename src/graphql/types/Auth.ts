import { Length } from 'class-validator'
import { Field, InputType } from 'type-graphql'

import { otp } from '@config'

import { UserAuth } from '@graphql/types/UserAuth'

@InputType()
export class Auth implements Partial<UserAuth> {
    @Field()
    @Length(otp.length)
    to: string
}

@InputType()
export class EmailOTP implements Partial<UserAuth> {
    @Field()
    to: string

    @Field()
    @Length(otp.length)
    otp: string
}
