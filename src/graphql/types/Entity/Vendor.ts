import { Field, ID, ObjectType } from 'type-graphql'
import { BomObject } from '@graphql/types/OrderMgmt/Bom'

@ObjectType()
export class CreateVendorInput {
    @Field(() => ID)
    id: string

    @Field()
    vendorName: string

    @Field()
    vendorPhone: string

    @Field({ nullable: true })
    whitelist: boolean

    @Field()
    brandId: string

    @Field({ nullable: true })
    contract: string

    @Field({ nullable: true })
    vendorEntityName: string

    @Field({ nullable: true })
    vendorTaxDetails: string

    @Field({ nullable: true })
    AdditionalInfo: string

    @Field()
    userName: string

    @Field()
    password: string
}

@ObjectType()
export class CreateVendorObject {
    @Field(() => ID)
    id: string

    @Field({ nullable: true })
    vendorName: string

    @Field({ nullable: true })
    vendorPhone: string

    @Field({ nullable: true })
    whitelist: boolean

    @Field({ nullable: true })
    brandId: string

    @Field({ nullable: true })
    contract: string

    @Field({ nullable: true })
    vendorEntityName: string

    @Field({ nullable: true })
    vendorTaxDetails: string

    @Field({ nullable: true })
    AdditionalInfo: string

    @Field({ nullable: true })
    userName: string

    @Field(() => BomObject, { nullable: true })
    billOfMat: BomObject | null
}
