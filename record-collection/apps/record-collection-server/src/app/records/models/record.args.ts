import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, isNotEmpty } from 'class-validator';

@ArgsType()
export class GetRecordArgs {
    @Field()
    @IsNotEmpty()
    artist: string;
}