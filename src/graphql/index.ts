// eslint-disable-next-line import/no-unassigned-import
import 'reflect-metadata'

import { buildSchema } from 'type-graphql'

import { BrandResolver } from '@graphql/resolvers/Entity/Brand'
import { CategoryResolver } from '@graphql/resolvers/Category'
import { SubCategoryResolver } from '@graphql/resolvers/SubCategory'
import { ProductListResolver } from '@graphql/resolvers/Product/ProductList'
import { ProductAttributeResolver } from '@graphql/resolvers/Product/ProductAttribute'
import { ProductSKUResolver } from '@graphql/resolvers/Product/ProductSKU'
import { ProfileResolver } from '@graphql/resolvers/Profile'
import { PermissionWriteResolver } from '@graphql/resolvers/Permission/Write'
import { PermissionStatusResolver } from '@graphql/resolvers/Permission/Status'
import { PermissionReadResolver } from '@graphql/resolvers/Permission/Read'
import { VendorResolver } from '@graphql/resolvers/Entity/Vendor'
import { RoleResolver } from '@graphql/resolvers/Permission/Role'
import { BomResolver } from '@graphql/resolvers/OrderMgmt/Bom'

const getSchema = async () => {
    const schema = await buildSchema({
        resolvers: [
            BrandResolver,
            CategoryResolver,
            SubCategoryResolver,
            ProductListResolver,
            ProductAttributeResolver,
            ProductSKUResolver,
            ProfileResolver,
            PermissionWriteResolver,
            PermissionStatusResolver,
            PermissionReadResolver,
            VendorResolver,
            RoleResolver,
            BomResolver
        ]
    })
    return schema
}

export default getSchema
