import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { PublicModule } from '../public/public.module';
import { FormsModule } from '@angular/forms';
import { PasswordchangeComponent } from './passwordchange/passwordchange.component';
import { EditcitiesComponent } from './editcities/editcities.component';
import { EditareasComponent } from './editareas/editareas.component';
import { AdminGuard } from './admin.guard';
import { ServiceprovidersComponent } from './serviceproviders/serviceproviders.component';
import { BlacklistCarsComponent } from './blacklist-cars/blacklist-cars.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    AdminheaderComponent,
    PasswordchangeComponent,
    EditcitiesComponent,
    EditareasComponent,
    ServiceprovidersComponent,
    BlacklistCarsComponent
  ],
  imports: [
    CommonModule,
    //IMPORT PUBLIC MODULE HERE SO WE CAN USE ITS FOOTER COMPONENET IN ADMIN MODULE
    PublicModule,
    FormsModule,
    AdminRoutingModule
  ],
  exports: [
  
  ],
  //providers added to use adminguard
  providers: [
    AdminGuard
  ]
})
export class AdminModule { }
