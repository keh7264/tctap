import { VenueMapProvider, VenueMap } from './../venue-map.provider';
import { Component, OnInit } from '@angular/core';
import { TctapService } from 'src/app/shared/tctap.service';

@Component({
  selector: 'app-venue-map-list',
  templateUrl: './venue-map-list.component.html',
  styleUrls: ['./venue-map-list.component.scss'],
  providers: [VenueMapProvider]
})
export class VenueMapListComponent implements OnInit {
  venueMapList: VenueMap[] = [];
  constructor(private vp: VenueMapProvider, private tctap: TctapService) {}

  ngOnInit() {
    this.tctap.setHeaderTitle('Venue Map');
    this.tctap.showBackButton(true);
    this.venueMapList = this.vp.getVenueList();
  }

  onClick(venueMap: VenueMap) {
    this.vp.setSelectedVenueMap(venueMap);
  }
}
