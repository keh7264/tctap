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
  list: any;
  constructor(private route: ActivatedRoute, private tctap: TctapService) {}

  ngOnInit() {
    this.boothId = this.route.snapshot.paramMap.get('booth');
    this.tctap
      .query('get_exhibition_map', {
        annual: 2018,
        booth: this.boothId
      })
      .subscribe(response => {
        console.log(response);
        this.list = response.list;
      });
  }

  aaa(i) {
    console.log(i.booth);
  }
}
