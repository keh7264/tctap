import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyGroupComponent } from './faculty-group.component';

describe('FacultyGroupComponent', () => {
  let component: FacultyGroupComponent;
  let fixture: ComponentFixture<FacultyGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
