import { Query, Arg, Mutation, Resolver } from 'type-graphql'

import {
    PermissionWriteInput,
    PermissionWriteObject,
} from '@graphql/types/Permission/Write'
import { WritePermission } from '@prisma/client'
import prisma from '@services/prisma'

@Resolver()
export class PermissionWriteResolver {
    @Mutation(() => PermissionWriteInput)
    async createPermissionWrite(
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
    ): Promise<WritePermission> {
        const permission = await prisma.writePermission.create({
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

    @Mutation(() => PermissionWriteObject)
    async updatePermissionWrite(
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
    ): Promise<WritePermission> {
        const permission = await prisma.writePermission.update({
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

    // get all permission
    @Query(() => [PermissionWriteObject])
    async getPermissionWrite(): Promise<WritePermission[]> {
        const permission = await prisma.writePermission.findMany()
        return permission
    }
}
