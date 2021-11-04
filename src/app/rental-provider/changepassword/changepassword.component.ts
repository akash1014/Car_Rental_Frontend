import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RentalProviderService } from 'src/app/rental-provider.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  email='';
  classname='';
  serverresponse='';
  constructor(private rentalservice:RentalProviderService,private router:Router) { }
  change(data:any){
    this.rentalservice.changepassword(data).subscribe((res:any)=>{
      if(res.success!==undefined){
        this.classname='alert alert-success';
        this.serverresponse=res.success;
      }
      else{
        this.classname='alert alert-danger';
        this.serverresponse=res.error;
      }
    })
  }
  ngOnInit(): void {
    this.rentalservice.isloggedin().subscribe((res:any)=>{
      if(res.value===true){
        this.email=res.success;
      }
      else{
        this.router.navigateByUrl('/rental/login');
      }
    });
  }

}
