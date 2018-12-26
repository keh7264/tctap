import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractsDetailComponent } from './abstracts-detail.component';

describe('AbstractsDetailComponent', () => {
  let component: AbstractsDetailComponent;
  let fixture: ComponentFixture<AbstractsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
