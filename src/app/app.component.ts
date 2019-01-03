import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { TctapService } from './shared/tctap.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
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
          let child = this.route.firstChild;
          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
            } else if (child.snapshot.data && child.snapshot.data.title) {
              return child.snapshot.data.title;
            } else {
              return null;
            }
          }
          return null;
        })
      )
      .subscribe(title => {
        console.log(title);
        this.tctap.setHeaderTitle(title);
      });
  }
}
