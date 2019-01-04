import { httpService } from 'src/app/shared/http.service';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TctapService {
  _headerTitle: string = 'TCTAP';
  title = new Subject<string>();
  _showBackButton = new Subject<boolean>();
  constructor(private http: httpService) {}

  setHeaderTitle(title: string) {
    this._headerTitle = title;
    this.title.next(title);
  }

  showBackButton(show: boolean) {
    this._showBackButton.next(show);
  }

  showBackbuttonChanged() {
    return this._showBackButton;
  }

  getHeaderTitle() {
    return this._headerTitle;
  }

  headerTitleChanged() {
    return this.title;
  }

  query(url, params = {}) {
    return this.http.query(url, params);
  }
}
