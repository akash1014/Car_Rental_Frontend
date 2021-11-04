import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RentalProviderService } from 'src/app/rental-provider.service';

@Component({
  selector: 'app-completed-bookings',
  templateUrl: './completed-bookings.component.html',
  styleUrls: ['./completed-bookings.component.css']
})
export class CompletedBookingsComponent implements OnInit {
  completed_bookings:any = [];
  constructor(private rental_service:RentalProviderService,private router:Router) { }

  ngOnInit(): void {
    this.rental_service.isloggedin().subscribe((res:any)=>{
      if(res.value===true){
        this.rental_service.get_completed_bookings().subscribe((res:any)=>{
          if(res.success!==undefined){
            this.completed_bookings=res.success;
            console.log(this.completed_bookings);
          }
        })    
      }
      else{
        this.router.navigateByUrl('/rental/login');
      }
    });
  }

}
