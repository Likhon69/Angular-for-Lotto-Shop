import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormGroup,FormControl, Validators,FormBuilder,FormArray } from '@angular/forms';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Shared/user.service';
import { ArticleVariantComponent } from '../article-variant/article-variant.component';
import { CouriercontactpersonComponent } from '../couriercontactperson/couriercontactperson.component';

@Component({
  selector: 'app-couriermaster',
  templateUrl: './couriermaster.component.html',
  styleUrls: ['./couriermaster.component.css']
})
export class CouriermasterComponent implements OnInit {
  courierForm:FormGroup;
  constructor(private service:UserService,
    private toastr:ToastrService,
    private _formBuilder: FormBuilder,
    private dialog:MatDialog) { }

  ngOnInit() {
    this.courierForm = new FormGroup({
      courierName:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      website:new FormControl('',Validators.required),
      Description:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required)
    })
  }
  config: AngularEditorConfig = { editable: true, spellcheck: true, height: '3rem', minHeight: '3rem', placeholder: 'Enter Company Description  here...', translate: 'no' }
  AddOrEditAriticleVariant(){
   
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
     
    this.dialog.open(CouriercontactpersonComponent,dialogConfig);
  }
  onDeleteItem(item:number){
    this.service.ContactPersonList.splice(item,1);
  }
  onSubmit(){
    if(this.courierForm.valid){
      this.service.postCourierMaster(this.courierForm.value).subscribe(
        (res:any)=>{
         this.courierForm.reset();
         this.service.ContactPersonList.length=0;  
         
         this.toastr.success('Saved Succesfully!','Save');
        
         },
         err=>{
           if(err.status == 400){
           this.toastr.error('Incorrect Username or Password','Authentication Failed');
           }else{
             console.log(err);
           }
         }
      )
    }
  }
}
