import { Router } from '@angular/router';
import { TctapService } from './../shared/tctap.service';
import { Component, OnInit } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.scss']
})
export class FacultiesComponent implements OnInit {
  constructor(private tctap: TctapService, private router: Router) {}

  ngOnInit() {}
}
