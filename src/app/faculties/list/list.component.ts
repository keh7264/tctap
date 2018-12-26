import { ActivatedRoute } from '@angular/router';
import { httpService } from './../../shared/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  filteredList: any;
  groupId: string;
  constructor(private http: httpService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.groupId = this.route.snapshot.paramMap.get('id');
    this.getData();
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
