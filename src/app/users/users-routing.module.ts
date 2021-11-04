import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SearchCarsComponent } from './search-cars/search-cars.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BookingComponent } from './booking/booking.component';
import { TransactionComponent } from './transaction/transaction.component';
import { UserForgotpasswordComponent } from '../public/user-forgotpassword/user-forgotpassword.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';


const routes:Routes =[
  {path:'users',children: [
      {path:'',redirectTo:'/users/home',pathMatch:'full'},
      {path:'home',component:HomeComponent},
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent},
      {path:'search',component:SearchCarsComponent},
      {path:'changepassword',component:ChangePasswordComponent},
      {path:'profile',component:UserProfileComponent},
      {path:'booking/:car_id',component:BookingComponent},
      {path:'transaction/:bookingcar_id',component:TransactionComponent},
      {path:'forgotpassword',component:UserForgotpasswordComponent},
      {path:'booking_history',component:BookingHistoryComponent}
    ]},
    
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //IMPORT HERE rOUTER MODULE THEN EXPORT THE ROUTER
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class UsersRoutingModule { }
