import { Field, ObjectType } from "@nestjs/graphql";

export type Genre = 'Pop' | 'Rock' | 'Alternative Rock' | 'Metal' | 'Classical';

@ObjectType()
export class Record {
    @Field()
    title: string;

    @Field()
    artist: string;

    @Field({ nullable: true })
    releaseDate: Date;

    @Field({ nullable: true })
    genre: Genre;
}
