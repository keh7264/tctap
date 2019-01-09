import { Component, OnInit } from '@angular/core';
import { TctapService } from 'src/app/shared/tctap.service';

@Component({
  selector: 'app-transportation-list',
  templateUrl: './transportation-list.component.html',
  styleUrls: ['./transportation-list.component.scss']
})
export class TransportationListComponent implements OnInit {
  constructor(private tctap: TctapService) {}

  ngOnInit() {
    this.tctap.setHeaderInfo('Transportation', true, false);
  }
}
