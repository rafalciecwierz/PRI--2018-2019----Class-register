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

const routes: Routes = [
  { path: 'login', component: UserLoginComponent},
  { path: '', component: MainComponent},
  { path: 'messages', component: MessagesListComponent},
  { path: 'secretary/class', component: ClassListComponent},
  { path: 'secretary/students', component: StudentListComponent},
  { path: 'secretary/schedule/plan', component: SecretaryScheduleComponent},
  { path: 'secretary/schedule/exercise', component: ExerciseComponent},
  { path: 'secretary/schedule/exercise/add-exercise', component: AddExerciseComponent},
  { path: 'teacher/schedule/plan', component: TeacherScheduleComponent},
  { path: 'parent/schedule/plan', component: ParentScheduleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
