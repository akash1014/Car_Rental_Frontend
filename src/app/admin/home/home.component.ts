import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  adminid:string='';
  constructor(private adminservice:AdminService,private router:Router) { }
ngOnInit(): void {
    this.adminservice.auth().subscribe((res:any)=>{
      if(!res){
        this.router.navigate(['admin/login']);
      }
    });
  }
}
