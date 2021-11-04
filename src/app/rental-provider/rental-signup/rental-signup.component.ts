import { Component, OnInit } from '@angular/core';
import { RentalProviderService } from 'src/app/rental-provider.service';


@Component({
  selector: 'app-rental-signup',
  templateUrl: './rental-signup.component.html',
  styleUrls: ['./rental-signup.component.css']
})
export class RentalSignupComponent implements OnInit {
  serverresponse='';
  classname='';
  samepassword=true;
  constructor(private rentalservice:RentalProviderService) { }
  signup(data:any){
    let formdata=new FormData();
    for(let key in data){
      formdata.append(key,data[key]);
    }
    this.rentalservice.signup(formdata).subscribe((res:any)=>{
      if(res.success!==undefined){
        this.classname='alert alert-success';
        this.serverresponse=res.success;
      }
      else{
        this.classname='alert alert-danger';
        this.serverresponse=res.error;
      }
    })
  }

  passwordcheck(password:any,conpassword:any){
    if(password===conpassword){
      this.samepassword=true;
    }
    else{
      this.samepassword=false;
    }
  }
  ngOnInit(): void {
  }

}
