import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder,FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Shared/user.service';
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  articleVariantForm:FormGroup;
  constructor(private services:UserService,private toastr:ToastrService) { }
  
  ngOnInit() {
    this.articleVariantForm = new FormGroup(
      {
        ArticleNo:new FormControl('',Validators.required),
        Size:new FormControl('',Validators.required),
        Color:new FormControl('',Validators.required),
        Gender:new FormControl('',Validators.required)
      }
    )
  }
  onSubmit()
  { 
     if(this.articleVariantForm.valid){
       this.services.practiceApi(this.articleVariantForm.value).subscribe(
        (res:any)=>{

          this.articleVariantForm.reset();
          
          
          this.toastr.success('Saved Succesfully!','Save');
         
          },
          err=>{
            if(err.status == 500){
            this.toastr.error('Incorrect Username or Password','Authentication Failed');
            }else{
              console.log(err);
            }
          }
       )
     }
  }
}
