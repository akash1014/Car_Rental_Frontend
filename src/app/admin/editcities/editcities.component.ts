import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-editcities',
  templateUrl: './editcities.component.html',
  styleUrls: ['./editcities.component.css']
})
export class EditcitiesComponent implements OnInit {
  serveresponse='';
  cities:any=[];
  action='';
  cityid:any;
  Cityname='';
  Postalcode='';
  Formhead:any='';
  Formbtn:any='';
  constructor(private adminservice:AdminService,private router:Router) { }
  editcity(data:any){
    let formdata=new FormData();
    formdata.append('action',this.action);
    formdata.append('cityid',this.cityid);
    for(let key in data){
      formdata.append(key,data[key]);
    }
    this.adminservice.updatecities(formdata).subscribe((res:any)=>{
      if(res.success!==undefined){
        this.showcities();
        this.Cityname='';
        this.Postalcode='';
        this.serveresponse=res.success;
      }
    })
  }
  changeaction(act:string,id:any){
    if(act==='delete'){
      if(confirm('you sure want to delete this')){
        this.action=act;
        this.cityid=id;
      }
    }
    else{
      
      if(act==='add'){
        this.Cityname='';
        this.Postalcode='';
        this.Formhead='Add new City';
        this.Formbtn='Add';
      }
      else{
        this.Formhead='Update City';
        this.Formbtn='Update';
      }
    this.action=act
    this.cityid=id
    }
  }

  seteditform(cityname:string,code:string){
    this.Cityname=cityname;
    this.Postalcode=code;
  }
  showcities(){
    this.adminservice.getcities().subscribe((res:any)=>{
      if(res.success!=undefined){
        this.cities=res.success;
      }
      else{
        this.serveresponse=res.error;
      }
    });
  }
 
  ngOnInit(): void {
    this.adminservice.auth().subscribe((res:any)=>{
      if(res){
        this.showcities();
      }
      else{
        this.router.navigateByUrl('admin/login');
      }
    })
  }

}
