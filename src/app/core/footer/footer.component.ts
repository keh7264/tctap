import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  activeTabIndex = 0;

  constructor() {}

  ngOnInit() {}

  onTabClicked(index: number) {
    this.activeTabIndex = index;
  }
}
