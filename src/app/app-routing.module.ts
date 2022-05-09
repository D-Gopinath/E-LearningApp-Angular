import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CourselistComponent } from './courselist/courselist.component';
import { EnrolledcoursesComponent } from './enrolledcourses/enrolledcourses.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewCourseComponent } from './view-course/view-course.component';

const routes: Routes = [
  {path:'homepage',component:HomepageComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'viewcourse/:id',component:ViewCourseComponent},
  {path:'listcourse',component:CourselistComponent,canActivate:[AuthGuard]},
  {path:'enrolledcourse/:uid',component:EnrolledcoursesComponent,canActivate:[AuthGuard]},
  {path:'',redirectTo:'homepage',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
