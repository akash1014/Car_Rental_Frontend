import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-passwordchange',
  templateUrl: './passwordchange.component.html',
  styleUrls: ['./passwordchange.component.css']
})
export class PasswordchangeComponent implements OnInit {
  serverresponse='';
  classname='';
  passwordmatch=true;
  constructor(private adminservice:AdminService,private router:Router) { }
  check( password: any , confirmpassword: any ){
    if(password==confirmpassword){
      this.passwordmatch=true;
    }
    else{
      this.passwordmatch=false;
    }
  }

  change(data:any){
    this.adminservice.changepassword(data).subscribe((res:any)=>{
      if(res.success!==undefined){
        this.classname='text-success';
        this.serverresponse=res.success;
      }
      else{
        this.classname='text-danger';
        this.serverresponse=res.error;
      }
      
    })
  }
  id='';
  ngOnInit(): void {
    this.adminservice.auth().subscribe((res:any)=>{
      if(!res){//res will be false if not logged n
        this.router.navigateByUrl('admin/login');
      }
      else{
        this.adminservice.adminid().subscribe((res:any)=>{
          this.id=res.id;
        })
      }
    })
  }

}
