import { takeUntil } from 'rxjs/operators';
import { TctapService } from './../../shared/tctap.service';
import { ActivatedRoute } from '@angular/router';
import { PhotoGalleryProvider } from './../photo-gallery.provider';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

const initialPhotoId = 620;
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit, OnDestroy {
  photoId: number;
  selectedPhoto: any;
  photoList: any[] = [];
  unsubscribe = new Subject();

  constructor(
    private route: ActivatedRoute,
    private pgp: PhotoGalleryProvider,
    private tctap: TctapService
  ) {}

  ngOnInit() {
    this.tctap.setHeaderInfo('');
    this.photoId = +this.route.snapshot.paramMap.get('id');
    // this.route.paramMap.subscribe(params => {
    //   this.photoId = +params.get('id');
    //   this.getSelectedPhoto();
    // });

    this.pgp.photoListChanged
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(list => {
        this.photoList = list;
        if (!this.selectedPhoto) {
          this.getSelectedPhoto(initialPhotoId);
        }
      });

    this.pgp.selectedPhoto.pipe(takeUntil(this.unsubscribe)).subscribe(id => {
      if (id) {
        this.photoId = id;
        this.selectedPhoto = this.getSelectedPhoto(id);
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private getSelectedPhoto(id?: number) {
    const selectedId = !!id ? id : this.photoId;
    this.selectedPhoto = this.photoList.find(photo => +photo.id === selectedId);
    return this.selectedPhoto;
  }

  onClickNext(id) {
    this.pgp.selectedPhoto.next(id);
  }
}
