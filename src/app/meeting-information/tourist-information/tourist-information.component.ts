import { Component, OnInit } from '@angular/core';
import { TctapService } from 'src/app/shared/tctap.service';

@Component({
  selector: 'app-tourist-information',
  templateUrl: './tourist-information.component.html',
  styleUrls: ['./tourist-information.component.scss']
})
export class TouristInformationComponent implements OnInit {
  constructor(private tctap: TctapService) {}

  ngOnInit() {
    this.tctap.setHeaderInfo('Tourist Information', true, false);
  }
}
