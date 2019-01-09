import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCvrfComponent } from './about-cvrf.component';

describe('AboutCvrfComponent', () => {
  let component: AboutCvrfComponent;
  let fixture: ComponentFixture<AboutCvrfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCvrfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCvrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
