import { Router } from '@angular/router';
import { httpService } from 'src/app/shared/http.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TctapService } from 'src/app/shared/tctap.service';

export interface TabItem {
  index: string;
  code: string;
  label: string;
}

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})
export class ProgramListComponent implements OnInit {
  constructor(
    private http: httpService,
    private datePipe: DatePipe,
    private router: Router,
    private tctap: TctapService
  ) {}

  get hasSessionList() {
    return !!this.sessionGroupList && this.sessionGroupList.length > 0;
  }

  sessionGroupList: any;
  show: boolean[] = [];
  activeTabIndex: string = '0';
  tabList: TabItem[] = [
    {
      index: '0',
      code: '',
      label: 'ALL'
    },
    {
      index: '1',
      code: '',
      label: 'NOW'
    },
    {
      index: '2',
      code: '20180428',
      label: 'April 28'
    },
    {
      index: '3',
      code: '20180429',
      label: 'April 29'
    },
    {
      index: '4',
      code: '20180430',
      label: 'April 30'
    },
    {
      index: '5',
      code: '20180501',
      label: 'May 1'
    }
  ];

  ngOnInit() {
    this.setTodayId();
    this.getData();
    this.tctap.setHeaderTitle('Program');
  }

  private setTodayId() {
    this.tabList.find(
      item => item.label === 'NOW'
    ).code = this.datePipe.transform(new Date(), 'yyyyMMdd');
  }

  getData(params: any = { annual: 2018 }) {
    this.http.query('get_session_list', params).subscribe(res => {
      if (res && res.session_group_list) {
        this.sessionGroupList = res.session_group_list;
        this.sessionGroupList.forEach((item, index) => {
          item.show = false;
        });
      }
    });
  }

  onTabClick(tab: TabItem) {
    this.activeTabIndex = tab.index;
    this.getData({ annual: 2018, date: tab.code });
  }

  onProgramClick(group: any) {
    if (group.show) {
      group.show = !group.show;
    } else {
      this.sessionGroupList.forEach(item => {
        item.show = false;
      });
      group.show = true;
    }
  }

  goProgramDetail(groupId: string) {
    this.router.navigate(['/program', groupId]);
  }
}
