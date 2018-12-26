import { HighlightKeywordPipe } from './shared/highlight-keyword.pipe';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbstractsDetailComponent } from './e-science-station/abstracts/abstracts-detail/abstracts-detail.component';
import { AbstractsComponent } from './e-science-station/abstracts/abstracts.component';
import { CasesComponent } from './e-science-station/cases/cases.component';
import { EScienceStationComponent } from './e-science-station/e-science-station.component';
import { BoardListComponent } from './faculties/board-list/board-list.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { FacultyComponent } from './faculties/faculty/faculty.component';
import { ListComponent } from './faculties/list/list.component';
import { MainComponent } from './main/main.component';
import { LectureComponent } from './programs/program/lecture/lecture.component';
import { ProgramComponent } from './programs/program/program.component';
import { ProgramsComponent } from './programs/programs.component';
import { httpService } from './shared/http.service';
import { OrderByFacultyPipe } from './shared/order-by-faculty.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProgramsComponent,
    MainComponent,
    ProgramComponent,
    FacultyComponent,
    OrderByFacultyPipe,
    FacultiesComponent,
    BoardListComponent,
    ListComponent,
    LectureComponent,
    EScienceStationComponent,
    AbstractsComponent,
    CasesComponent,
    AbstractsDetailComponent,
    HighlightKeywordPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [httpService, DatePipe, OrderByFacultyPipe, HighlightKeywordPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
