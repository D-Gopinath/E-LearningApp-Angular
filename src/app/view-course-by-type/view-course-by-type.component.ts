import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-course-by-type',
  templateUrl: './view-course-by-type.component.html',
  styleUrls: ['./view-course-by-type.component.css']
})
export class ViewCourseByTypeComponent implements OnInit {
  id!: number;
  courseData: any;

  constructor(private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['cid'];
    this.CourseByType()
  }

  CourseByType(){
    const url="http://localhost:9000/courses/viewbytype?cId="+this.id;
    this.http.get(url).subscribe(res=>{
      this.courseData=res;
    },err=>{
      console.log(err.error.message);
      alert(err.error.message);
    })
  }

}
