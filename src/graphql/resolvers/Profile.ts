import { Arg, Mutation, Query, Resolver } from 'type-graphql'

import { ProfileObject } from '@graphql/types/Profile'
import { Profile } from '@prisma/client'
import prisma from '@services/prisma'

@Resolver()
export class ProfileResolver {
    @Mutation(() => ProfileObject)
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
                    updatedAt: new Date(),
                },
            })
        }
        return profileEmail
    }
}
