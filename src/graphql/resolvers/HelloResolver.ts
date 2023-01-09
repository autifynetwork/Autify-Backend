import { Query, Resolver } from 'type-graphql'

import HelloEntity from '@graphql/types/TemplateTypes'

@Resolver()
class HelloResolver {
    @Query(() => HelloEntity)
    async hello(): Promise<HelloEntity> {
        return {
            test: 'Hey there!',
        }
    }
}

export default HelloResolver
