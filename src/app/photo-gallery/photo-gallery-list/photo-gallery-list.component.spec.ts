import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGalleryListComponent } from './photo-gallery-list.component';

describe('PhotoGalleryListComponent', () => {
  let component: PhotoGalleryListComponent;
  let fixture: ComponentFixture<PhotoGalleryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoGalleryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGalleryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
