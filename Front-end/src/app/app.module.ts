import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { MainComponent } from './main/main.component';

import { UserSessionService } from './services/user-session.service';
import { ClassListComponent } from './secretary/class-list/class-list.component';
import { StudentListComponent } from './secretary/student-list/student-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserLoginComponent,
    MainComponent,
    ClassListComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [UserSessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
