import { Injectable } from '@nestjs/common';
import { Record } from './models/record';

@Injectable()
export class RecordsService {

    private records: Record[] = [{
        artist: 'The Killers',
        title: 'Sam\'s Town',
        genre: 'Alternative Rock',
        releaseDate: new Date(2006, 9, 26)
    },
    {
        artist: 'The Killers',
        title: 'Hot Fuss',
        genre: 'Alternative Rock',
        releaseDate: new Date(2004, 6, 7)
    },
    {
        artist: 'Linkin Park',
        title: 'One More Light',
        genre: 'Alternative Rock',
        releaseDate: new Date(2017)
    }];

    public getRecordsByArtist(artist: string): Record[] {
        return this.records.filter(record => record.artist === artist);
    }

}
