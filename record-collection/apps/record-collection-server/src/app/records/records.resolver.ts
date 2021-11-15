import { Args, Query, Resolver } from '@nestjs/graphql';
import { Record } from './models/record';
import { GetRecordArgs } from './models/record.args';
import { RecordsService } from './records.service';

@Resolver(() => Record)
export class RecordsResolver {
    constructor(private readonly recordsService: RecordsService) {}

    @Query(returns => [Record])
    public getRecordsByArtist(@Args() getRecordArgs: GetRecordArgs): Record[] {
        return this.recordsService.getRecordsByArtist(getRecordArgs.artist);
    }
}
