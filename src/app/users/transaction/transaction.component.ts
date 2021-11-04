import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  CAR_ID:any='';
  booking_details:any={};
  user_details:any={}
  Rental_id='';
  cities:any=[];
  areas:any=[];
  from_date :string='';
  enddate:string='';
  server_response='';
  classname='';
  NO_OF_DAYS=0;
  GST=0;
  total=0;
  grandtotal=0;
  show_transaction=false;
  min_start_date=new Date();
  min_end_date =this.min_start_date;
 
  

  ///////////////////////////////////////////////
  constructor(private route:ActivatedRoute,private user_Service:UserService) { 
    
   }


  ////////////////////////////////////////////
  getcities(id:any){
    this.user_Service.Get_Cities({'rental_id':id}).subscribe((res:any)=>{
      console.log(res)
      if(res.success!=undefined){
        this.cities=res.success;       
      }
    })
  }
  getareas(id:any){
    this.user_Service.Get_Areas({'cityid':id,'rental_id':this.Rental_id}).subscribe((res:any)=>{
      console.log(res)
      if(res.success!=undefined){
        this.areas=res.success;       
      }
    });
  }

  getbooking(car_id:any){
    if(this.CAR_ID!==undefined){
      this.user_Service.car_booking_details({'mycar_id':this.CAR_ID}).subscribe((res:any)=>{
        if(res.success!==undefined){
          this.booking_details=res.success;
          this.Rental_id=res.success[0].rental_id;
          this.getcities(this.Rental_id);
        }
        else{
          this.booking_details={};
  
        }
        //console.log(this.booking_details);
      })
    }
    
  }

  create_booking(data:any){
    if(confirm("The Booking amount will have to be paid to service provider at time of picking up the vehicle.Confirm booking?")){
      let formdata=new FormData();
      
      formdata.append('car_id',this.CAR_ID);
      for(let key in data){
        formdata.append(key,data[key]);
      }
      this.user_Service.Book_Car(formdata).subscribe((res:any)=>{
        if(res.success!==undefined){
          this.server_response=res.success;
          this.classname='alert alert-success';
          
        }
        else{
          alert("Something went try again after sometime!");
        }
      })
    }
    
  }

  end_change_date(date:any){
    this.min_end_date=date;
  }

  from_set(){
    let start=this.from_date.split('-');
    let end=this.enddate.split('-');
    let date1=new Date(parseInt(start[0]),parseInt(start[1]),parseInt(start[2]));
    let date2=new Date(parseInt(end[0]),parseInt(end[1]),parseInt(end[2]));
    let diff=date2.getTime()-date1.getTime();
    this.NO_OF_DAYS=diff/(1000*3600*24);
    this.total=this.NO_OF_DAYS*this.booking_details[0].rent;
    this.GST=13*(this.total)/100;
    this.grandtotal=this.total+this.GST;
    this.show_transaction=true; 
  }
  
  ngOnInit(): void {
    this.CAR_ID=this.route.snapshot.paramMap.get('bookingcar_id');
    this.getbooking(this.CAR_ID);
    //console.log(this.CAR_ID);
    this.user_Service.booking_details().subscribe((res:any)=>{
      if(res.success!==undefined){
        this.user_details=res.success[0];
       // console.log(this.user_details);
      }
    })
  }

}
