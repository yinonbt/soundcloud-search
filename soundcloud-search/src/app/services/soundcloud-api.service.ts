import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, Response } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPaginatedData, IRequestOptions, IRequestArgs } from './interfaces';
import {
  API_TRACKS_URL,
  CLIENT_ID_PARAM,
  PAGINATION_PARAMS,
  CLIENT_ID,
  PAGINATION_LIMIT,
  LINKED_PARTITIONING
} from '../app.config';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SoundcloudApiService {
  constructor(private http: Http, private httpClient: HttpClient) {}

  fetchSearchResults(query: string): Observable<IPaginatedData> {
    const url = `${API_TRACKS_URL}`;
    return this.httpClient.get<IPaginatedData>(url, {
      params: {
        client_id: `${CLIENT_ID}`,
        limit: `${PAGINATION_LIMIT}`,
        linked_partitioning: `${LINKED_PARTITIONING}`,
        q: query,
        offset: '0'
      }
    });
  }
}
