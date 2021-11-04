import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RentalProviderService } from 'src/app/rental-provider.service';
//import below line manually
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-manage-cars',
  templateUrl: './manage-cars.component.html',
  styleUrls: ['./manage-cars.component.css']
})
export class ManageCarsComponent implements OnInit {
  mycars:any=[];
  action='';
  mycarid='';
  server_response='';
  classname='';
  Formbtn='Add';
  Formhead='Add cars';
  photo:any=null;
  car_object:any={  }
  PROVIDER_EMAIL='';
  constructor(private rental_service:RentalProviderService,private router:Router) { }
  imageChangedEvent:any='';
  croppedImage:any ='';
  fileChangeEvent(event:any){
    this.imageChangedEvent=event;
  }
  imageCropped(event:ImageCroppedEvent){

    this.croppedImage=event.base64;
       
    //console.log(this.croppedImage);
  }
  imageLoaded(){
    
    //show cropper
  }
  cropperReady(){
    //cropper ready
  }
  loadImageFailed(){
    //show message
  }


  base64ToFile(data:any, filename:any) {

    const arr = data.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
  
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
  
    return new File([u8arr], filename, { type:mime });
  }
    ////////////////////////////////////////////////////////////////////////////
  //THIS FUNCTION CHANGES A ACTION PRAMTER TO UPDATE,ADD AND DELETE WHICH IS THEN SENT WITH OBJECT TO BACKEND
  changeaction(Action:any,id:any){
    if(Action==='add'){
      this.Formhead='Add Cars';
      this.Formbtn='Add';
      this.car_object={
        brand:'',
          model:'',
          colour:'',
          condition:'',
          description:'',
          photo:'',
          reg_no:'',
          insurance_validitytill:'',
          car_name:'',
          rent:''
      };
    }
    else{
      this.Formhead='Update Cars';
      this.Formbtn='Update';
    }
    this.action=Action;
    this.mycarid=id;
  }
  setform(id:any){
    for (let car of this.mycars){
      if(id===car.mycar_id){
        this.car_object={
          brand:car.brand,
          model:car.model,
          colour:car.colour,
          condition:car.car_condition,
          description:car.description,
          photo:car.coverphoto,
          reg_no:car.reg_no,
          insurance_validitytill:car.insurance_validitytill,
          car_name:car.car_name,
          rent:car.rent
        }
      }
    }
  }
  //THIS FUNCTION CALLS UPDATE REQUEST THROUGH SERVICE
  update(data:any){
    let flag=true;
    if(this.action==='delete'){
      if(!confirm("you sure you want to delete this  cars data")){
        flag=false;
      }
    }
    if(flag){
      let formdata=new FormData();
    formdata.append('action',this.action);
    formdata.append('mycar_id',this.mycarid);
    this.photo=this.base64ToFile(this.croppedImage,String(this.PROVIDER_EMAIL)+'.png')
    formdata.append('photo',this.photo);
    for (let key in data){
      formdata.append(key,data[key]);
    }
    this.rental_service.updatemycars(formdata).subscribe((res:any)=>{
      if(res.success!==undefined){
        this.classname='alert alert-success';
        this.server_response=res.success;
        this.getcars();
  //      this.car_object={};

      }
      else{
        this.classname='alert alert-danger';
        this.server_response=res.error;
      }
      
    })
    }
    
  }

 
  getcars(){
    this.rental_service.getmycars().subscribe((res:any)=>{
      if(res.success!==undefined){
        this.mycars=res.success;
      }
    })
  }
  ngOnInit(): void {
    this.rental_service.isloggedin().subscribe((res:any)=>{
      if(res.value===true){
       this.PROVIDER_EMAIL=res.success;
       this.getcars();
      }
      else{
        this.router.navigateByUrl('/rental/login');
      }
    });
  }

}
