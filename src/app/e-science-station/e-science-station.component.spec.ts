import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EScienceStationComponent } from './e-science-station.component';

describe('EScienceStationComponent', () => {
  let component: EScienceStationComponent;
  let fixture: ComponentFixture<EScienceStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EScienceStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EScienceStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
