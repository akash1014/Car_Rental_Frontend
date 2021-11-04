import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  classname='';
  server_response='';
  samepassword=true;
  email='';
  constructor(private user_Service:UserService,private router:Router) { }
  changepassword(data:any){
    this.user_Service.change_password(data).subscribe((res:any)=>{
      if(res.success!==undefined){
        this.classname='text-success';
        this.server_response=res.success;
      }
      else{
        this.classname='text-danger';
        this.server_response=res.error;
      }
    })
  }

  passwordcheck(pass:any,conpass:any){
    if(pass!==conpass){
      this.samepassword=false;
    }
    else{
      this.samepassword=true;
    }
  }
  ngOnInit(): void {
    this.user_Service.authorized().subscribe((res:any)=>{
      if(!res.success){
        this.router.navigateByUrl('/users/login');
      }
      else{
        this.email=res.email;
      }
    });
  }

}
