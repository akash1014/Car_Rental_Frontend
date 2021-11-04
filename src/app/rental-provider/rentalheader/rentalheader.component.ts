import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RentalProviderService } from 'src/app/rental-provider.service';

@Component({
  selector: 'app-rentalheader',
  templateUrl: './rentalheader.component.html',
  styleUrls: ['./rentalheader.component.css']
})
export class RentalheaderComponent implements OnInit {
  isloggedin=false;
  constructor(private rentalservice:RentalProviderService,private router:Router) { }
  logout(){
    this.rentalservice.logout().subscribe((res:any)=>{
      if(res.error!==undefined){
        alert(res.error);
      }
      else{
        //alert(res);
        this.router.navigateByUrl('rental/login');
      }
     
    })
  }
  ngOnInit(): void {
    this.rentalservice.isloggedin().subscribe((res:any)=>{
      if(res.value===true){
        this.isloggedin=true;
      }
    });
  }

}
