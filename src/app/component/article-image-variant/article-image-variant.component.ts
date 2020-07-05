import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import { FormGroup,FormControl, Validators,FormBuilder,FormArray } from '@angular/forms';
import { UserService } from 'src/app/Shared/user.service';
@Component({
  selector: 'app-article-image-variant',
  templateUrl: './article-image-variant.component.html',
  styleUrls: ['./article-image-variant.component.css']
})
export class ArticleImageVariantComponent implements OnInit {
  imageForm:FormGroup;
  public message:string;
  public progress:number;
  @Output() onUploadFinished = new EventEmitter();
  constructor(private service:UserService,private http:HttpClient) { }

  ngOnInit() {
    this.imageForm = new FormGroup({
      ImageName:new FormControl('',Validators.required)
    })
  }
  onSubmit(){
    if(this.imageForm.valid){
      this.service.ArticleImageList.push(this.imageForm.value);
      this.imageForm.reset();
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
}
