import { TctapService } from './../../../shared/tctap.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { httpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-sponsor-booth',
  templateUrl: './sponsor-booth.component.html',
  styleUrls: ['./sponsor-booth.component.scss']
})
export class SponsorBoothComponent implements OnInit {
  boothId: string;
  source: any;
  constructor(
    private route: ActivatedRoute,
    private tctap: TctapService,
    private http: httpService
  ) {}

  ngOnInit() {
    this.boothId = this.route.snapshot.paramMap.get('booth');
    this.http
      .post('get_exhibition_map', {
        annual: 2018,
        booth: this.boothId
      })
      .subscribe(response => {
        console.log(response);
        this.source = response;
      });
  }
}
