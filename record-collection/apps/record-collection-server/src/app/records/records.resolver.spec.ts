import { Test, TestingModule } from '@nestjs/testing';
import { GetRecordArgs } from './models/record.args';
import { RecordsResolver } from './records.resolver';
import { RecordsService } from './records.service';

describe('RecordsResolver', () => {
  let resolver: RecordsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecordsService, RecordsResolver],
    }).compile();

    resolver = module.get<RecordsResolver>(RecordsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should return a single', () => {
    const args: GetRecordArgs = { artist: "Linkin Park" };
    const results = resolver.getRecordsByArtist(args);

    expect(results.length).toEqual(1);
    expect(results[0].artist).toEqual("Linkin Park");
    expect(results[0].title).toEqual("One More Light");

  });

  it('should return multiple artists', () => {
    const args: GetRecordArgs = { artist: "The Killers" };
    const results = resolver.getRecordsByArtist(args);

    expect(results.length).toEqual(2);
    for (var record of results) {
      expect(record.artist).toEqual(args.artist);
    }

  });
});
