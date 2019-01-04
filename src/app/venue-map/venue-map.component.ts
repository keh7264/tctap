import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venue-map',
  templateUrl: './venue-map.component.html',
  styleUrls: ['./venue-map.component.scss']
})
export class VenueMapComponent implements OnInit {
  venueList = [
    { id: 1, imgName: '1F.png', title: 'Level 1' },
    { id: 2, imgName: '2F.png', title: 'Level 2' },
    { id: 3, imgName: '3F.png', title: 'Level 3' },
    { id: 4, imgName: 'booth.png', title: 'Exhibitiion Hall' }
  ];

  constructor() {}

  ngOnInit() {}
}
