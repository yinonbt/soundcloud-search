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

  constructor(private scSearchService: ScSearchService) {}

  ngOnInit() {
    this.tracks$ = this.scSearchService.tracks$;
    // this.apiService.fetchSearchResults('pixies').subscribe(results => {
    //   console.log('results.collection ', results.collection);
    //   console.log('results.next_href ', results.next_href);
    // });
  }

  onSearchRequested(query: string) {
    this.scSearchService.execSearch(query);
  }
}
