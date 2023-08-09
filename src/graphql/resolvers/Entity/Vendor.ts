import { Arg, Mutation, Query, Resolver } from 'type-graphql'

import {
    CreateVendorInput,
    CreateVendorObject
} from '@graphql/types/Entity/Vendor'
import { Vendor } from '@prisma/client'
import prisma from '@services/prisma'
import * as bcrypt from 'bcrypt'

@Resolver()
export class VendorResolver {
    @Query(() => String)
    async checkVendor(@Arg('vendorPhone') vendorPhone: string) {
        const checkVendor = await prisma.vendor.findFirst({
            where: { vendorPhone }
        })
        try {
            if (!checkVendor) {
                return `${checkVendor} not found`
            } else {
                return checkVendor
            }
        } catch (error) {
            throw new error('Something went wrong, Please try again')
        }
    }
    // Creation of a vendor
    @Mutation(() => CreateVendorInput)
    async populateVendor(
        @Arg('vendorName') vendorName: string,
        @Arg('vendorPhone') vendorPhone: string,
        @Arg('contract', { nullable: true }) contract: string,
        @Arg('whiteList', { nullable: true }) whiteList: boolean,
        @Arg('vendorEntityName', { nullable: true }) vendorEntityName: string,
        @Arg('vendorTaxDetails', { nullable: true }) vendorTaxDetails: string,
        @Arg('AdditionalInfo', { nullable: true }) AdditionalInfo: string,
        @Arg('userName') userName: string,
        @Arg('password') password: string,
        @Arg('brandId') brandId: string
    ): Promise<Vendor> {
        const hashedPassword = await bcrypt.hash(password, 10)
        let creatVendor = await prisma.vendor.findUnique({
            where: { vendorPhone }
        })
        if (!creatVendor) {
            creatVendor = await prisma.vendor.create({
                data: {
                    vendorName,
                    vendorPhone,
                    contract,
                    whiteList,
                    vendorEntityName,
                    vendorTaxDetails,
                    AdditionalInfo,
                    userName,
                    password: hashedPassword,
                    brandId,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            })
        }
        return creatVendor
    }

    // Update of a vendor
    @Mutation(() => CreateVendorObject)
    async updateVendor(
        @Arg('id') id: string,
        @Arg('vendorName', { nullable: true }) vendorName: string,
        @Arg('vendorPhone', { nullable: true }) vendorPhone: string,
        @Arg('contract', { nullable: true }) contract: string,
        @Arg('whiteList', { nullable: true }) whiteList: boolean,
        @Arg('vendorEntityName', { nullable: true }) vendorEntityName: string,
        @Arg('vendorTaxDetails', { nullable: true }) vendorTaxDetails: string,
        @Arg('AdditionalInfo', { nullable: true }) AdditionalInfo: string,
        @Arg('userName', { nullable: true }) userName: string,
        @Arg('brandId', { nullable: true }) brandId: string
    ): Promise<Vendor> {
        let updateVendor = await prisma.vendor.findUnique({ where: { id } })
        if (!updateVendor) {
            updateVendor = await prisma.vendor.update({
                where: { id },
                data: {
                    vendorName,
                    vendorPhone,
                    contract,
                    whiteList,
                    vendorEntityName,
                    vendorTaxDetails,
                    AdditionalInfo,
                    userName,
                    brandId,
                    updatedAt: new Date()
                }
            })
        }
        return updateVendor
    }

    // Delete of a vendor
    @Mutation(() => CreateVendorObject)
    async deleteVendor(@Arg('id') id: string): Promise<Vendor> {
        const deleteVendor = await prisma.vendor.delete({ where: { id } })
        return deleteVendor
    }

    // Get all vendors with brands and boms
    @Query(() => [CreateVendorObject])
    async getAllVendors(): Promise<Vendor[]> {
        const allVendors = await prisma.vendor.findMany({
            include: { brand: true, billOfMat: true }
        })
        return allVendors
    }

    // Get a vendor with id
    @Query(() => CreateVendorObject)
    async getVendor(@Arg('id') id: string): Promise<Vendor> {
        const vendor = await prisma.vendor.findUnique({
            where: { id },
            include: { brand: true, billOfMat: true }
        })
        if (!vendor) {
            throw new Error('Vendor not found')
        }
        return vendor
    }
}
