import { TctapService } from 'src/app/shared/tctap.service';
import { httpService } from './../../shared/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {
  filteredList: any;

  constructor(private tctap: TctapService) {}

  ngOnInit() {
    this.tctap.setHeaderInfo('Board Members', true, false);
    this.getData();
  }

  getData() {
    this.tctap
      .query('get_faculty_list', { group_id: 10, annual: '2018' })
      .subscribe(response => {
        this.filteredList = response.filteredList;
        console.log(response);
      });
  }
}
