import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { PublicModule } from '../public/public.module';
import { SearchCarsComponent } from './search-cars/search-cars.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { BookingComponent } from './booking/booking.component';
import { TransactionComponent } from './transaction/transaction.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';



@NgModule({
  declarations: [
   
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UserheaderComponent,
    SearchCarsComponent,
    ChangePasswordComponent,
    UserProfileComponent,
    BookingComponent,
    TransactionComponent,
    BookingHistoryComponent,
  ],
  imports: [
 
    
    //Image cropper to crop images before saving
    ImageCropperModule,
    CommonModule,
    FormsModule,
    PublicModule,
    UsersRoutingModule
  ],
  exports: [
    SearchCarsComponent,
    
  ]
})
export class UsersModule { }
