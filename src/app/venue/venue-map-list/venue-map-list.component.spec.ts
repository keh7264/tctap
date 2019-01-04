import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueMapListComponent } from './venue-map-list.component';

describe('VenueMapListComponent', () => {
  let component: VenueMapListComponent;
  let fixture: ComponentFixture<VenueMapListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueMapListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueMapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
