import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  isLoggedIn(){
    let user = localStorage.getItem("userData");
    return user != null ? true: false;
  }

  getUser(){
    let user = localStorage.getItem("userData");
    return user != null ? JSON.parse(user): null;
  }

  logout(){
    localStorage.removeItem("userData");
    this.toastr.success("Logout Successful");
    window.location.href="/homepage";
  }

}
