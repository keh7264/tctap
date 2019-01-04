import { filter, map, takeUntil } from 'rxjs/operators';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  NavigationStart
} from '@angular/router';
import { TctapService, Header } from './../../shared/tctap.service';
import {
  Component,
  OnInit,
  Input,
  AfterContentInit,
  OnDestroy
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  header: Header;
  unsubscribe = new Subject();
  constructor(
    private tctap: TctapService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.tctap
      .headerInfoChanged()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((header: Header) => {
        if (header) {
          this.header = header;
        }
      });
  }

  onBackButtonClicked() {
    this.location.back();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
