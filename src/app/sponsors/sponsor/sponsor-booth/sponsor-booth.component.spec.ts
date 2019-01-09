import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorBoothComponent } from './sponsor-booth.component';

describe('SponsorBoothComponent', () => {
  let component: SponsorBoothComponent;
  let fixture: ComponentFixture<SponsorBoothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorBoothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorBoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
