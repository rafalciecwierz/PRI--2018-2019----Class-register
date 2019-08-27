import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { MainComponent } from './main/main.component';
import { ClassListComponent } from './secretary/class-list/class-list.component';
import { StudentListComponent } from './secretary/student-list/student-list.component';


const routes: Routes = [
  { path: 'login', component: UserLoginComponent},
  { path: '', component: MainComponent},
  { path: 'secretary/class', component: ClassListComponent},
  { path: 'secretary/students', component: StudentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
