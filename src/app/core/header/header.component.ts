import { filter, map } from 'rxjs/operators';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  NavigationStart
} from '@angular/router';
import { TctapService, Header } from './../../shared/tctap.service';
import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  header: Header;

  constructor(
    private tctap: TctapService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.tctap.headerInfoChanged().subscribe((header: Header) => {
      if (header) {
        this.header = header;
      }
    });
  }

  onBackButtonClicked() {
    this.location.back();
  }
}
