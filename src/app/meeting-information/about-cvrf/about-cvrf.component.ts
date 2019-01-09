import { Component, OnInit } from '@angular/core';
import { TctapService } from 'src/app/shared/tctap.service';

@Component({
  selector: 'app-about-cvrf',
  templateUrl: './about-cvrf.component.html',
  styleUrls: ['./about-cvrf.component.scss']
})
export class AboutCvrfComponent implements OnInit {
  constructor(private tctap: TctapService) {}

  ngOnInit() {
    this.tctap.setHeaderInfo('About CVRF', true, false);
  }
}
