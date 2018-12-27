import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedResearchComponent } from './featured-research.component';

describe('FeaturedResearchComponent', () => {
  let component: FeaturedResearchComponent;
  let fixture: ComponentFixture<FeaturedResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
