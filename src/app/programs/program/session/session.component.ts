import { Session } from './../../../shared/result.model';
import { httpService } from 'src/app/shared/http.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TctapService } from 'src/app/shared/tctap.service';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  sessionId: string;
  session: Session;
  show: boolean = false;
  canSeeMore: boolean = false;
  ngOnInit() {
    this.sessionId = this.route.snapshot.paramMap.get('id');
    this.getSession();
    this.tctap.setHeaderInfo('Session', true, false);
  }
  constructor(private route: ActivatedRoute, private tctap: TctapService) {}

  getSession() {
    this.tctap
      .query('get_session_info', { session_id: this.sessionId })
      .subscribe(res => {
        this.session = res.session;
        console.log(this.session);
        this.show = true;
      });
  }

  onFavoriteClick() {
    this.session.is_favorite = this.toggle(this.session);
  }

  isFavorite(item: any) {
    return !!item && !!item.is_favorite && item.is_favorite === '1';
  }

  onFacultyFavoriteClick(faculty: any) {
    faculty.is_favorite = this.toggle(faculty);
    //TODO 서버에 없는 기능 추가 필요
  }

  onLectureFavoriteClick(lecture: any) {
    lecture.is_favorite = this.toggle(lecture);
  }

  toggle(item) {
    return this.isFavorite(item) ? '0' : '1';
  }

  seeMoreToggle(id) {
    if (this.canSeeMore) {
      return true;
    } else {
      return id < 3;
    }
  }
}
