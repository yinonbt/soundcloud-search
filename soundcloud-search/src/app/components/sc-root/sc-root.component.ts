import { Component, OnInit } from '@angular/core';
import { SoundcloudApiService } from 'src/app/services/soundcloud-api.service';
import { Observable } from 'rxjs';
import { Track } from 'src/app/models/track';
import { ScSearchService } from 'src/app/services/sc-search.service';

@Component({
  selector: 'app-sc-root',
  templateUrl: './sc-root.component.html',
  styleUrls: ['./sc-root.component.scss']
})
export class ScRootComponent implements OnInit {
  tracks$: Observable<Track[]>;
  selectedTrack$: Observable<Track>;
  historyQueries$: Observable<string[]>;
  backEnabled$: Observable<boolean>;
  nextEnabled$: Observable<boolean>;
  historyQuery: string;

  constructor(private scSearchService: ScSearchService) {}

  ngOnInit() {
    this.tracks$ = this.scSearchService.tracks$;
    this.selectedTrack$ = this.scSearchService.selectedTrack$;
    this.historyQueries$ = this.scSearchService.historyQueries$;
    this.backEnabled$ = this.scSearchService.backEnabled$;
    this.nextEnabled$ = this.scSearchService.nextEnabled$;
    this.scSearchService.getHistoryQueries();
  }

  onSearchRequested(query: string) {
    this.scSearchService.execSearch(query);
  }

  onBackRequested() {
    this.scSearchService.execBack();
  }

  onNextRequested() {
    this.scSearchService.execNext();
  }

  onTrackSelected(track: Track) {
    this.scSearchService.selectTrack(track);
  }

  onHistoryQuerySelected(query: string) {
    this.historyQuery = query;
  }
}
