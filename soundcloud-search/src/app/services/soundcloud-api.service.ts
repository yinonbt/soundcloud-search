import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, Response } from '@angular/http';
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
  constructor(private http: Http) {}

  fetchSearchResults(query: string): Observable<IPaginatedData> {
    return this.request({
      paginate: true,
      query: `q=${query}`,
      url: API_TRACKS_URL
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
