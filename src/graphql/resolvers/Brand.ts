import { Query, Resolver } from 'type-graphql'

import { Brand } from '@graphql/types/Brand'

@Resolver()
export class BrandResolver {
    @Query(() => Brand)
    async brand(): Promise<Brand> {
        return {
            email: 'brand@gmail.com',
            name: 'iambrand',
        }
    }
}
