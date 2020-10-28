import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/user.service';
import { FormGroup,FormControl, Validators,FormBuilder,FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Category } from 'src/app/model/Category';
import { SubCategory } from 'src/app/model/SubCategory';
import { Brand } from 'src/app/model/Brand';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { ArticleImageVariantComponent } from '../article-image-variant/article-image-variant.component';
import { ArticleVariantComponent } from '../article-variant/article-variant.component';
import { Vat } from 'src/app/model/Vat';
import { ArticleVariant } from 'src/app/model/ArticleVariant';
import { ArticleImageVariant } from 'src/app/model/ArticleImageVariant';

@Component({
  selector: 'app-institutionsettings',
  templateUrl: './institutionsettings.component.html',
  styleUrls: ['./institutionsettings.component.css']
})
export class InstitutionsettingsComponent implements OnInit {
  CategoryList:Category[];
  SubCategoryList:SubCategory[];
  BrandList:Brand[];
  VatList:Vat[];
  ShowVat:Vat[];
  articleForm:FormGroup;
  ImageList:ArticleImageVariant[];
  fg:FormArray;
  constructor(private service:UserService,
    private toastr:ToastrService,
    private _formBuilder: FormBuilder,
    private dialog:MatDialog) { }

  ngOnInit() {
   this.service.getCategoryList().then(res=>this.CategoryList = res as Category[]);
   this.service.getSubCategoryList().then(res=>this.SubCategoryList=res as SubCategory[]);
   this.service.getBrandList().then(res=>this.BrandList=res as Brand[]);
   this.service.getVatList().then(res=>this.VatList=res as Vat[]);
  
  this.articleForm = new FormGroup({
    ArticleTitle:new FormControl('',Validators.required),
    ArticleSubTitle:new FormControl('',Validators.required),
    CategoryC_Id:new FormControl(null,Validators.required),
    SubCategoryS_Id:new FormControl(null,Validators.required),
    Brand_Id:new FormControl(null,Validators.required),
    Vat_Id:new FormControl(null,Validators.required),
    Description:new FormControl('',Validators.required),
    StandardPrice:new FormControl(null,Validators.required),
    FranchisePrice:new FormControl(null,Validators.required),
    InstitutePrice:new FormControl(null,Validators.required),
    PurchaseCost:new FormControl(null,Validators.required),
    WholeSalePrice:new FormControl(null,Validators.required),
    DealerPrice:new FormControl(null,Validators.required),
    OtherPrice:new FormControl(null,Validators.required),
    DiscontPrice:new FormControl(null,Validators.required),
    DiscountRate:new FormControl(null,Validators.required)
  })
  this.service.ArticleImageList = [];
  this.service.ArticleVariantList = [];
  this.ShowVat = this.VatList;
  

 
  }
  
    
 
 

  config: AngularEditorConfig = { editable: true, spellcheck: true, height: '3rem', minHeight: '3rem', placeholder: 'Enter Article Description  here...', translate: 'no' }

   
    
   
  onSubmit(){
    
    if(this.articleForm.valid){
      this.service.postAllArticleData(this.articleForm.value).subscribe(
        (res:any)=>{
         this.articleForm.reset();
         this.service.ArticleImageList.length=0;
         this.service.ArticleVariantList.length=0;
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

  AddOrEditAriticleVariant(){
   
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
     
    this.dialog.open(ArticleVariantComponent,dialogConfig);
  }
  AddOrEditImage(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "35%";
     
    this.dialog.open(ArticleImageVariantComponent,dialogConfig);
  }
}
