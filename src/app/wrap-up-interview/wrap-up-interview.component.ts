import { TctapService } from 'src/app/shared/tctap.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-wrap-up-interview',
  templateUrl: './wrap-up-interview.component.html',
  styleUrls: ['./wrap-up-interview.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class WrapUpInterviewComponent implements OnInit {
  constructor(private tctap: TctapService) {}

  ngOnInit() {
    this.tctap.setHeaderInfo('Wrap-up Interview', true, false);
  }
}
