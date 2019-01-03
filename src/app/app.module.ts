import { HighlightKeywordPipe } from './shared/highlight-keyword.pipe';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbstractDetailComponent } from './e-science-station/abstracts/abstract-detail/abstract-detail.component';
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
import { CaseDetailComponent } from './e-science-station/cases/case-detail/case-detail.component';
import { FeaturedResearchComponent } from './e-science-station/featured-research/featured-research.component';
import { LiveAndVodComponent } from './live-and-vod/live-and-vod.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MoreComponent } from './more/more.component';
import { QuestionComponent } from './question/question.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { ProgramListComponent } from './programs/program-list/program-list.component';
import { SessionComponent } from './programs/program/session/session.component';

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
    AbstractDetailComponent,
    HighlightKeywordPipe,
    CaseDetailComponent,
    FeaturedResearchComponent,
    LiveAndVodComponent,
    HeaderComponent,
    FooterComponent,
    MoreComponent,
    QuestionComponent,
    QuestionListComponent,
    QuestionDetailComponent,
    ProgramListComponent,
    SessionComponent
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
