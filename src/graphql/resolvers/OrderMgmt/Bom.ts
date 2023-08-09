import { Query, Arg, Mutation, Resolver } from 'type-graphql'

import { BomInput, BomObject } from '@graphql/types/OrderMgmt/Bom'
import { BillofMaterial } from '@prisma/client'
import prisma from '@services/prisma'

@Resolver()
export class BomResolver {
    @Mutation(() => BomInput)
    async populateBom(
        @Arg('title') title: string,
        @Arg('description', { nullable: true }) description: string,
        @Arg('vendorId') vendorId: string,
        @Arg('dueDate', { nullable: true }) dueDate: Date,
        @Arg('instructions', { nullable: true }) instructions: string,
        @Arg('remarks', { nullable: true }) remarks: string
    ): Promise<BillofMaterial> {
        const bomTitle = await prisma.billofMaterial.create({
            data: {
                title,
                description,
                vendorId,
                dueDate,
                instructions,
                remarks,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        })
        return bomTitle
    }

    @Mutation(() => BomObject)
    async updateBom(
        @Arg('id') id: string,
        @Arg('title', { nullable: true }) title: string,
        @Arg('description', { nullable: true }) description: string,
        @Arg('vendorId', { nullable: true }) vendorId: string,
        @Arg('dueDate', { nullable: true }) dueDate: Date,
        @Arg('instructions', { nullable: true }) instructions: string,
        @Arg('remarks', { nullable: true }) remarks: string
    ): Promise<BillofMaterial> {
        const updatedBom = await prisma.billofMaterial.update({
            where: { id },
            data: {
                title,
                description,
                vendorId,
                dueDate,
                instructions,
                remarks,
                updatedAt: new Date(),
            },
        })
        return updatedBom
    }

    @Mutation(() => BomObject)
    async deleteBom(@Arg('id') id: string): Promise<BillofMaterial> {
        const deletedBom = await prisma.billofMaterial.delete({
            where: { id },
        })
        return deletedBom
    }

    // get all BOMs
    @Query(() => [BomObject])
    async getBoms(): Promise<BillofMaterial[]> {
        const boms = await prisma.billofMaterial.findMany()
        return boms
    }

    //get one bom by id
    @Query(() => BomObject)
    async getBom(@Arg('id') id: string): Promise<BillofMaterial> {
        const bom = await prisma.billofMaterial.findUnique({
            where: { id },
        })
        if (!bom) {
            throw new Error('BOM not found')
        }
        return bom
    }
}
