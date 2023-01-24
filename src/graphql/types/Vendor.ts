import { Field, Int, ObjectType } from 'type-graphql'
import { IsIn } from 'class-validator'

@ObjectType()
export class Vendor {
    @Field(() => Int)
    id: number

    @Field()
    email: string

    @Field()
    name: string

    @Field()
    @IsIn(['firstparty', 'middleman', 'distributor'])
    role: string
}
