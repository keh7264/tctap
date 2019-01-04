import { TctapService } from './../../shared/tctap.service';
import { ActivatedRoute } from '@angular/router';
import { httpService } from './../../shared/http.service';
import { Component, OnInit } from '@angular/core';

export class FacultyList {
  index: number;
  title: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  filteredList: any;
  selectedFacultyList;
  groupId: string;
  facultyLists: FacultyList[] = [
    { index: 1, title: 'International Invited Faculty' },
    { index: 2, title: 'International Faculty of the Year' },
    { index: 3, title: 'Korean Invited Faculty' },
    { index: 4, title: 'Korean Faculty of the Year' }
  ];
  constructor(
    private http: httpService,
    private route: ActivatedRoute,
    private tctap: TctapService
  ) {}

  ngOnInit() {
    this.groupId = this.route.snapshot.paramMap.get('id');
    this.setHeaderTitle();
    this.getData();
  }

  private setHeaderTitle() {
    if (this.groupId) {
      this.selectedFacultyList = this.facultyLists.filter(
        data => data.index === +this.groupId
      )[0];
      console.log(this.selectedFacultyList);
      this.tctap.setHeaderInfo(this.selectedFacultyList.title, true, false);
    }
  }

  getData() {
    this.http
      .query('get_faculty_list', { group_id: this.groupId, annual: '2018' })
      .subscribe(response => {
        this.filteredList = response.filteredList;
        console.log(response);
      });
  }
}
