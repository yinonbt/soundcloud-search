import { Injectable } from '@angular/core';
import { SoundcloudApiService } from './soundcloud-api.service';
import { Track } from '../models/track';
import { Observable, BehaviorSubject } from 'rxjs';
import { ScHistoryService } from './sc-history.service';

@Injectable({
  providedIn: 'root'
})
export class ScSearchService {
  tracks$ = new BehaviorSubject<Track[]>([]);
  selectedTrack$ = new BehaviorSubject<Track>(null);
  historyQueries$ = new BehaviorSubject<string[]>([]);

  constructor(
    private apiService: SoundcloudApiService,
    private historyService: ScHistoryService
  ) {}

  execSearch(query: string) {
    this.apiService.fetchSearchResults(query).subscribe(
      paginatedData => {
        console.log('results.collection ', paginatedData.collection);
        console.log('results.next_href ', paginatedData.next_href);
        this.tracks$.next(paginatedData.collection);
        this.historyService.pushQuery(query);
        this.getHistoryQueries();
      },
      err => {
        alert('Problems in search execution');
        console.log(err);
      }
    );
  }

  selectTrack(track: Track) {
    this.selectedTrack$.next(track);
  }

  async getHistoryQueries() {
    const historyQueries = await this.historyService.getHistoryQueries();
    this.historyQueries$.next(historyQueries);
  }
}
