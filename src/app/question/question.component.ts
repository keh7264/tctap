import { TctapService } from 'src/app/shared/tctap.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  constructor(private tctap: TctapService) {}

  ngOnInit() {
    this.tctap.setHeaderTitle('Send Your Question');
  }
}
