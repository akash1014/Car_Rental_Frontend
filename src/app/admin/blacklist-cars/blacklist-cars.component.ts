import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-blacklist-cars',
  templateUrl: './blacklist-cars.component.html',
  styleUrls: ['./blacklist-cars.component.css']
})
export class BlacklistCarsComponent implements OnInit {

  blacklist:any =[];
  server_response='';
  action='';
  id_blacklist_cars:any=null;
  mycar_id:any=null;
  rental_id:any=null;
  constructor(private adminservice:AdminService,private router:Router) { }
  insert_action(action:any,carid:any,rental:any){
    this.action=action;
    this.mycar_id=carid;
    this.rental_id=rental;
  }
  delete_action(action:any,id:any,carid:any){
    if(confirm("you sure you want to remove this car from blacklist?")){
      this.action=action;
      this.id_blacklist_cars=id;
      this.mycar_id=carid;
      this.update_blacklist({});
    }   
  }

  update_blacklist(data:any){
    data['action']=this.action;
    data['mycar_id']=this.mycar_id;
    if (this.action==='insert'){

      data['rental_id']=this.rental_id;
    }
    else{
      data['id_blacklist_cars']=this.id_blacklist_cars;
    }
    this.adminservice.update_blacklist_Cars(data).subscribe((res:any)=>{
      if(res.success){
        alert(res.success);
        this.get_blacklist_cars();
      }
      else{
        res.success;
      }
    })
  }
  get_blacklist_cars(){
    this.adminservice.get_blacklist_cars().subscribe((res:any)=>{
      if(res.success!==undefined){
        this.blacklist=res.success;
      }
      else{
        this.server_response=res.error;
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
          this.get_blacklist_cars();
        })
      }
    })
  }

}
