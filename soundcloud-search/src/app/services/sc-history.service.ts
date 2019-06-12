import { Injectable } from '@angular/core';
import { HISTORY_KEY, HISTORY_LENGTH } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class ScHistoryService {
  constructor() {}

  pushQuery(query: string) {
    let historyQueries = this.getHistoryQueries();
    if (!historyQueries.find(q => q === query)) {
      if (historyQueries.length === HISTORY_LENGTH) {
        historyQueries.pop();
      }
      const oldHistoryQueries = historyQueries;
      historyQueries = [query].concat(oldHistoryQueries);

      this.saveHistory(historyQueries);
    }
  }

  getHistoryQueries(): string[] {
    const historyQueries: string[] = [];
    for (let i = 0; i < HISTORY_LENGTH; i++) {
      const key = HISTORY_KEY + i;
      const historyQuery = localStorage.getItem(key);
      if (historyQuery) {
        historyQueries.push(historyQuery);
      }
    }
    return historyQueries;
  }

  private saveHistory(historyQueries: string[]) {
    for (let i = 0; i < historyQueries.length; i++) {
      const key = HISTORY_KEY + i;
      localStorage.setItem(key, historyQueries[i]);
    }
  }
}
