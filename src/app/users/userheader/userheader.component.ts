import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit {
  isloggedin=false;
  username='';
  constructor(private user_Service:UserService,private router:Router) { }
  logout(){
    this.user_Service.logout().subscribe((res:any)=>{
      if(res){
        this.router.navigateByUrl('/users/login');
      }
    })
  }
  ngOnInit(): void {
    this.user_Service.authorized().subscribe((res:any)=>{
      if(res.success){
        this.isloggedin=true;
        this.username=res.name;
      }
    })
  }

}
