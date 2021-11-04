import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-serviceproviders',
  templateUrl: './serviceproviders.component.html',
  styleUrls: ['./serviceproviders.component.css']
})
export class ServiceprovidersComponent implements OnInit {
  adminid='';
  providers:any=[];
  constructor(private adminservice:AdminService,private router:Router) { }

  changestatus(providerid:any){
    for (let provider of this.providers){
      if(provider.id===providerid){
        let status;
        if(provider.status==='active'){
          status='blocked';
        }
        else{
          status='active';
        }
        this.adminservice.change_rental_status({status:status,rentalid:providerid}).subscribe((res:any)=>{
          if(res.success){
            this.get_service_providers();
          }
        })
      }
    }
  }

  // GET SERVICE PROVIDERS
  get_service_providers(){
    this.adminservice.getprovider().subscribe((res:any)=>{
      if(res.success!==undefined){
        this.providers=res.success;
        console.log(this.providers);
      }
    })
  }

  ngOnInit(): void {
    this.adminservice.auth().subscribe((res:any)=>{
      if(!res){//res will be false if not logged n
        this.router.navigateByUrl('admin/login');
      }
      else{
        this.adminservice.adminid().subscribe((res:any)=>{
          this.adminid=res.id;
          this.get_service_providers();
        })
      }
    })
  }

}
