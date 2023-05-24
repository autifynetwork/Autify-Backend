import { Field, ID, InputType, ObjectType } from 'type-graphql'

@InputType()
export class CreateCategoryInput {
    @Field(() => ID)
    id: string

    @Field(() => String)
    categoryName: string

    @Field(() => String)
    image: string
}

@ObjectType()
export class CategoryObject {
    @Field(() => ID)
    id: string

    @Field(() => String)
    categoryName: string

    @Field(() => String)
    image: string

    @Field(() => Date)
    createdAt: Date

    @Field(() => Date)
    updatedAt: Date
}
