import { Arg, Mutation, Resolver } from 'type-graphql'

import { Brand } from '@graphql/types/Brand'

@Resolver()
export class BrandResolver {
    @Mutation(() => Boolean)
    async addToWhiteList(@Arg('email') email: string): Promise<Brand> {
        return {
            whitelist: true
        }
    }
}
