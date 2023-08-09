import { Arg, Mutation, Query, Resolver } from 'type-graphql'

import { Role } from '@prisma/client'
import prisma from '@services/prisma'

import { RoleInput, RoleObject } from '@graphql/types/Permission/Role'

@Resolver()
export class RoleResolver {
    @Mutation(() => RoleInput)
    async createRole(
        @Arg('roleName') roleName: string,
        @Arg('readPermissionId', { nullable: true }) readPermissionId: string,
        @Arg('writePermissionId', { nullable: true }) writePermissionId: string,
        @Arg('statusPermissionId', { nullable: true })
        statusPermissionId: string
    ): Promise<Role> {
        const createRole = await prisma.role.create({
            data: {
                roleName,
                readPermissionId,
                writePermissionId,
                statusPermissionId,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        })
        return createRole
    }

    @Query(() => [RoleObject])
    async getRoles(): Promise<Role[]> {
        const getRoles = await prisma.role.findMany()
        return getRoles
    }

    @Query(() => RoleObject)
    async getRole(@Arg('id') id: string): Promise<Role> {
        const getRole = await prisma.role.findUnique({ where: { id } })
        if (!getRole) throw new Error('Role not found')
        return getRole
    }
}
