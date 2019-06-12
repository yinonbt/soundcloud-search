import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sc-search-history',
  templateUrl: './sc-search-history.component.html',
  styleUrls: ['./sc-search-history.component.scss']
})
export class ScSearchHistoryComponent implements OnInit {
  @Input() historyQueries: string[];
  
  constructor() { }

  ngOnInit() {
  }

}
