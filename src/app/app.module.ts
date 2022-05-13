import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CourselistComponent } from './courselist/courselist.component';
import { EnrolledcoursesComponent } from './enrolledcourses/enrolledcourses.component';
import { FooterComponent } from './footer/footer.component';
import { SafePipe } from './safe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ViewCourseByTypeComponent } from './view-course-by-type/view-course-by-type.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ManagecourseComponent } from './managecourse/managecourse.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    RegisterComponent,
    LoginComponent,
    ViewCourseComponent,
    CourselistComponent,
    EnrolledcoursesComponent,
    FooterComponent,
    SafePipe,
    ViewCourseByTypeComponent,
    ManagecourseComponent,
    ManageUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
