import { Injectable } from '@angular/core';
import { SoundcloudApiService } from './soundcloud-api.service';
import { Track } from '../models/track';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScSearchService {
  tracks$ = new BehaviorSubject<Track[]>([]);
  selectedTrack$ = new BehaviorSubject<Track>(null);
  constructor(private apiService: SoundcloudApiService) {}

  execSearch(query: string) {
    this.apiService.fetchSearchResults(query).subscribe(paginatedData => {
      console.log('results.collection ', paginatedData.collection);
      console.log('results.next_href ', paginatedData.next_href);
      this.tracks$.next(paginatedData.collection);
    });
  }

  selectTrack(track: Track) {
    this.selectedTrack$.next(track);
  }
}
