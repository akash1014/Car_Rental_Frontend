import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

const routes:Routes =[
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicRoutingModule { }
