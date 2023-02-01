import { sendMail } from '@services/sendgrid'
import { Arg, Mutation, Resolver } from 'type-graphql'
import { Auth } from '@graphql/types/Auth'

@Resolver()
export class AuthResolver {
    @Mutation(() => Boolean)
    async sendMail(
        @Arg('email', { validate: false }) { to, text }: Auth,
    ): Promise<boolean> {
        await sendMail(to, text)
        return true
    }
}
