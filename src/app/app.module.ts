import { httpService } from './shared/http.service';
import { ProgramComponent } from './programs/program/program.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProgramsComponent } from './programs/programs.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FacultyComponent } from './faculty/faculty.component';
import { OrderByFacultyPipe } from './shared/order-by-faculty.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProgramsComponent,
    MainComponent,
    ProgramComponent,
    FacultyComponent,
    OrderByFacultyPipe
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [httpService, DatePipe, OrderByFacultyPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
