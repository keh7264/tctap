import { TctapService } from './../../shared/tctap.service';
import { takeUntil, auditTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { httpService } from 'src/app/shared/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {
  constructor(private tctap: TctapService) {}

  httpParams: HttpParams;
  private _category: string = '';
  private _keyword: string = '';
  private _sort: string = '1';
  show: boolean = false;
  case_list: any;
  case_category_list: any;
  unsubscribe = new Subject();
  keywordChanged = new Subject();

  get category() {
    return this._category;
  }
  set category(value: string) {
    this._category = value;
    this.getCaseList();
  }

  get keyword() {
    return this._keyword;
  }

  set keyword(value: string) {
    this._keyword = value;
    this.keywordChanged.next();
  }

  get sort() {
    return this._sort;
  }
  set sort(value: string) {
    this._sort = value;
    this.getCaseList();
  }

  ngOnInit() {
    this.tctap.setHeaderInfo('Cases', true, false);
    this.getCaseList();
    this.keywordChanged
      .pipe(
        takeUntil(this.unsubscribe),
        auditTime(200)
      )
      .subscribe(() => {
        this.getCaseList();
      });
  }

  private getCaseList() {
    this.httpParams = new HttpParams()
      .set('annual', '2018')
      .set('category', this.category)
      .set('search', this.keyword)
      .set('sort', this.sort);
    this.tctap.query('get_case_list', this.httpParams).subscribe(response => {
      this.show = true;
      this.case_list = response.case_list;
      this.case_category_list = response.case_category_list;
      console.log(response);
    });
  }
}
