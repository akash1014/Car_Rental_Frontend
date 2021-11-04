import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { IndexComponent } from './index/index.component';
import { PublicheaderComponent } from './publicheader/publicheader.component';
import { FooterComponent } from './footer/footer.component';
import { RentalProviderRoutingModule } from '../rental-provider/rental-provider-routing.module';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { UsersModule } from '../users/users.module';
import { SearchCarsComponent } from '../users/search-cars/search-cars.component';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { RentalForgotpasswordComponent } from './rental-forgotpassword/rental-forgotpassword.component';
import { UserForgotpasswordComponent } from './user-forgotpassword/user-forgotpassword.component';



@NgModule({
  declarations: [
    IndexComponent,
    PublicheaderComponent,
    FooterComponent,
    RentalForgotpasswordComponent,
    UserForgotpasswordComponent
  ],
  imports: [
    CommonModule,
    //THESE ROUTING MODULES ARE NEEDED SO THERE DECLARED ROUTES CAN BE USED HERE
    FormsModule,
    AdminRoutingModule,
    RentalProviderRoutingModule,
    PublicRoutingModule
  ],
  exports:[
    IndexComponent,
    FooterComponent,
    PublicheaderComponent
  ]
})
export class PublicModule { }
