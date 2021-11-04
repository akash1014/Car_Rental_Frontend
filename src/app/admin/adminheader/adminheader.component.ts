import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor(private adminservice :AdminService,private router:Router) { }
  imagepath:String='../assets/';
  loggedin=false;
  logout(){
    this.adminservice.logout().subscribe((res:any)=>{
      if(res){
        this.router.navigateByUrl('/admin/login');
      }
    })
  }
  ngOnInit(): void {
    this.adminservice.auth().subscribe((res:any)=>{
      if(res){
        this.loggedin=true;
      }
    })
  }

}
