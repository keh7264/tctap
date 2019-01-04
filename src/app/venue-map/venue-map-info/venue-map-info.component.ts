import { VenueMap } from './../venue-map.provider';
import { ActivatedRoute } from '@angular/router';
import { TctapService } from 'src/app/shared/tctap.service';
import { Component, OnInit } from '@angular/core';
import { VenueMapProvider } from '../venue-map.provider';

@Component({
  selector: 'app-venue-map-info',
  templateUrl: './venue-map-info.component.html',
  styleUrls: ['./venue-map-info.component.scss'],
  providers: [VenueMapProvider]
})
export class VenueMapInfoComponent implements OnInit {
  img: string;
  venueId: number;
  venueMap: VenueMap;
  venueMapList: VenueMap[] = [];
  constructor(
    private tctap: TctapService,
    private route: ActivatedRoute,
    private vp: VenueMapProvider
  ) {}

  ngOnInit() {
    this.venueId = +this.route.snapshot.paramMap.get('id');
    this.venueMapList = this.vp.getVenueList();
    this.venueMap = this.venueMapList.find(
      venueMap => venueMap.id === this.venueId
    );
    this.tctap.setHeaderTitle(this.venueMap.title);
    this.tctap.showBackButton(true);
    //   this.vp.getSelectedVenueMap().subscribe(venueMap => {
    //     if (venueMap) {
    //       this.venueMap = venueMap;
    //     }
    //   });
    // }
  }
}
