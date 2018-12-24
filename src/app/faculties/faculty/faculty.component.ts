import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { httpService } from '../../shared/http.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {
  facultyId: string;
  faculty: any;
  show: boolean = false;
  constructor(private http: httpService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.facultyId = this.route.snapshot.paramMap.get('id');
    this.getFaculty();
  }

  getFaculty() {
    this.http
      .query('get_faculty_info', { faculty_id: this.facultyId })
      .subscribe(response => {
        this.faculty = response.faculty;
        this.show = true;
      });
  }
}
