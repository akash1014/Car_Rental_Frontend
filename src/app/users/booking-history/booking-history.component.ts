import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  Booking_history:any=[];
  constructor(private user_Service:UserService,private router:Router) { }

  ngOnInit(): void {
    this.user_Service.authorized().subscribe((res:any)=>{
      if(res.success){
       this.user_Service.booking_history().subscribe((res:any)=>{
         if(res.success!==undefined){
            this.Booking_history=res.success;
            //console.log(res.success)
         }
       })
      }
    else{

        this.router.navigateByUrl('/users/login');
      }
    })
  }

}
