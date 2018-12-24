import { FacultyComponent } from './faculty/faculty.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProgramsComponent } from './programs/programs.component';
import { ProgramComponent } from './programs/program/program.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'programs',
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
    path: 'faculty/:id',
    component: FacultyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
