import { TctapService } from 'src/app/shared/tctap.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-partners',
  templateUrl: './global-partners.component.html',
  styleUrls: ['./global-partners.component.scss']
})
export class GlobalPartnersComponent implements OnInit {
  constructor(private tctap: TctapService) {}

  ngOnInit() {
    this.tctap.setHeaderInfo('Global Partners', true, false);
  }
}
