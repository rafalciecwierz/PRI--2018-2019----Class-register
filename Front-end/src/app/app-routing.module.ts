import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { MainComponent } from './main/main.component';
import { ClassListComponent } from './secretary/class-list/class-list.component';
import { StudentListComponent } from './secretary/student-list/student-list.component';
import { ScheduleComponent } from './secretary/schedule/schedule.component';
import {ExerciseComponent} from './secretary/exercise/exercise.component';
import {AddExerciseComponent} from './secretary/add-exercise/add-exercise.component';

const routes: Routes = [
  { path: 'login', component: UserLoginComponent},
  { path: '', component: MainComponent},
  { path: 'secretary/class', component: ClassListComponent},
  { path: 'secretary/students', component: StudentListComponent},
  { path: 'secretary/schedule/plan', component: ScheduleComponent},
  { path: 'secretary/schedule/exercise', component: ExerciseComponent},
  { path: 'secretary/schedule/exercise/add-exercise', component: AddExerciseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
