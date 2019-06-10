import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, Response } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPaginatedData, IRequestOptions, IRequestArgs } from './interfaces';
import {
  API_TRACKS_URL,
  CLIENT_ID_PARAM,
  PAGINATION_PARAMS
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
        client_id: 'ggX0UomnLs0VmW7qZnCzw%20',
        limit: '7',
        linked_partitioning: '1',
        q: 'pixies'
      }
    });
  }

  request(options: IRequestOptions): Observable<any> {
    const req: Request = new Request(this.requestArgs(options));
    return this.http.request(req).pipe(map((res: Response) => res.json()));
  }

  requestArgs(options: IRequestOptions): IRequestArgs {
    const { method, paginate, query, url } = options;
    const search: string[] = [];

    if (!url.includes(CLIENT_ID_PARAM)) {
      search.push(CLIENT_ID_PARAM);
    }
    if (paginate) {
      search.push(PAGINATION_PARAMS);
    }
    if (query) {
      search.push(query);
    }

    return {
      method: method || RequestMethod.Get,
      search: search.join('&'),
      url
    };
  }
}
