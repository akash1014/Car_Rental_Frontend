import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalSignupComponent } from './rental-signup/rental-signup.component';
import { RentalProviderRoutingModule } from './rental-provider-routing.module';
import { PublicModule } from '../public/public.module';
import { FormsModule } from '@angular/forms';
import { RentalloginComponent } from './rentallogin/rentallogin.component';
import { RentalheaderComponent } from './rentalheader/rentalheader.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ManageCarsComponent } from './manage-cars/manage-cars.component';
import { ManageAreasComponent } from './manage-areas/manage-areas.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { PendingBookingsComponent } from './pending-bookings/pending-bookings.component';
import { CompletedBookingsComponent } from './completed-bookings/completed-bookings.component';
import { SalesComponent } from './sales/sales.component';


@NgModule({
  declarations: [
    RentalSignupComponent,
    RentalloginComponent,
    RentalheaderComponent,
    ChangepasswordComponent,
    ManageCarsComponent,
    ManageAreasComponent,
    PendingBookingsComponent,
    CompletedBookingsComponent,
    SalesComponent
  ],
  imports: [
    ImageCropperModule,
    CommonModule,
    //IMPORT PUBLIC MODULE HERE SO WE CAN USE ITS FOOTER COMPONENET IN ADMIN MODULE
    PublicModule,
    FormsModule,
    RentalProviderRoutingModule
  ],
  exports: [
  ]
})
export class RentalProviderModule { }
