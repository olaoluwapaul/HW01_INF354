import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/shared/course';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {

  constructor(private data:DataService, private router : Router , private activated:ActivatedRoute) { }

  //Creating the form 
  editCourse: Course = new Course();

  editCourseForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    duration: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required])
  })

  ngOnInit(): void 
  {

     
       this.activated.params.subscribe(params => { 
       this.data.GetCourse(params['id']).subscribe(feedback => { 

       this.editCourse = feedback as Course;

      this.editCourseForm.controls['name'].setValue(this.editCourse.name);
      this.editCourseForm.controls['duration'].setValue(this.editCourse.duration);
       this.editCourseForm.controls['description'].setValue(this.editCourse.description);
     })

    })
 }

  editCourseFunc()
  {
    let course = new Course();
    course.name = this.editCourseForm.value.name;
    course.description = this.editCourseForm.value.description;
    course.duration = this.editCourseForm.value.duration;

   this.data.UpdateCourse(this.editCourse.courseId,course).subscribe((feedback:any) => {

    if(feedback.statusCode == 200)
    {
      this.router.navigate(['/'])
    }
    else
    {
      alert(feedback.message);
    }
   });

  }

}
