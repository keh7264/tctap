import { filter, map } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { TctapService } from './../../shared/tctap.service';
import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'TCTAP';
  type: string = 'default';

  constructor(
    private tctap: TctapService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          const child = this.route.firstChild.snapshot.data;
          return !!child ? child : null;
        })
      )
      .subscribe(data => {
        console.log(data);
        if (data && data.title) {
          this.title = data.title;
          this.type = data.title === 'main' ? 'main' : 'default';
        }
      });
  }
}
