import { Component, OnInit } from '@angular/core';
import { SoundcloudApiService } from 'src/app/services/soundcloud-api.service';

@Component({
  selector: 'app-sc-root',
  templateUrl: './sc-root.component.html',
  styleUrls: ['./sc-root.component.scss']
})
export class ScRootComponent implements OnInit {
  constructor(private apiService: SoundcloudApiService) {}

  ngOnInit() {
    // this.apiService.fetchSearchResults('pixies').subscribe(results => {
    //   console.log('results.collection ', results.collection);
    //   console.log('results.next_href ', results.next_href);
    // });
  }
}
