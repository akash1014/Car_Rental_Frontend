import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { RentalSignupComponent } from './rental-signup/rental-signup.component';
import { RentalloginComponent } from './rentallogin/rentallogin.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ManageCarsComponent } from './manage-cars/manage-cars.component';
import { ManageAreasComponent } from './manage-areas/manage-areas.component';
import { PendingBookingsComponent } from './pending-bookings/pending-bookings.component';
import { CompletedBookingsComponent } from './completed-bookings/completed-bookings.component';
import { RentalForgotpasswordComponent } from '../public/rental-forgotpassword/rental-forgotpassword.component';
import { SalesComponent } from './sales/sales.component';

const routes:Routes=[
  {path:'rental',children:[
    {path:'signup',component:RentalSignupComponent},
    {path:'login',component:RentalloginComponent},
    {path:'changepassword',component:ChangepasswordComponent},
    {path:'mycars',component:ManageCarsComponent},
    {path:'myareas',component:ManageAreasComponent},
    {path:'pending_bookings',component:PendingBookingsComponent},
    {path:'completed_bookings',component:CompletedBookingsComponent},
    {path:'forgotpassword',component:RentalForgotpasswordComponent},
    {path:'sales',component:SalesComponent}
  ]}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RentalProviderRoutingModule { }
