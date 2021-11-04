import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
//import below line manually
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  classname='';
  server_response='';
  profile_pic:any=null;
  user_details:any={};
  image_url='';
  constructor(private user_Service:UserService,private router:Router) { }
  imageChangedEvent:any='';
  croppedImage:any ='';
  fileChangeEvent(event:any){
    this.imageChangedEvent=event;
  }
  imageCropped(event:ImageCroppedEvent){
    this.croppedImage=event.base64;  
    this.image_url=this.croppedImage; 
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

  ////////////////////////////////////////////////////////////////////////////
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
  editProfile(data:any){
    let formdata=new FormData();
    this.profile_pic=this.base64ToFile(this.croppedImage,String(this.user_details.user_email)+'.png')
    //console.log(this.profile_pic);
    formdata.append('profile_pic',this.profile_pic);
    for (let key in data){
      formdata.append(key,data[key]);
    }
   this.user_Service.editProfile(formdata).subscribe((res:any)=>{
      if(res.success){
        this.classname='text-success';
        this.server_response=res.success;
        this.Profile();
      }
      else{
        this.classname='text-danger';
        this.server_response=res.error;
      }
    })
  }
 /* upload(event:any){
    if(event.target.files.length>0){
      this.profile_pic=event.target.files[0];
      console.log(this.profile_pic);
    }
  }*/
  Profile(){
    this.user_Service.get_profile().subscribe((res:any)=>{
      if(res.success!==undefined){
        this.user_details=res.success[0];
        this.image_url=`background-image: url("http://localhost:3000/${this.user_details.profile_pic}"); width:200px;`
      }
    })
  }
  ngOnInit(): void {
    this.user_Service.authorized().subscribe((res:any)=>{
      if(res.success){
        this.Profile();
      }
      else{

        this.router.navigateByUrl('/users/login');
      }
    })
  }

}
