import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
export class CategoryOutput {
    @Field(() => ID)
    id: string

    @Field(() => String)
    categoryName: string

    @Field(() => String, { nullable: true })
    categoryImgUrl: string

    @Field(() => Boolean)
    status: boolean
}
