import { TctapService } from './../shared/tctap.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class QuestionProvider {
  roomListChanged = new Subject<any[]>();
  _roomList: any[] = [];

  set roomList(list) {
    this._roomList = list;
    this.roomListChanged.next(this._roomList);
  }

  constructor(private tctap: TctapService) {
    this.fetchRoomList();
  }

  fetchRoomList() {
    this.tctap
      .query('get_question_room', { annual: 2018 })
      .subscribe(response => {
        this.roomList = response.room_list;
      });
  }

  onRoomListChanged() {
    return this.roomListChanged;
  }
}
