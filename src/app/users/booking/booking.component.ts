import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  CAR_ID:any='';
  booking_details:any={};
  constructor(private route:ActivatedRoute,private user_Service:UserService,private router:Router) { }
  book(car_id:string){
    this.router.navigateByUrl('/users/transaction/'+car_id);
  }
  getbooking(car_id:any){
   
    if(this.CAR_ID!==undefined){
      this.user_Service.car_booking_details({'mycar_id':this.CAR_ID}).subscribe((res:any)=>{
        if(res.success!==undefined){
          this.booking_details=res.success;
        }
        else{
          this.booking_details={};
  
        }
      })
    }
  }
  getUpdatedCarId(event:any){
    this.CAR_ID=event;
    console.log('child'+this.CAR_ID)
    this.getbooking(this.CAR_ID);
  }
  ngOnInit(): void {
    this.CAR_ID=this.route.snapshot.paramMap.get('car_id');
    //this.user_Service.current_carid.subscribe((res)=>{this.CAR_ID=res;})
    this.getbooking(this.CAR_ID);
  }

}
