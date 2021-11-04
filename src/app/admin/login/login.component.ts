import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AdminService,private router:Router) { }
  serverresponse='';
  classname='';
  login(form:any):void {
    this.service.login(form).subscribe((res:any)=>{
      if(res.success!==undefined){
        this.classname='text-success';
        this.serverresponse=res.success;
        this.router.navigateByUrl('/admin/home');
      }
      else{
        this.classname='text-danger';
        this.serverresponse=res.error;
      }
      
    })
  }
  ngOnInit(): void {
  }

}
