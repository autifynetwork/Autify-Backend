// eslint-disable-next-line import/no-unassigned-import
import 'reflect-metadata'

import { buildSchema } from 'type-graphql'

import { VendorResolver } from '@graphql/resolvers/Vendor'
import { BrandResolver } from '@graphql/resolvers/Brand'
import { AuthResolver } from '@graphql/resolvers/Auth'

const getSchema = async () => {
    const schema = await buildSchema({
        resolvers: [VendorResolver, BrandResolver, AuthResolver],
    })
    return schema
}

export default getSchema
