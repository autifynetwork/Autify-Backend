import { Arg, Mutation, Query, Resolver } from 'type-graphql'

import {
    PermissionStatusInput,
    PermissionStatusObject
} from '@graphql/types/Permission/Status'
import { StatusPermission } from '@prisma/client'
import prisma from '@services/prisma'

@Resolver()
export class PermissionStatusResolver {
    @Mutation(() => PermissionStatusInput)
    async createPermissionStatus(
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
    ): Promise<StatusPermission> {
        const permission = await prisma.statusPermission.create({
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
                orderManagement
            }
        })
        return permission
    }

    @Mutation(() => PermissionStatusObject)
    async updatePermissionStatus(
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
    ): Promise<StatusPermission> {
        const permission = await prisma.statusPermission.update({
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
                orderManagement
            }
        })
        return permission
    }

    // get all permissions
    @Query(() => [PermissionStatusObject])
    async getPermissions(): Promise<StatusPermission[]> {
        const permissions = await prisma.statusPermission.findMany()
        return permissions
    }
}
