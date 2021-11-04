import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url ='http://localhost:3000/admin';
  //WITHCREDENTIALS IS SET TO MAKE SENT COOKIE WITH RESPONSE TO BE SAVED IN THE BROWSER
  settings ={ withCredentials: true };
  constructor(private http:HttpClient) { }

  //TO GET ADMIN ID
  adminid(){
    return this.http.get(this.url+'/adminid',this.settings);
  }

  //TO CHECK IF ADMIN IS LOGGED IN
  auth(){
    return this.http.get(this.url+'/autho',this.settings);
  }
  async auth2(){
    let flag:boolean=false;
    await this.http.get(this.url+'/autho',this.settings).subscribe((res:any)=>{
        if(res){
          console.log("auth2true");
          flag= true;
        }
        else{
          console.log("auth2false");
          flag=false;
        }
     });
     return flag;
  }
  
  //GET RENTAL PROVIDER
  getprovider(){
    return this.http.get(this.url+'/getproviders',this.settings);
  }

  // GET BLACKLIST CARS
  get_blacklist_cars(){
    return this.http.get(this.url+'/getblacklist_cars',this.settings);
  }

  // UPDATE BLACKLIST CARS
  update_blacklist_Cars(data:any){
    return this.http.post(this.url+'/updateblacklist_cars',data,this.settings);
  }

  // CHANGE RENTAL PROVIDER STATUS
  change_rental_status(data:any){
    return this.http.post(this.url+'/changestatus',data,this.settings);
  }

  //GET THE CITIES
  getcities(){
    return this.http.get(this.url+'/getcities',this.settings);
  }

  //UPDATE CITIES
  updatecities(data:any){
    return this.http.post(this.url+'/updatecities',data,this.settings);
  }

  //GET AREAS
  getareas(){
    return this.http.get(this.url+'/getareas',this.settings);
  }

  //UPDATE AREAS
  updateareas(data:any){
    return this.http.post(this.url+'/updateareas',data,this.settings);
  }
  

  //ADMIN LOGIN
  login(data:any){
    return this.http.post(this.url+'/login',data,this.settings);
  }

  // TO CHANGE THE PASSWORD OF USERNAME
  changepassword(data:any){
    return this.http.post(this.url+'/changepassword',data,this.settings);
  }

  //TO LOGOUT
  logout(){
    return this.http.get(this.url+'/logout',this.settings);
  }
}
