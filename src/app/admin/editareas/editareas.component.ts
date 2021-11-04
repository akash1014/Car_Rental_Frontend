import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-editareas',
  templateUrl: './editareas.component.html',
  styleUrls: ['./editareas.component.css']
})

export class EditareasComponent implements OnInit {
  
  Areaname:string='';
  Cityid:any='';
  cities:any=[];
  areas:any=[];
  serveresponse='';
  action='add';
  areaID:any=1;
  Formhead='';
  Formbtn='';

  constructor(private adminservice:AdminService,private router :Router) { }
  seteditform(areaname:any,cityid:any){
    this.Areaname=areaname;
    this.Cityid=cityid;
  }
  editarea(data:any){
    let formdata=new FormData();
    formdata.append('action',this.action);
    formdata.append('areaid',this.areaID);
    for(let key in data){
      formdata.append(key,data[key]);
    }
    //console.log(formdata)formdata is not shown in console and alerts
    this.adminservice.updateareas(formdata).subscribe((res:any)=>{
      if(res.success!==undefined){
        this.showareas();
        this.Areaname='';
        this.Cityid='';
        this.serveresponse=res.success;
      }
    });
  }

  changeaction(act:any,id:any){
    if(act==='delete'){
      if(confirm('you sure want to delete this')){
        this.action=act;
        this.areaID=id;
      }
    }
    else{
      if(act==='add'){
        this.Areaname='';
        this.Cityid='';
        this.Formhead='Add new area';
        this.Formbtn='Add';
      }
      else{
        this.Formhead='Update area';
        this.Formbtn='Update';
      }
      this.action=act;
      this.areaID=id;
    }
    
  }
  showareas(){
    this.adminservice.getareas().subscribe((res:any)=>{
      if(res.success!=undefined){
        this.areas=res.success;
      }
      else{
        this.serveresponse=res.error;
      }
    });
  }
  ngOnInit(): void {

    this.adminservice.auth().subscribe((res:any)=>{
      if(res){
        this.adminservice.getcities().subscribe((res:any)=>{
          if(res.success!=undefined){
            this.cities=res.success;
          }
        });
        this.showareas();
      }
      else{
        this.router.navigateByUrl('admin/login');
      }
    })
  }

}
