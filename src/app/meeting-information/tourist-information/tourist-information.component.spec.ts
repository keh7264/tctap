import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristInformationComponent } from './tourist-information.component';

describe('TouristInformationComponent', () => {
  let component: TouristInformationComponent;
  let fixture: ComponentFixture<TouristInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
