import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  classname='';
  server_response='';
  car_booking_id='';
  constructor(private user_Service:UserService,private router:Router) { }
  login(data:any){
    this.user_Service.login(data).subscribe((res:any)=>{
      if(res.success!==undefined){
        this.classname='text-success';
        this.server_response=res.success;
        this.user_Service.current_carid.subscribe((result)=>{this.car_booking_id=result;});
        console.log(this.car_booking_id);
        if(this.car_booking_id!==''){
          this.router.navigateByUrl('/users/booking/'+this.car_booking_id);
        }
        else{
          this.router.navigateByUrl('/users/home');
        }
      }
      else{
        this.classname='text-danger';
        this.server_response=res.error;
      }
    });
  }
  ngOnInit(): void {
  }

}
