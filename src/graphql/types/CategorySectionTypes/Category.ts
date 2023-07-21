import { Field, ID, InputType, ObjectType } from 'type-graphql'
// import { GraphQLUpload } from 'graphql-upload/GraphQLUpload.js'
// import Upload from 'graphql-upload/Upload.js'

@ObjectType()
export class CreateCategoryInput {
    @Field(() => ID)
    id: string

    @Field(() => String)
    categoryName: string

    @Field(() => String, { nullable: true })
    categoryImgUrl: string

    // @Field(() => GraphQLUpload)
    // categoryImg: Promise<Upload>

    @Field(() => Boolean)
    status: boolean
}

@ObjectType()
export class CategoryObject {
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
export class imageUpload {
    @Field(() => String)
    url: string
}
