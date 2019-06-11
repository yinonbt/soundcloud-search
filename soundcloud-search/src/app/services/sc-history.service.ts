import { Injectable } from "@angular/core";
import { HISTORY_KEY, HISTORY_LENGTH } from "../app.config";

@Injectable({
  providedIn: "root"
})
export class ScHistoryService {
  constructor() {}

  pushQuery(query: string) {
    const historyQueries = this.getHistoryQueries();
    if (!historyQueries.find(q => q === query)) {
      if (historyQueries.length == HISTORY_LENGTH) {
        historyQueries.pop();
      }
      historyQueries.push(query);
      this.saveHistory(historyQueries);
    }
  }

  getHistoryQueries(): string[] {
    let historyQueries: string[];
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
