import { TctapService } from 'src/app/shared/tctap.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  constructor(private tctap: TctapService) {}

  ngOnInit() {
    this.tctap.setHeaderInfo('Car');
  }
}
