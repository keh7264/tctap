import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueMapInfoComponent } from './venue-map-info.component';

describe('VenueMapInfoComponent', () => {
  let component: VenueMapInfoComponent;
  let fixture: ComponentFixture<VenueMapInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueMapInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueMapInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
