import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/shared/course';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {

  constructor(private data:DataService, private router: Router) { }

  //New form
  addCourseForm: FormGroup = new FormGroup({
    name:  new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  })
  
  addCourse(){
    //Validation of each field on the form to trigger submission to the API
    let course = new Course();
    course.name = this.addCourseForm.value.name;
    course.duration = this.addCourseForm.value.duration;
    course.description = this.addCourseForm.value.description;
   

    this.data.AddCourse(course).subscribe((feedback:any)=>{
    
    if(feedback.statusCode == "200")
    {
      //redirect to the listing page
      this.router.navigate(['/'])
       
    }
    else
    {
     //alerts that something went wrong to the user
      alert(feedback.message);
    }
    })
  }

  ngOnInit(): void {
  }

}
