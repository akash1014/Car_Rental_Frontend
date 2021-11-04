import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //import behaviour subject create an observable as to fetch latest data
  private booking_car_id=new BehaviorSubject('');
  current_carid=this.booking_car_id.asObservable();

  url='http://localhost:3000/users';
  settings ={ withCredentials: true };
  constructor(private http:HttpClient) { }

  // BOOKING HISTORY
  booking_history(){
    return this.http.get(this.url+'/get_bookings',this.settings);
  }

  // FORGOT PASSWORD
  forgot_password(data:any){
    return this.http.post(this.url+'/forgotpassword',data,this.settings);
  }

  //GET AREAS
  Get_Cities(data:any){
    return this.http.post(this.url+'/getcities',data,this.settings);
  }

  //GET AREAS
  Get_Areas(data:any){
    return this.http.post(this.url+'/getareas',data,this.settings);
  }

  //BOOK Car
  Book_Car(data:any){
    return this.http.post(this.url+'/book_car',data,this.settings);
  }

  //SET BOOKING ID
  set_booking_id_login(car_id:string){
    this.booking_car_id.next(car_id);
  }

  //BOOKING DETAILS ROUTES
  booking_details(){
    return this.http.get(this.url+'/bookingdetails',this.settings);
  }

  //MYCAR DETAILS FOR BOOKING
  car_booking_details(data:any){
    return this.http.post(this.url+'/get_booking_details',data,this.settings);
  }

  //USER GET profile
  get_profile(){
    return this.http.get(this.url+'/getprofile',this.settings);
  }

  //USER DETAILS ROUTE
  editProfile(data:any){
    return this.http.post(this.url+'/userdetails',data,this.settings);
  }

  //CHANGE PASSWORD ROUTE
  change_password(data:any){
    return this.http.post(this.url+'/changepassword',data,this.settings);
  }

  //USERS AUTHORIZED
  authorized(){
    return this.http.get(this.url+'/auth',this.settings);
  }

  //SEARCHCARS FUNCTION TO BE USED BOTH BY INDEX PAGE AND USER HOME PAGE
  searchcars(data:any){
    return this.http.post(this.url+'/searchcars',data,this.settings);
  }

  //USERS SIGNUP ROUTE
  signup(data:any){
    return this.http.post(this.url+'/signup',data,this.settings);
  }

  //USERS LOGIN
  login(data:any){
    return this.http.post(this.url+'/login',data,this.settings);
  }

  //USERS LOGOUT
  logout(){
    return this.http.get(this.url+'/logout',this.settings);
  }
}
