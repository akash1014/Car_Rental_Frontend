import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RentalProviderService } from 'src/app/rental-provider.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-search-cars',
  templateUrl: './search-cars.component.html',
  styleUrls: ['./search-cars.component.css']
})
export class SearchCarsComponent implements OnInit {
  //OUTPUT WITH EMITTER TO EMIT CHANGED VALUE TO PARENT CLASS
  @Output() car_id_update=new EventEmitter();
  frontend_img='./assets/';
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
      if(res.success!=undefined){
        this.areas=res.success; 
        console.log(this.areas)      
      }
    });
  }

  book(car_id:any){
    //alert("emitted");
    this.car_id_update.emit(car_id);
    this.user_Service.set_booking_id_login(car_id);
    this.router.navigateByUrl('/users/booking/'+car_id);
  }

  setform(car_id:any){
    for (let mycar of this.Search_results){
      if(mycar.mycar_id===car_id){
        this.car=mycar;
      }
    }
  }

  Searchcars(data:any){
    this.user_Service.searchcars(data).subscribe((res:any)=>{
      if(res.success!==undefined){
        this.Search_results=res.success;
      }
      else{
        alert(res.error);
      }
    })
  }
  ngOnInit(): void {
    this.user_Service.authorized().subscribe((res:any)=>{
      if(res.success){
        
        this.rental_service.getcities().subscribe((res:any)=>{
          console.log(res);
          if(res.success!==undefined){
            this.cities=res.success;
            console.log(this.cities);
          }
         });
         this.Searchcars(this.Search_obj);
      }
    else{

        this.router.navigateByUrl('/users/login');
      }
    })
    
  
  }

}
