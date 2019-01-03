import { TctapService } from './../../shared/tctap.service';
import { httpService } from './../../shared/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Session } from 'src/app/shared/result.model';
@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
  sessionId: string;
  session: Session;
  show: boolean = false;
  seeMore: boolean = false;

  ngOnInit() {
    this.sessionId = this.route.snapshot.paramMap.get('id');
    this.getSession();
    this.tctap.setHeaderTitle('Session');
  }
  constructor(
    private route: ActivatedRoute,
    private http: httpService,
    private tctap: TctapService
  ) {}

  getSession() {
    this.http
      .query('get_session_info', { session_id: this.sessionId })
      .subscribe(res => {
        this.session = res.session;
        this.show = true;
      });
  }
}
