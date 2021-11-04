import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { RentalProviderService } from 'src/app/rental-provider.service';

@Component({
  selector: 'app-manage-areas',
  templateUrl: './manage-areas.component.html',
  styleUrls: ['./manage-areas.component.css']
})
export class ManageAreasComponent implements OnInit {
  server_response='';
  myareas:any=[];
  action='';
  myareaid='';
  cities:any=[];
  areas:any=[];
  constructor(private rental_service:RentalProviderService,private router:Router) { }
  editmyareas(data:any){
    let formdata=new FormData();
    formdata.append('action',this.action);
    formdata.append('myareaid',this.myareaid);
    for (let key in data){
      formdata.append(key,data[key]);
    }
    this.rental_service.updatemyareas(formdata).subscribe((res:any)=>{
      if(res.success!==undefined){
        this.server_response=res.success;
        this.getmyareas();
      }
      else{
        alert(res.error);
        //this.server_response=res.error;
      }
    })

  }
  changeaction(Action:any,id:any){
    if(Action==='delete'){
      if(confirm('You sure you want to delete !')){
        this.action=Action;
        this.myareaid=id;
      }
    }
    else{
      this.action=Action;
      this.myareaid=id;
    }
  }

  getareas(id:any){
    this.rental_service.getareas({'cityid':id}).subscribe((res:any)=>{
      console.log(res)
      if(res.success!=undefined){
        this.areas=res.success;       
      }
    });
  }
  getmyareas(){
    this.rental_service.getmyareas().subscribe((res:any)=>{
      if(res.success!=undefined){
        this.myareas=res.success;
        //console.log(this.myareas);
      }
     });
  }
  ngOnInit(): void {
    this.rental_service.isloggedin().subscribe((res:any)=>{
      if(res.value===true){
        this.getmyareas();
       this.rental_service.getcities().subscribe((res:any)=>{
        if(res.success!=undefined){
          this.cities=res.success;
        }
       });
      }
      else{
        this.router.navigateByUrl('/rental/login');
      }
    });
  }

}
