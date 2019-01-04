import { TctapService } from './../shared/tctap.service';
import { httpService } from './../shared/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-and-vod',
  templateUrl: './live-and-vod.component.html',
  styleUrls: ['./live-and-vod.component.scss']
})
export class LiveAndVodComponent implements OnInit {
  roomList: any[];
  constructor(private tctap: TctapService) {}

  ngOnInit() {
    this.tctap
      .query('get_session_list_by_room', { date: '20180431', annual: '2018' })
      .subscribe(response => {
        console.log(response);
        this.roomList = response.room_list;
      });
  }

  onRoomClick() {
    //웹캐스트 VOD URL을 노출하라는데..
  }
}
