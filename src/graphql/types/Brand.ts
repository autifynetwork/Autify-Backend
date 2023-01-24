import { Field, Int, ObjectType } from 'type-graphql'
import { IsIn } from 'class-validator'

@ObjectType()
export class Brand {
    @Field(() => Int)
    id: number

    @Field()
    email: string

    @Field()
    name: string

    @Field()
    @IsIn(['silver', 'gold', 'diamond'])
    tier: string
}
