import { PhotoGalleryProvider } from './../photo-gallery.provider';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TctapService } from 'src/app/shared/tctap.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-photo-gallery-list',
  templateUrl: './photo-gallery-list.component.html',
  styleUrls: ['./photo-gallery-list.component.scss']
})
export class PhotoGalleryListComponent implements OnInit, OnDestroy {
  constructor(
    private tctap: TctapService,
    private photoGalleryProvider: PhotoGalleryProvider,
    private router: Router
  ) {}
  photoList: any[] = [];
  unsubscribe = new Subject();

  ngOnInit() {
    this.tctap.setHeaderInfo('Photo Gallery');
    this.photoGalleryProvider.reloadPhotoAlbum();
    this.photoGalleryProvider.photoListChanged
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(list => {
        this.photoList = list;
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  clickImg(photo) {
    console.log(photo.id);
    this.photoGalleryProvider.selectedPhoto.next(photo.id);
    this.router.navigateByUrl('/photoGallery/photo');
  }
}
