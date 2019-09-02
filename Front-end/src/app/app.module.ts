// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { MainComponent } from './main/main.component';
import { ClassListComponent } from './secretary/class-list/class-list.component';
import { StudentListComponent } from './secretary/student-list/student-list.component';
import { ScheduleComponent } from './secretary/schedule/schedule.component';
import { ScheduleAsideComponent } from './secretary/schedule-aside/schedule-aside.component';
import {ExerciseComponent} from './secretary/exercise/exercise.component';
import {AddExerciseComponent} from './secretary/add-exercise/add-exercise.component';

// Services
import { UserSessionService } from './services/user-session.service';
import { ClassDataService } from './services/class-data.service';
import { ExerciseDataService } from './services/exercise-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserLoginComponent,
    MainComponent,
    ClassListComponent,
    StudentListComponent,
    ScheduleComponent,
    ScheduleAsideComponent,
    ExerciseComponent,
    AddExerciseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [UserSessionService, ClassDataService, ExerciseDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
