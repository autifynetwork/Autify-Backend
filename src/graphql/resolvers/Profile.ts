import { Arg, Mutation, Resolver } from 'type-graphql'

import { ProfileInput, ProfileObject } from '@graphql/types/Profile'
import { Profile } from '@prisma/client'
import prisma from '@services/prisma'

@Resolver()
export class ProfileResolver {
    @Mutation(() => ProfileInput)
    async populateProfile(
        @Arg('email') email: string,
        @Arg('firstName') firstName: string,
        @Arg('lastName') lastName: string,
        @Arg('phone', { nullable: true }) phone: string,
        @Arg('bName', { nullable: true }) bName: string,
        @Arg('bEmail', { nullable: true }) bEmail: string
    ): Promise<Profile> {
        let profileEmail = await prisma.profile.findUnique({ where: { email } })
        if (!profileEmail) {
            profileEmail = await prisma.profile.create({
                data: {
                    email,
                    firstName,
                    lastName,
                    phone,
                    bName,
                    bEmail,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            })
        }
        return profileEmail
    }

    @Mutation(() => ProfileObject)
    async updateProfile(
        @Arg('id') id: string,
        @Arg('firstName', { nullable: true }) firstName: string,
        @Arg('lastName', { nullable: true }) lastName: string,
        @Arg('phone', { nullable: true }) phone: string,
        @Arg('bName', { nullable: true }) bName: string,
        @Arg('bEmail', { nullable: true }) bEmail: string
    ): Promise<Profile> {
        const profile = await prisma.profile.update({
            where: { id },
            data: {
                firstName,
                lastName,
                phone,
                bName,
                bEmail,
                updatedAt: new Date()
            }
        })
        return profile
    }
}
