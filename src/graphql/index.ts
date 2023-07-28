// eslint-disable-next-line import/no-unassigned-import
import 'reflect-metadata'

import { buildSchema } from 'type-graphql'

import { BrandResolver } from '@graphql/resolvers/Brand'
import { CategoryResolver } from '@graphql/resolvers/categorySectionResolvers/Category'
import { SubCategoryResolver } from '@graphql/resolvers/categorySectionResolvers/SubCategory'
import { ProductListResolver } from '@graphql/resolvers/Product/ProductList'
import { ProductAttributeResolver } from '@graphql/resolvers/Product/ProductAttribute'
import { ProductSKUResolver } from '@graphql/resolvers/Product/ProductSKU'

const getSchema = async () => {
    const schema = await buildSchema({
        resolvers: [
            BrandResolver,
            CategoryResolver,
            SubCategoryResolver,
            ProductListResolver,
            ProductAttributeResolver,
            ProductSKUResolver,
        ],
    })
    return schema
}

export default getSchema
