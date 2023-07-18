// eslint-disable-next-line import/no-unassigned-import
import 'reflect-metadata'

import { buildSchema } from 'type-graphql'

import { BrandResolver } from '@graphql/resolvers/Brand'
import { CategoryResolver } from '@graphql/resolvers/categorySectionResolvers/Category'
import { SubCategoryResolver } from './resolvers/categorySectionResolvers/SubCategory'

const getSchema = async () => {
    const schema = await buildSchema({
        resolvers: [BrandResolver, CategoryResolver, SubCategoryResolver],
    })
    return schema
}

export default getSchema
