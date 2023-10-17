import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './course/courses.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';
import { CourseAddComponent } from './course/course-add/course-add.component';

const routes: Routes = [
  {path: 'courses', component: CoursesComponent},  
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: 'course/:id', component:CourseEditComponent}, //pass through the id and take me to the courseEditComponent
  {path: 'course-add', component:CourseAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
