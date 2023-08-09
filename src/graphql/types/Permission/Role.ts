import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class RoleInput {
    @Field(() => ID)
    id: string

    @Field()
    roleName: string

    @Field({ nullable: true })
    readPermissionId: string

    @Field({ nullable: true })
    writePermissionId: string

    @Field({ nullable: true })
    statusPermissionId: string

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date
}
@ObjectType()
export class RoleObject {
    @Field(() => ID)
    id: string

    @Field()
    roleName: string

    @Field({ nullable: true })
    readPermissionId: string

    @Field({ nullable: true })
    writePermissionId: string

    @Field({ nullable: true })
    statusPermissionId: string

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date
}
