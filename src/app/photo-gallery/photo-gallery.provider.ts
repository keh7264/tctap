import { TctapService } from '../shared/tctap.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PhotoGalleryProvider {
  _photoList: any[] = [];
  photoListChanged = new BehaviorSubject<any[]>([]);
  selectedPhoto = new BehaviorSubject<number>(607);

  set photoList(response) {
    this._photoList = response;
    this.photoListChanged.next(this._photoList);
  }

  get photoList() {
    return this._photoList;
  }

  constructor(private tctap: TctapService) {}

  reloadPhotoAlbum() {
    this.tctap
      .query('get_photo_album', { annual: 2018 })
      .subscribe(response => {
        this.photoList = response.photo_list;
      });
  }

  getNextPhoto(id: number) {
    return this.photoList.find(photo => photo.id === ++id);
  }

  setSelectedPhoto(photo) {
    this.selectedPhoto.next(photo);
  }
}
