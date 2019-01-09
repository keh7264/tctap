import { Header } from './tctap.service';
import { httpService } from 'src/app/shared/http.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface Header {
  isMain: boolean;
  title: string;
  showBackbutton: boolean;
  showSearchButton: boolean;
  show: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TctapService {
  _headerTitle: string = 'TCTAP';
  _header = new BehaviorSubject<Header>({
    title: 'main',
    showBackbutton: false,
    showSearchButton: false,
    isMain: true,
    show: false
  });
  title = new Subject<string>();
  _showBackButton = new Subject<boolean>();
  constructor(private http: httpService) {}

  setHeaderInfo(
    title: string,
    showBackbutton = true,
    showSearchButton = false,
    isMain = false,
    show = true
  ) {
    this._header.next({
      title,
      showBackbutton,
      showSearchButton,
      isMain,
      show
    });
  }

  headerInfoChanged() {
    return this._header;
  }

  query(url, params = {}) {
    return this.http.query(url, params);
  }
}
