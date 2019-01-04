import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapUpInterviewComponent } from './wrap-up-interview.component';

describe('WrapUpInterviewComponent', () => {
  let component: WrapUpInterviewComponent;
  let fixture: ComponentFixture<WrapUpInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapUpInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapUpInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
