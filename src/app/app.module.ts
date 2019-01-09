import { AccommodationComponent } from './meeting-information/accommodation/accommodation.component';
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
import { FacultyGroupComponent } from './faculties/faculty-group/faculty-group.component';
import { LoginComponent } from './login/login.component';
import { VenueMapComponent } from './venue-map/venue-map.component';
import { VenueMapListComponent } from './venue-map/venue-map-list/venue-map-list.component';
import { VenueMapInfoComponent } from './venue-map/venue-map-info/venue-map-info.component';
import { WrapUpInterviewComponent } from './wrap-up-interview/wrap-up-interview.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { SponsorListComponent } from './sponsors/sponsor-list/sponsor-list.component';
import { SponsorDetailComponent } from './sponsors/sponsor/sponsor-detail/sponsor-detail.component';
import { SponsorBoothComponent } from './sponsors/sponsor/sponsor-booth/sponsor-booth.component';
import { SponsorComponent } from './sponsors/sponsor/sponsor.component';
import { MeetingInformationComponent } from './meeting-information/meeting-information.component';
import { InformationComponent } from './meeting-information/information/information.component';
import { GeneralInformationComponent } from './meeting-information/general-information/general-information.component';
import { TransportationComponent } from './meeting-information/transportation/transportation.component';
import { TouristInformationComponent } from './meeting-information/tourist-information/tourist-information.component';
import { AboutCvrfComponent } from './meeting-information/about-cvrf/about-cvrf.component';
import { GlobalPartnersComponent } from './meeting-information/global-partners/global-partners.component';
import { TransportationListComponent } from './meeting-information/transportation/transportation-list/transportation-list.component';
import { CarComponent } from './meeting-information/transportation/car/car.component';
import { BusComponent } from './meeting-information/transportation/bus/bus.component';
import { SubwayComponent } from './meeting-information/transportation/subway/subway.component';
import { AirportComponent } from './meeting-information/transportation/airport/airport.component';

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
    SessionComponent,
    FacultyGroupComponent,
    LoginComponent,
    VenueMapComponent,
    VenueMapListComponent,
    VenueMapInfoComponent,
    WrapUpInterviewComponent,
    SponsorsComponent,
    SponsorListComponent,
    SponsorDetailComponent,
    SponsorBoothComponent,
    SponsorComponent,
    MeetingInformationComponent,
    InformationComponent,
    GeneralInformationComponent,
    AccommodationComponent,
    TransportationComponent,
    TouristInformationComponent,
    AboutCvrfComponent,
    GlobalPartnersComponent,
    TransportationListComponent,
    CarComponent,
    BusComponent,
    SubwayComponent,
    AirportComponent
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
