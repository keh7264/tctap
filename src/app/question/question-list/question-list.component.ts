import { QuestionProvider } from './../question.provider';
import { TctapService } from 'src/app/shared/tctap.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
  providers: [QuestionProvider]
})
export class QuestionListComponent implements OnInit, OnDestroy {
  roomList: any[];
  unsubscribe = new Subject();
  constructor(private tctap: TctapService, private qp: QuestionProvider) {}

  ngOnInit() {
    this.qp
      .onRoomListChanged()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(list => {
        this.roomList = list;
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
