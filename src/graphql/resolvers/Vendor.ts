import { Query, Arg, Mutation, Resolver } from 'type-graphql'
import { Vendor } from '@prisma/client'
import { VendorObject, CreateVendorInput } from '@graphql/types/Vendor'
import prisma from '@services/prisma'

@Resolver()
export class VendorResolver {
    @Query(() => String)
    async hello() {
        return 'Hello, World!'
    }
    @Mutation(() => VendorObject)
    async createVendor(@Arg('data') data: CreateVendorInput): Promise<Vendor> {
        // Check if the brand exists
        const brand = await prisma.brand.findUnique({ where: { id: data.brandId } })
        if (!brand) {
            throw new Error(`Brand with id ${data.brandId} does not exist`)
        }

        // Create the vendor
        const vendor = await prisma.vendor.create({
            data: {
                id: data.id,
                email: data.email,
                name: data.name,
                whitelist: data.whitelist,
                brand: { connect: { id: data.brandId } },
                tags: { create: data.tags },
            },
            include: {
                brand: true,
                tags: true,
            },
        })

        return vendor
    }
}
