import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  server_response='';
  classname='';
  samepassword=true;
  constructor(private user_Service:UserService) { }

  signup(data:any){
    this.user_Service.signup(data).subscribe((res:any)=>{
      if(res.success!==undefined){
        this.classname='text-success';
        this.server_response=res.success;
      }
      else{
        this.classname='text-danger';
        this.server_response=res.error;
      }
    });
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
  }

}
