import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

  name!:string;
  phone!:string;
  email!:string;
  password!:string;
  result!:any;

  register(){
    
    const name = this.name;
    const phone=this.phone;
    const email=this.email;
    const password=this.password;
    try {

        if(name==null || name.trim()=="" || name.length<3){
            throw new Error("Invalid Name");
        }
        if(phone.length!=10){
            throw new Error("Invalid Phone");
        }
        if(email==null || email.trim()==""){
            throw new Error("Invalid Email");
        }
        if(password.length<8){
            throw new Error("Invalid Password");
        }
        const user ={
          name:name,
          phone:phone,
          email:email,
          password:password
        }
        const url="http://localhost:9000/users/register";
        this.http.post(url,user).subscribe(res=>{
          
            this.toastr.success("successfully registered");
            window.location.href="/login";
          
        },err=>{
          console.log(err.error.message);
          this.toastr.error(err.error.message);
          window.location.href="/login";
        })      
    }
    catch(err:any)
    {
      console.log(err);
      this.toastr.error(""+err.message);                
    }
  }

}
