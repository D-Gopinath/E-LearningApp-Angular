import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enrolledcourses',
  templateUrl: './enrolledcourses.component.html',
  styleUrls: ['./enrolledcourses.component.css']
})
export class EnrolledcoursesComponent implements OnInit {

  id!:number;
  courseData:any;
  constructor(private route: ActivatedRoute, private http: HttpClient,public domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['uid'];
    this.viewEnrolledCourses();
  }
  viewEnrolledCourses(){
    const url="http://localhost:9000/courses/enrolledlist/"+this.id;
    this.http.get(url).subscribe(res=>{
      console.log(res)
      this.courseData=res;
    },err=>{
      console.log(err.error.message);
      alert(err.error.message);
    })
  }

}
