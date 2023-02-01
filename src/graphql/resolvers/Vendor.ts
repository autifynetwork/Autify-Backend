import { Query, Resolver } from 'type-graphql'

import { Vendor } from '@graphql/types/Vendor'

@Resolver()
export class VendorResolver {
    @Query(() => Vendor)
    async vendor(): Promise<Vendor> {
        return {
            id: 123,
            email: 'hellovendor@gmail.com',
            name: 'iamvendor',
            role: 'middleman',
        }
    }
}
