import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sc-search-history',
  templateUrl: './sc-search-history.component.html',
  styleUrls: ['./sc-search-history.component.scss']
})
export class ScSearchHistoryComponent implements OnInit {
  @Input() historyQueries: string[];
  @Output() historyQuerySelected = new EventEmitter<string>();
  selectedHistoryQuery: string;
  
  constructor() { }

  ngOnInit() {
  }

  onHistoryItemClick(query: string) {
    this.selectedHistoryQuery = query;
    this.historyQuerySelected.emit(query);
  }

}
