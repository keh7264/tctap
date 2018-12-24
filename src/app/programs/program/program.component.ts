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
  }
  constructor(private route: ActivatedRoute, private http: httpService) {}

  getSession() {
    this.http
      .query('get_session_info', { session_id: this.sessionId })
      .subscribe(res => {
        this.session = res.session;
        console.log(this.session);
        this.show = true;
      });
  }
}
