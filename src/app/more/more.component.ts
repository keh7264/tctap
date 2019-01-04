import { Component, OnInit } from '@angular/core';
import { TctapService } from '../shared/tctap.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {
  constructor(private tctap: TctapService) {}

  ngOnInit() {
    this.tctap.setHeaderInfo('More', false, false);
  }
}
