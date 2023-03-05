// eslint-disable-next-line import/no-unassigned-import
import 'reflect-metadata'

import { buildSchema } from 'type-graphql'

import { VendorResolver } from '@graphql/resolvers/Vendor'
import { BrandResolver } from '@graphql/resolvers/Brand'

const getSchema = async () => {
    const schema = await buildSchema({
        resolvers: [VendorResolver, BrandResolver],
    })
    return schema
}

export default getSchema
