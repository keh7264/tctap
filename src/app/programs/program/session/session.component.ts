import { httpService } from 'src/app/shared/http.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/shared/result.model';
import { TctapService } from 'src/app/shared/tctap.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  sessionId: string;
  session: Session;
  show: boolean = false;
  seeMore: boolean = false;

  ngOnInit() {
    this.sessionId = this.route.snapshot.paramMap.get('id');
    this.getSession();
    this.tctap.setHeaderTitle('Session');
  }
  constructor(private route: ActivatedRoute, private tctap: TctapService) {}

  getSession() {
    this.tctap
      .query('get_session_info', { session_id: this.sessionId })
      .subscribe(res => {
        this.session = res.session;
        this.show = true;
      });
  }
}
