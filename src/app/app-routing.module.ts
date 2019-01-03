import { SessionComponent } from './programs/program/session/session.component';
import { ProgramListComponent } from './programs/program-list/program-list.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionComponent } from './question/question.component';
import { MoreComponent } from './more/more.component';
import { LiveAndVodComponent } from './live-and-vod/live-and-vod.component';
import { CaseDetailComponent } from './e-science-station/cases/case-detail/case-detail.component';
import { AbstractDetailComponent } from './e-science-station/abstracts/abstract-detail/abstract-detail.component';
import { AbstractsComponent } from './e-science-station/abstracts/abstracts.component';
import { CasesComponent } from './e-science-station/cases/cases.component';
import { BoardListComponent } from './faculties/board-list/board-list.component';
import { ListComponent } from './faculties/list/list.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { FacultyComponent } from './faculties/faculty/faculty.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProgramsComponent } from './programs/programs.component';
import { ProgramComponent } from './programs/program/program.component';
import { LectureComponent } from './programs/program/lecture/lecture.component';
import { EScienceStationComponent } from './e-science-station/e-science-station.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'program',
    component: ProgramsComponent,
    children: [
      { path: 'list', component: ProgramListComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: ':id',
        component: ProgramComponent,
        children: [
          { path: '', component: SessionComponent, pathMatch: 'full' },
          { path: 'lecture/:id', component: LectureComponent }
        ]
      }
    ]
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'more',
    component: MoreComponent
  },

  {
    path: 'lecture/:id',
    component: LectureComponent
  },
  {
    path: 'faculties',
    component: FacultiesComponent
  },
  {
    path: 'faculty/list/:id',
    component: ListComponent
  },
  {
    path: 'faculty/board-list',
    component: BoardListComponent
  },
  {
    path: 'faculty/:id',
    component: FacultyComponent
  },
  {
    path: 'eScienceStation',
    component: EScienceStationComponent
  },
  {
    path: 'eScienceStation/cases',
    component: CasesComponent
  },
  { path: 'eScienceStation/abstracts', component: AbstractsComponent },
  {
    path: 'eScienceStation/abstracts/:id',
    component: AbstractDetailComponent
  },
  { path: 'eScienceStation/cases/:id', component: CaseDetailComponent },
  { path: 'liveAndVod', component: LiveAndVodComponent },
  {
    path: 'question',
    component: QuestionComponent,
    children: [
      { path: 'list', component: QuestionListComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list/:id', component: QuestionDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
