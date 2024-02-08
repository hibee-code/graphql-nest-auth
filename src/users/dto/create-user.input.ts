import { InputType, Field, Int } from '@nestjs/graphql';


@InputType()
export class CreateUserInput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;
}

