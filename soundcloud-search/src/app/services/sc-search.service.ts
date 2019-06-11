import { Injectable } from '@angular/core';
import { SoundcloudApiService } from './soundcloud-api.service';

@Injectable({
  providedIn: 'root'
})
export class ScSearchService {

  constructor(private apiService: SoundcloudApiService) { }

  execSearch(query: string) {
    this.apiService.fetchSearchResults(query)
  }
}
