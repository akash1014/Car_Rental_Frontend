import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RentalProviderService } from 'src/app/rental-provider.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  daily_Bills:any=[];
  sale_record_Bills:any=[];
  constructor(private rental_service:RentalProviderService,private router:Router) { }
  getrecords(data:any){
    this.rental_service.get_sale_records(data).subscribe((res:any)=>{
      if(res.success!==undefined){
        this.sale_record_Bills=res.success;
        console.log(res.success);
      }
    })
  }

  ngOnInit(): void {
    this.rental_service.isloggedin().subscribe((res:any)=>{
      if(res.value===true){
        this.rental_service.get_daily_records().subscribe((res:any)=>{
          if(res.success!==undefined){
            this.daily_Bills=res.success;
            console.log(res.success);
          }
        })   
      }
      else{
        this.router.navigateByUrl('/rental/login');
      }
    });
  }

}
