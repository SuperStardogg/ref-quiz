import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FilterResultsService {
  readonly API_SEARCH_FILTER_SERVICE = 'https://api.publicapis.org/categories'

  constructor(private http: HttpClient) { }

  getCategories<T=any>() : Observable<T[]>{
    return this.http.get<T[]>(this.API_SEARCH_FILTER_SERVICE)
  }
}
