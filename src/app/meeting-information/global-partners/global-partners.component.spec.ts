import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalPartnersComponent } from './global-partners.component';

describe('GlobalPartnersComponent', () => {
  let component: GlobalPartnersComponent;
  let fixture: ComponentFixture<GlobalPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
