import { Component, OnInit } from '@angular/core';
import { RentalProviderService } from 'src/app/rental-provider.service';

@Component({
  selector: 'app-rental-forgotpassword',
  templateUrl: './rental-forgotpassword.component.html',
  styleUrls: ['./rental-forgotpassword.component.css']
})
export class RentalForgotpasswordComponent implements OnInit {
  classname='';
  serverresponse='';
  constructor(private rental_service:RentalProviderService) { }
  changepassword(data:any){
    this.rental_service.forgot_password(data).subscribe((res:any)=>{
      if(res.success!==undefined){
        this.serverresponse=res.success;
        this.classname='alert alert-success'
      }
    })
  }
  ngOnInit(): void {
  }

}
