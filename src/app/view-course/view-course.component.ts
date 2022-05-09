import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {
  id!: Number;
  courseData: any;

  constructor(private route: ActivatedRoute,private http: HttpClient) { }
  params!:any;
  courseId!:any;
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.viewCourseDetails()
    
  }

  viewCourseDetails(){
    const url="http://localhost:9000/courses/viewcourse/"+this.id;
    this.http.get(url).subscribe(res=>{
      this.courseData=res;
    },err=>{
      console.log(err.error.message);
      alert(err.error.message);
    })
  }

  getUser(){
    let user = localStorage.getItem("userData");
    return user != null ? JSON.parse(user): null;
  }

  enrollCourse(){

    let uId = this.getUser().id;
    let cId = this.id;
    console.log(uId,cId);

    const url ="http://localhost:9000/course/enroll/"+this.id+"/"+uId;
    this.http.get(url).subscribe(res=>{
      alert("Enrolled Successfully");
    },err=>{
      console.log(err.error.message);
      alert("Already Enrolled");
    })      
  }
}
