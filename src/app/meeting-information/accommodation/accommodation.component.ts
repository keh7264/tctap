import { Component, OnInit } from '@angular/core';
import { TctapService } from 'src/app/shared/tctap.service';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent implements OnInit {
  accommodationList: any[] = [];
  constructor(private tctap: TctapService) {}

  ngOnInit() {
    this.tctap.setHeaderInfo('Accommodation', true, false);
    this.tctap
      .query('/meetingInformation/accommodation', { annual: 2018 })
      .subscribe(response => {
        console.log(response);
        this.accommodationList = response.accommodation_list;
      });
  }
}
