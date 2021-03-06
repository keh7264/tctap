import { TctapService } from './../../../shared/tctap.service';
import { ActivatedRoute } from '@angular/router';
import { httpService } from './../../../shared/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.scss']
})
export class CaseDetailComponent implements OnInit {
  caseId: string;
  caseItem: any;
  show: boolean = false;

  constructor(private route: ActivatedRoute, private tctap: TctapService) {}

  ngOnInit() {
    this.tctap.setHeaderInfo('Cases', true, false);
    this.caseId = this.route.snapshot.paramMap.get('id');
    this.tctap
      .query('get_case_info', { case_id: this.caseId })
      .subscribe(response => {
        this.caseItem = response.case;
        this.show = true;
      });
  }

  goJACC(url: string) {
    window.open(url, '_blank');
  }
}
