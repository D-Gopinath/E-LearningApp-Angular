import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  userlist!:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.listUsers()
  }
  userList!:any;
  listUsers(){
    const url="http://localhost:9000/admin/userslist";
    this.http.get(url).subscribe(res=>{
      this.userList = res;
    },err=>{
      console.log(err.error.message);
    })
  }

}
