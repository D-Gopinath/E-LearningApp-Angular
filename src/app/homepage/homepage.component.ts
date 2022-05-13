import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private http:HttpClient,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.showAvailableCourses()
  }
  courses!:any;
  showAvailableCourses(){
    this.spinner.show();
    const url = "http://localhost:9000/courses/CourseCategory";
    this.http.get(url).subscribe(res=>{
      this.spinner.hide();
      this.courses=res;
    },err=>{
      console.log(err.error.message);
          alert(err.error.message);
    })
  }

}


