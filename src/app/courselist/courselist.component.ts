import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.listCourses()

  }
  courses!:any;
  listCourses(){

    const url = "http://localhost:9000/course/list";
    this.http.get(url).subscribe(res=>{
      this.courses=res;
    },err=>{
      console.log(err.error.message);
          alert(err.error.message);
    })
  }

}
