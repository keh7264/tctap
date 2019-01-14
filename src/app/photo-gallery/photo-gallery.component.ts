import { TctapService } from 'src/app/shared/tctap.service';
import { Component, OnInit } from '@angular/core';
import { PhotoGalleryProvider } from './photo-gallery.provider';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {
  constructor(private tctap: TctapService, private pgp: PhotoGalleryProvider) {}
  ngOnInit() {
    this.tctap.setHeaderInfo('Photo Gallery');
    this.pgp.reloadPhotoAlbum();
  }
}
