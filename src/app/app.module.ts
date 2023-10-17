import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './course/courses.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseEditComponent } from './course/course-edit/course-edit.component';
import { CourseAddComponent } from './course/course-add/course-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseEditComponent,
    CourseAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
