// eslint-disable-next-line import/no-unassigned-import
import 'reflect-metadata'

import { buildSchema } from 'type-graphql'

import { BrandResolver } from '@graphql/resolvers/Brand'
import { CategoryResolver } from '@graphql/resolvers/category/Category'

const getSchema = async () => {
    const schema = await buildSchema({
        resolvers: [BrandResolver, CategoryResolver],
    })
    return schema
}

export default getSchema
