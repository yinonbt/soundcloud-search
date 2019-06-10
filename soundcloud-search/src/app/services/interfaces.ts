import { RequestMethod } from '@angular/http';

export interface IPaginatedData {
  collection: any[];
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
