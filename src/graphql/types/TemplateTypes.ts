import { Field, ObjectType } from 'type-graphql'

@ObjectType()
class TemplateTypes {
    @Field(() => String)
    test: string
}

export default TemplateTypes
