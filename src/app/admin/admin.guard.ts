import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private adminservice:AdminService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      
    if(!this.adminservice.auth2()){
      console.log("else part"+this.adminservice.auth2())
      this.router.navigate(['/admin/login']);
      return false;
    }
    else{
      console.log("iftrue"+this.adminservice.auth2());
      return true;
    }
   
      
  }
  
}
