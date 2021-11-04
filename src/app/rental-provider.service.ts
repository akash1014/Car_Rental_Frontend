import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentalProviderService {

  url ='http://localhost:3000/rental';
  //WITHCREDENTIALS IS SET TO MAKE SENT COOKIE WITH RESPONSE TO BE SAVED IN THE BROWSER
  settings ={ withCredentials: true };

  // FORGOT PASSWORD
  forgot_password(data:any){
    return this.http.post(this.url+'/forgotpassword',data,this.settings);
  }

  constructor(private http:HttpClient) { }
  // GET DAILY RECORDS
  get_daily_records(){
    return this.http.get(this.url+'/daily_records',this.settings);
  }

  // GET SALE RECORDS
  get_sale_records(data:any){
    return this.http.post(this.url+'/sale_records',data,this.settings);
  }


  // GET PENDING BOOKINGS
  get_pending_bookings(){
    return this.http.get(this.url+'/pending_bookings',this.settings);
  }

  //GENERATE BILLS
  generate_bills(data:any){
    return this.http.post(this.url+'/generate_bills',data,this.settings);
  }

  //GET COMPLETED BOOKINGS
  get_completed_bookings(){
    return this.http.get(this.url+'/completed_bookings',this.settings);
  }

  //GET MYCARS ROUTE
  getmycars(){
    return this.http.get(this.url+'/getmycars',this.settings);
  }

  //UPDATE MYCARS ROUTE
  updatemycars(data:any){
    return this.http.post(this.url+'/updatemycars',data,this.settings);
  }

  //AUTH ROUTE
  isloggedin(){
    return this.http.get(this.url+'/auth',this.settings);
  }

  //GETCITIES ROUTE
  getcities(){
    return this.http.get(this.url+'/getcities',this.settings);
  }

  //GETAREAS ROUTE
  getareas(data:any){
    return this.http.post(this.url+'/getareas',data,this.settings);
  }

  //GETMYAREAS ROUTE
  getmyareas(){
    return this.http.get(this.url+'/getmyareas',this.settings);
  }

  //UPDATEMYAREAS ROUTE
  updatemyareas(data:any){
    return this.http.post(this.url+'/updatemyareas',data,this.settings);
  }

  //SIGNUP ROUTE
  signup(data:any){
    return this.http.post(this.url+'/signup',data,this.settings);
  }

  //LOGIN ROUTE
  login(data:any){
    return this.http.post(this.url+'/login',data,this.settings);
  }

  //CHANGEPASSWORD
  changepassword(data:any){
    return this.http.post(this.url+'/changepassword',data,this.settings);
  }

  //LOGOUT ROUTE
  logout(){
    return this.http.get(this.url+'/logout',this.settings);
  }

}
