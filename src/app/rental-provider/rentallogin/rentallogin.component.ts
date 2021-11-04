import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RentalProviderService } from 'src/app/rental-provider.service';

@Component({
  selector: 'app-rentallogin',
  templateUrl: './rentallogin.component.html',
  styleUrls: ['./rentallogin.component.css']
})
export class RentalloginComponent implements OnInit {
  serverresponse='';
  classname='';
  constructor(private rentalservice:RentalProviderService,private router:Router) { }
  login(data:any){
    this.rentalservice.login(data).subscribe((res:any)=>{
      if(res.success!==undefined){
        this.classname='alert alert-success';
        this.serverresponse=res.success;
        this.router.navigateByUrl('/rental/mycars');
      }
      else{
        this.classname='alert alert-danger';
        this.serverresponse=res.error;
      }
    })
  }
  ngOnInit(): void {
  }

}
