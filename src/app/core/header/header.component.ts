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

  constructor(
    private tctap: TctapService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    // this.router.events
    //   .pipe(
    //     filter(event => event instanceof NavigationEnd),
    //     map(() => {
    //       const child = this.route.firstChild.snapshot.data;
    //       return !!child ? child : null;
    //     })
    //   )
    //   .subscribe(data => {
    //     console.log(data);
    //     if (data && data.title) {
    //       this.title = data.title;
    //       this.type = data.title === 'main' ? 'main' : 'default';
    //     }
    //   });

    this.tctap.headerTitleChanged().subscribe(title => {
      if (title) {
        console.log(title);
        this.title = title;
      }
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        window.localStorage.setItem('previousUrl', this.router.url);
      }
    });
  }

  onBackButtonClicked() {
    // const previousUrl = window.localStorage.getItem('previousUrl');
    // this.router.navigateByUrl(previousUrl);
    this.location.back();
  }
}
