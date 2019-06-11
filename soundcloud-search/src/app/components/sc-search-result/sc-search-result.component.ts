import { Component, OnInit, Input } from '@angular/core';
import { Track } from 'src/app/models/track';

@Component({
  selector: 'app-sc-search-result',
  templateUrl: './sc-search-result.component.html',
  styleUrls: ['./sc-search-result.component.scss']
})
export class ScSearchResultComponent implements OnInit {
  @Input() track: Track;
  
  constructor() {}

  ngOnInit() {}
}
