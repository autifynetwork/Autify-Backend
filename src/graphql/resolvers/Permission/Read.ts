import { Arg, Mutation, Resolver } from 'type-graphql'

import {
    PermissionReadInput,
    PermissionReadObject,
} from '@graphql/types/Permission/Read'
import { ReadPermission } from '@prisma/client'
import prisma from '@services/prisma'

@Resolver()
export class PermissionReadResolver {
    @Mutation(() => PermissionReadInput)
    async createPermissionRead(
        @Arg('categorySetup', { nullable: true }) categorySetup: boolean,
        @Arg('categories') categories: boolean,
        @Arg('subCategories', { nullable: true }) subCategories: boolean,
        @Arg('productSetup', { nullable: true }) productSetup: boolean,
        @Arg('productList', { nullable: true }) productList: boolean,
        @Arg('productAttribute', { nullable: true }) productAttribute: boolean,
        @Arg('productSKU', { nullable: true }) productSKU: boolean,
        @Arg('userManagement', { nullable: true }) userManagement: boolean,
        @Arg('vendorSetup', { nullable: true }) vendorSetup: boolean,
        @Arg('vendorRoles', { nullable: true }) vendorRoles: boolean,
        @Arg('orderManagement', { nullable: true }) orderManagement: boolean
    ): Promise<ReadPermission> {
        const permission = await prisma.readPermission.create({
            data: {
                categorySetup,
                categories,
                subCategories,
                productSetup,
                productList,
                productAttribute,
                productSKU,
                userManagement,
                vendorSetup,
                vendorRoles,
                orderManagement,
            },
        })
        return permission
    }

    @Mutation(() => PermissionReadObject)
    async updatePermissionRead(
        @Arg('id') id: string,
        @Arg('categorySetup', { nullable: true }) categorySetup: boolean,
        @Arg('categories', { nullable: true }) categories: boolean,
        @Arg('subCategories', { nullable: true }) subCategories: boolean,
        @Arg('productSetup', { nullable: true }) productSetup: boolean,
        @Arg('productList', { nullable: true }) productList: boolean,
        @Arg('productAttribute', { nullable: true }) productAttribute: boolean,
        @Arg('productSKU', { nullable: true }) productSKU: boolean,
        @Arg('userManagement', { nullable: true }) userManagement: boolean,
        @Arg('vendorSetup', { nullable: true }) vendorSetup: boolean,
        @Arg('vendorRoles', { nullable: true }) vendorRoles: boolean,
        @Arg('orderManagement', { nullable: true }) orderManagement: boolean
    ): Promise<ReadPermission> {
        const permission = await prisma.readPermission.update({
            where: { id },
            data: {
                categorySetup,
                categories,
                subCategories,
                productSetup,
                productList,
                productAttribute,
                productSKU,
                userManagement,
                vendorSetup,
                vendorRoles,
                orderManagement,
            },
        })
        return permission
    }
}
