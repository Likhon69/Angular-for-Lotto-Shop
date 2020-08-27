import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import { EArticleDetails } from 'src/app/model/EArticleDetails';
import { UserService } from 'src/app/Shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-article-image',
  templateUrl: './add-article-image.component.html',
  styleUrls: ['./add-article-image.component.css']
})
export class AddArticleImageComponent implements OnInit {
  public message:string;
  public progress:number;
  @Output() onUploadFinished = new EventEmitter();
  constructor(private service:UserService,private http:HttpClient,
    private toastr:ToastrService) { }

  ngOnInit() {
  this.service.ArticleEImageList = [];
  }

  onSubmit(){
    if(this.service.form.valid){
      this.service.ArticleEImageList.push(this.service.form.value);
      this.service.form.controls['articleImage'].reset();
      //this.service.form.controls['isDefault'].reset();
    }
    
  }
  public uploadFile =(files)=>{
    if(files.length==0)
    return;
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file',fileToUpload,fileToUpload.name);
    this.http.post('https://localhost:44375/api/productupload/Upload',formData,{reportProgress:true,observe:'events'})
                 .subscribe(event=>{
                   if(event.type ==HttpEventType.UploadProgress){
                     this.progress = Math.round(100*event.loaded/event.total)
                   }
                   else if(event.type == HttpEventType.Response){
                     this.message = "Upload Success";
                     this.onUploadFinished.emit(event.body);
                   }
                 })

}
onDeleteItem(item:number){
  this.service.ArticleEImageList.splice(item,1);
}
onSubmitToServer(){
  if(this.service.ArticleEImageList.length>0){
    this.service.postEArticleImage().subscribe(
      (res:any)=>{
     
       this.service.ArticleEImageList.length=0;
       
       this.toastr.success('Saved Succesfully!','Save');
      
       },
       err=>{
         if(err.status == 400){
          this.toastr.error('There are two image same!','Authentication Failed');
         }else if(err.status == 500){
          this.toastr.error('error!','Authentication Failed');
         }
       },
     
    )
  }
 
}
}
