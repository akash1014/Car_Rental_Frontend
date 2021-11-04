import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';
import { UsersRoutingModule } from './users/users-routing.module';
import { UsersModule } from './users/users.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminGuard } from './admin/admin.guard';
import { RentalProviderModule } from './rental-provider/rental-provider.module';
import { RentalProviderRoutingModule } from './rental-provider/rental-provider-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
  ],
  imports: [
    
    //IMPORT THE MODULES WHICH HAVE EXPORTED THERE COMPENENTS
    AdminModule,
    PublicModule,
    UsersModule,
    RentalProviderModule,
    BrowserModule,
    HttpClientModule,
    //IMPORT ROUTING MODULE OF MODULES
    UsersRoutingModule,
    AdminRoutingModule,
    RentalProviderRoutingModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  //ADMMIN GUARD PROVIDED TO BE USED6
  providers: [AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
