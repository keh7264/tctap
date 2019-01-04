import { filter, map } from 'rxjs/operators';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  NavigationStart
} from '@angular/router';
import { TctapService } from './../../shared/tctap.service';
import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'TCTAP';
  isBackButtonShow: boolean = true;
  isSearchButtonShow: boolean = true;
  backButtonList: string[] = ['session', 'lecture', 'faculty'];
  searchButtonList: string[] = ['program'];

  constructor(
    private tctap: TctapService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.isBackButtonShow = true;
    this.isSearchButtonShow = true;

    this.tctap.headerTitleChanged().subscribe(title => {
      if (title) {
        console.log(title);
        this.title = title;
        this.showBackButton();
        this.showSearchButton();
      }
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        window.localStorage.setItem('previousUrl', this.router.url);
      }
    });
  }

  private showBackButton() {
    if (this.backButtonList.includes(this.title.toLowerCase())) {
      this.isBackButtonShow = true;
    } else {
      this.isBackButtonShow = false;
    }
  }

  private showSearchButton() {
    if (this.searchButtonList.includes(this.title.toLowerCase())) {
      this.isSearchButtonShow = true;
    } else {
      this.isSearchButtonShow = false;
    }
  }

  onBackButtonClicked() {
    // const previousUrl = window.localStorage.getItem('previousUrl');
    // this.router.navigateByUrl(previousUrl);
    this.location.back();
  }
}
