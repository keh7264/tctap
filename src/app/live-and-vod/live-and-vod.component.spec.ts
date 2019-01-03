import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAndVodComponent } from './live-and-vod.component';

describe('LiveAndVodComponent', () => {
  let component: LiveAndVodComponent;
  let fixture: ComponentFixture<LiveAndVodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveAndVodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveAndVodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
