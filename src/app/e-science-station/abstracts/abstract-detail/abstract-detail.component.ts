import { ActivatedRoute } from '@angular/router';
import { httpService } from './../../../shared/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abstract-detail',
  templateUrl: './abstract-detail.component.html',
  styleUrls: ['./abstract-detail.component.scss']
})
export class AbstractDetailComponent implements OnInit {
  abstractItem: any;
  abstractId: string;
  show: boolean = false;
  constructor(private http: httpService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.abstractId = this.route.snapshot.paramMap.get('id');
    this.http
      .query('get_abstract_info', { abstract_id: this.abstractId })
      .subscribe(response => {
        this.abstractItem = response.abstractItem;
        this.show = true;
      });
  }

  goJACC(url: string) {
    window.open(url, '_blank');
  }
}