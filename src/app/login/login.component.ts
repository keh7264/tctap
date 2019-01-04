import { TctapService } from './../shared/tctap.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private tctap: TctapService) {
    this.tctap.setHeaderInfo('', true, false, false, false);
  }

  ngOnInit() {}
}
