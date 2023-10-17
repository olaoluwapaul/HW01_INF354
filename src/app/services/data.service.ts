import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Course } from '../shared/course';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'http://localhost:5116/api/'

  httpOptions ={
    headers: new HttpHeaders({
      ContentType: 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { 
  }

  
  //C for Create
  //When it is a post you only supply the model object itself
  //You do not supply a url parameter, you just send through a course
  AddCourse(course:Course)
  {
    return this.httpClient.post(this.apiUrl + 'Course/AddCourse', course);
  }
  //R for Read: ALL
  GetCourses(){
    return this.httpClient.get(this.apiUrl+'Course/GetAllCourses');
    
  }

   //R for Read: ONE
   GetCourse(courseId: Number){
    return this.httpClient.get(this.apiUrl+'Course/GetAllCourse/' + courseId);
    
  }

   //U for Update: ALL
   UpdateCourse(courseId: Number, course:Course){
    return this.httpClient.put(this.apiUrl+ 'Course/UpdateCourse/' + courseId, course);
  }

    //D or Delete: ALL
    DeleteCourse(courseId: Number){
      return this.httpClient.delete(this.apiUrl+ 'Course/DeleteCourse/' + courseId);
    }
}


