import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { httpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.scss']
})
export class LectureComponent implements OnInit {
  lecture: any;
  lectureId: string;
  show: boolean = false;
  constructor(private http: httpService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getLectureId();
    this.getData();
  }

  private getLectureId() {
    this.lectureId = this.route.snapshot.paramMap.get('id');
  }

  getData() {
    this.http
      .query('get_lecture_info', { lecture_id: this.lectureId })
      .subscribe(response => {
        this.lecture = response.lecture;
        console.log(this.lecture);
        this.show = true;
      });
  }
}
