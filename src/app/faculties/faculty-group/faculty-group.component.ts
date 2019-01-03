import { TctapService } from './../../shared/tctap.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-group',
  templateUrl: './faculty-group.component.html',
  styleUrls: ['./faculty-group.component.scss']
})
export class FacultyGroupComponent implements OnInit {
  constructor(private tctap: TctapService) {}

  ngOnInit() {
    this.tctap.setHeaderTitle('Faculty');
  }
}
