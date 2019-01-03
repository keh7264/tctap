import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TctapService {
  _headerTitle: string = 'TCTAP';
  title = new Subject<string>();
  constructor() {}

  setHeaderTitle(title: string) {
    this._headerTitle = title;
    this.title.next(title);
  }

  getHeaderTitle() {
    return this._headerTitle;
  }

  headerTitleChanged() {
    return this.title;
  }
}
