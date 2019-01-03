import { TctapService } from './../shared/tctap.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-science-station',
  templateUrl: './e-science-station.component.html',
  styleUrls: ['./e-science-station.component.scss']
})
export class EScienceStationComponent implements OnInit {
  constructor(private tctap: TctapService) {}

  ngOnInit() {
    this.tctap.setHeaderTitle('e-Science Station');
  }
}
