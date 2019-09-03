import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { MainComponent } from './main/main.component';
import { ClassListComponent } from './secretary/class-list/class-list.component';
import { StudentListComponent } from './secretary/student-list/student-list.component';
import { SecretaryScheduleComponent } from './secretary/schedule/schedule.component';
import { ExerciseComponent } from './secretary/exercise/exercise.component';
import { AddExerciseComponent } from './secretary/add-exercise/add-exercise.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import { TeacherScheduleComponent } from './teacher/schedule/schedule.component';
import { ParentScheduleComponent } from './parent/schedule/schedule.component';
import { NotFoundComponent } from './main/not-found/not-found/not-found.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: UserLoginComponent},
  { path: '', component: MainComponent},
  { path: 'not-found', component: NotFoundComponent},
  { path: 'messages', component: MessagesListComponent},
  { path: 'secretary/class', canActivate: [AuthGuard], component: ClassListComponent},
  { path: 'secretary/students', canActivate: [AuthGuard], component: StudentListComponent},
  { path: 'secretary/schedule/plan',canActivate: [AuthGuard], component: SecretaryScheduleComponent},
  { path: 'secretary/schedule/exercise',canActivate: [AuthGuard], component: ExerciseComponent},
  { path: 'secretary/schedule/exercise/add-exercise',canActivate: [AuthGuard], component: AddExerciseComponent},
  { path: 'teacher/schedule/plan',canActivate: [AuthGuard], component: TeacherScheduleComponent},
  { path: 'parent/schedule/plan',canActivate: [AuthGuard], component: ParentScheduleComponent},
  { path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
