import { httpService } from 'src/app/shared/http.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, Sanitizer } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TctapService } from 'src/app/shared/tctap.service';
import { Sponsor } from 'src/app/shared/result.model';

@Component({
  selector: 'app-sponsor-detail',
  templateUrl: './sponsor-detail.component.html',
  styleUrls: ['./sponsor-detail.component.scss']
})
export class SponsorDetailComponent implements OnInit {
  sponsorId: string;
  sponsor: Sponsor;
  htmlll: any;

  constructor(
    private route: ActivatedRoute,
    private tctap: TctapService,
    public sanitizer: DomSanitizer,
    public http: httpService,
    private router: Router
  ) {}

  ngOnInit() {
    this.tctap.setHeaderInfo('Sponsors', true, false);
    this.sponsorId = this.route.snapshot.paramMap.get('id');
    this.tctap
      .query('get_sponsor_info', { sponsor_id: this.sponsorId })
      .subscribe(response => {
        console.log(response);
        this.sponsor = response.sponsor;
      });
  }
}
