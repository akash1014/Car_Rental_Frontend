import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RentalProviderService } from 'src/app/rental-provider.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  frontend_img='../../../assets/';
  Search_obj={
  area_id:'',
  city_id:''
  }
  areas:any=[];
  cities:any=[];
  Search_results:any=[];
  car:any={};
  constructor(private user_Service:UserService,private rental_service:RentalProviderService,private router:Router) { }
  getareas(id:any){
    this.rental_service.getareas({'cityid':id}).subscribe((res:any)=>{
      console.log(res)
      if(res.success!=undefined){
        this.areas=res.success;       
      }
    });
  }
  Searchcars(data:any){
    this.user_Service.searchcars(data).subscribe((res:any)=>{
      if(res.success!==undefined){
        this.Search_results=res.success;
        //console.log(this.Search_results)
      }
      else{
        alert(res.error);
      }
    })
  }
  setform(car_id:any){
    for (let mycar of this.Search_results){
      if(mycar.mycar_id===car_id){
        this.car=mycar;
      }
    }
  }

  book(car_id:any){
    this.user_Service.set_booking_id_login(car_id);
    this.router.navigateByUrl('/users/booking/'+car_id);
  }
  ngOnInit(): void {
    this.rental_service.getcities().subscribe((res:any)=>{
      if(res.success!=undefined){
        this.cities=res.success;
      }
     });
     this.Searchcars(this.Search_obj);
  }

}
