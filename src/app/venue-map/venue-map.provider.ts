import { BehaviorSubject } from 'rxjs';

export interface VenueMap {
  id: number;
  imgName: string;
  title: string;
}

export class VenueMapProvider {
  selectedVenueMap = new BehaviorSubject<VenueMap>(null);

  venueList: VenueMap[] = [
    { id: 1, imgName: '1F.png', title: 'Level 1' },
    { id: 2, imgName: '2F.png', title: 'Level 2' },
    { id: 3, imgName: '3F.png', title: 'Level 3' },
    { id: 4, imgName: 'booth.png', title: 'Exhibitiion Hall' }
  ];

  getVenueList() {
    return this.venueList;
  }

  getSelectedVenueMap() {
    return this.selectedVenueMap;
  }

  setSelectedVenueMap(venueMap: VenueMap) {
    this.selectedVenueMap.next(venueMap);
  }
}
