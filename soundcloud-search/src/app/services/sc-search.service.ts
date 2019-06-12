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
  nextEnabled$ = new BehaviorSubject<boolean>(false);
  backEnabled$ = new BehaviorSubject<boolean>(false);

  offset = 0;
  lastQuery: string;

  constructor(
    private apiService: SoundcloudApiService,
    private historyService: ScHistoryService
  ) {}

  execSearch(query: string) {
    if (this.lastQuery == null || this.lastQuery !== query) {
      this.lastQuery = query;
      this.offset = 0;
    }
    this.apiService.fetchSearchResults(query, this.offset).subscribe(
      paginatedData => {
        console.log('results.collection ', paginatedData.collection);
        console.log('results.next_href ', paginatedData.next_href);
        if (paginatedData.next_href) {
          this.nextEnabled$.next(true);
        } else {
          this.nextEnabled$.next(false);
        }
        if (this.offset === 0) {
          this.backEnabled$.next(true);
        } else {
          this.backEnabled$.next(false);
        }

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
