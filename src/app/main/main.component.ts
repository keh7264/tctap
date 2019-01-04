import { TctapService } from './../shared/tctap.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private router: Router, private tctap: TctapService) {}

  ngOnInit() {
    this.tctap.setHeaderInfo('main', false, false, true);
  }
}
