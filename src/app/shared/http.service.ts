import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

const annual = '2018';
const localUrl = `http://localhost:8080`;
const realUrl = `http://app.summit-tctap.com:8080/${annual}`;
export interface Param {
  [key: string]: string;
}
const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable()
export class httpService {
  constructor(private http: HttpClient) {}
  query(url, params = {}) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: params
    };
    return this.http
      .get<any>(`${localUrl}/${url}.json?`, httpOptions)
      .pipe(take(1));
  }

  post(url, param = {}) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/html'
      }),
      params: param
    };

    return this.http.get<any>(`${localUrl}/${url}?`, httpOptions).pipe(take(1));
  }
}
