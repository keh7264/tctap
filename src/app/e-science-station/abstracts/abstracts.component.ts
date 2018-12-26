import { HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { httpService } from './../../shared/http.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { auditTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-abstracts',
  templateUrl: './abstracts.component.html',
  styleUrls: ['./abstracts.component.scss']
})
export class AbstractsComponent implements OnInit, OnDestroy {
  show: boolean = false;
  abstract_list: any;
  abstract_category_list: any;
  queryParam = new HttpParams();
  annual = '2018';
  _sort: string = '1';
  _category: string = '';
  _keyword: string = '';
  unsubscribe = new Subject();
  keywordChanged = new Subject();

  get category() {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
    this.getAbstractList();
  }

  get sort() {
    return this._sort;
  }

  set sort(value: string) {
    this._sort = value;
    this.getAbstractList();
  }

  get keyword() {
    return this._keyword;
  }

  set keyword(value: string) {
    this._keyword = value;
    this.keywordChanged.next();
  }

  constructor(private http: httpService, private route: ActivatedRoute) {
    this.keywordChanged
      .pipe(
        auditTime(200),
        takeUntil(this.unsubscribe)
      )
      .subscribe(() => {
        console.log(this.keyword);
        this.getAbstractList();
      });
  }

  ngOnInit() {
    this.getAbstractList();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private getAbstractList() {
    this.queryParam = new HttpParams()
      .set('annual', this.annual)
      .set('category', this.category)
      .set('sort', this.sort)
      .set('search', this.keyword);
    this.http
      .query('get_abstract_list', this.queryParam)
      .subscribe(response => {
        this.abstract_list = response.abstract_list;
        this.abstract_category_list = response.abstract_category_list;
        this.show = true;
        console.log(response);
      });
  }
}
