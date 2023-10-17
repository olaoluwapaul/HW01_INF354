import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Course } from '../shared/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses:Course[] = []

  constructor(private dataService: DataService, private router:Router) { }

  ngOnInit(): void {
    this.GetCourses()
  }

  
  GetCourses()
  {
    //this.dataService.GetCourses().subscribe(result => {
     // let courseList:any[] = result
     // courseList.forEach((element) => {
      //  this.courses.push(element)
     //   });
    //}) 

    this.dataService.GetCourses().subscribe(res => {
      this.courses = res as Course[]; //information is coming through as an array
    });
  
 }

 EditCourse(courseId: Number){
    this.router.navigate(['/course',courseId]);
 }

 DeleteCourse(courseId: Number)
 {

   this.dataService.DeleteCourse(courseId).subscribe((resvalue:any) =>{
     if(resvalue.statusCode == "200")
     {
      //refreshes the page
      this.GetCourses();
     }
     else
     {
      //alerts that something went wrong
       alert(resvalue.message);
     }
   })
   
 }

}
