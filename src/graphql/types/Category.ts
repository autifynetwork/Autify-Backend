import { Field, ID, InputType, ObjectType } from 'type-graphql'

@ObjectType()
export class CreateCategoryInput {
    @Field(() => ID)
    id: string

    @Field(() => String)
    categoryName: string

    @Field(() => String)
    categoryImgUrl: string

    @Field(() => Boolean)
    status: boolean
}

@ObjectType()
export class updateCategory {
    @Field(() => ID)
    id: string

    @Field(() => String)
    categoryName: string

    @Field(() => String)
    categoryImgUrl: string

    @Field(() => Boolean)
    status: boolean
}
