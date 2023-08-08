import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class CreateCategoryInput {
    @Field(() => ID)
    id: string

    @Field(() => String)
    categoryName: string

    @Field(() => Boolean)
    status: boolean
}

@ObjectType()
export class CategoryObject {
    @Field(() => ID)
    id: string

    @Field(() => String)
    categoryName: string

    @Field(() => Boolean)
    status: boolean
}

@ObjectType()
export class imageUpload {
    @Field(() => String)
    url: string
}
