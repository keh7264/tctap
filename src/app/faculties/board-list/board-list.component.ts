import { httpService } from './../../shared/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {
  filteredList: any;

  constructor(private http: httpService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http
      .query('get_faculty_list', { group_id: 10, annual: '2018' })
      .subscribe(response => {
        this.filteredList = response.filteredList;
        console.log(response);
      });
  }
}
