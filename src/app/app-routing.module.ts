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

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'program/list',
    component: ProgramsComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'program/:id',
    component: ProgramComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
