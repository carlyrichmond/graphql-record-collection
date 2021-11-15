import { Test, TestingModule } from '@nestjs/testing';
import { RecordsService } from './records.service';

describe('RecordsService', () => {
  let service: RecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecordsService],
    }).compile();

    service = module.get<RecordsService>(RecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a single', () => {
    const results = service.getRecordsByArtist("Linkin Park");

    expect(results.length).toEqual(1);
    expect(results[0].artist).toEqual("Linkin Park");
    expect(results[0].title).toEqual("One More Light");

  });

  it('should return multiple artists', () => {
    const results = service.getRecordsByArtist("The Killers");

    expect(results.length).toEqual(2);
    for (var record of results) {
      expect(record.artist).toEqual("The Killers");
    }

  });

});
