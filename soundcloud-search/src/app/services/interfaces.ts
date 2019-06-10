import { RequestMethod } from '@angular/http';
import { Track } from '../models/track';

export interface IPaginatedData {
  collection: Track[];
  next_href?: string;
}

export interface IRequestArgs {
  method: RequestMethod;
  search: string;
  url: string;
}

export interface IRequestOptions {
  method?: RequestMethod;
  paginate?: boolean;
  query?: string;
  url: string;
}
