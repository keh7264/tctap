import { Component, OnInit } from '@angular/core';
import { TctapService } from 'src/app/shared/tctap.service';

@Component({
  selector: 'app-sponsor-list',
  templateUrl: './sponsor-list.component.html',
  styleUrls: ['./sponsor-list.component.scss']
})
export class SponsorListComponent implements OnInit {
  sponsors: any[] = [];
  constructor(private tctap: TctapService) {}

  ngOnInit() {
    this.tctap
      .query('get_sponsor_list', { annual: 2018 })
      .subscribe(response => {
        console.log(response);
        this.sponsors = response.sponsor_list;
      });
  }
}
