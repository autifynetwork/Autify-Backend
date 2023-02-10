import { sendMail } from '@services/sendgrid'
import { Arg, Mutation, Resolver } from 'type-graphql'
import { Auth } from '@graphql/types/Auth'

import { createOTP } from '@services/otp'

@Resolver()
export class AuthResolver {
    @Mutation(() => Boolean)
    async sendMail(@Arg('email', { validate: false }) { to }: Auth): Promise<boolean> {
        const otp = await createOTP(to)
        await sendMail(to, otp)
        return true
    }
}
