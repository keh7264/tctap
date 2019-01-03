import { TctapService } from 'src/app/shared/tctap.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  roomList: any[];
  constructor(private tctap: TctapService) {}

  ngOnInit() {
    this.tctap
      .query('/get_question_room', { annual: 2018 })
      .subscribe(response => {
        this.roomList = response.room_list;
      });
  }
}
