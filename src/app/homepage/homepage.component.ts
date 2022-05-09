import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.showAvailableCourses()
  }
  courses!:any;
  showAvailableCourses(){
    const url = "http://localhost:9000/courses/availableCourses";
    this.http.get(url).subscribe(res=>{
      this.courses=res;
    },err=>{
      console.log(err.error.message);
          alert(err.error.message);
    })
  }

}


