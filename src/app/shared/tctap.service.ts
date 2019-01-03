import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TctapService {
  headerTitle: string = 'TCTAP';
  constructor() {}

  setHeaderTitle(title: string) {
    this.headerTitle = title;
  }

  getHeaderTitle() {
    return this.headerTitle;
  }
}
