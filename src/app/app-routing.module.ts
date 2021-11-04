import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { IndexComponent } from './public/index/index.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'home',component:IndexComponent},
 // {path:'users',loadChildren : ()=> import('./users/users.module').then(m=>m.UsersModule)},LAZY LOADING
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
