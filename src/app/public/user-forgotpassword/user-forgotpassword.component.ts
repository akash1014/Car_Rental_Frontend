import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-forgotpassword',
  templateUrl: './user-forgotpassword.component.html',
  styleUrls: ['./user-forgotpassword.component.css']
})
export class UserForgotpasswordComponent implements OnInit {
  classname='';
  server_response='';
  constructor(private user_service:UserService) { }
  changepassword(data:any){
    this.user_service.forgot_password(data).subscribe((res:any)=>{
      if(res.success!==undefined){
        this.server_response=res.success;
        this.classname='alert alert-success'
      }
    })
  }
  ngOnInit(): void {
  }

}
