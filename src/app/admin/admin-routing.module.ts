import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PasswordchangeComponent } from './passwordchange/passwordchange.component';
import { AdminGuard } from './admin.guard';
import { EditcitiesComponent } from './editcities/editcities.component';
import { EditareasComponent } from './editareas/editareas.component';
import { ServiceprovidersComponent } from './serviceproviders/serviceproviders.component';
import { BlacklistCarsComponent } from './blacklist-cars/blacklist-cars.component';
//import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

const routes:Routes =[
  {path:'admin',children:[
    
    {path:'login',component:LoginComponent},
    {path:'changepassword',component:PasswordchangeComponent},
    {path:'cities',component:EditcitiesComponent},
    {path:'areas',component:EditareasComponent},
    {path:'home' , component:ServiceprovidersComponent},
    {path:'provider',component:ServiceprovidersComponent},
    {path: 'blacklist',component:BlacklistCarsComponent}
  ]}
 // {path:'admin',canActivate:[AdminGuard],component:HomeComponent},
  
]

@NgModule({
 
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AdminRoutingModule { }
