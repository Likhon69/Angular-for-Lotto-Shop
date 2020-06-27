import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/user.service';
import { FormGroup,FormControl, Validators,FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Test } from 'src/app/model/Test';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},


];
@Component({
  selector: 'app-institutionsettings',
  templateUrl: './institutionsettings.component.html',
  styleUrls: ['./institutionsettings.component.css']
})
export class InstitutionsettingsComponent implements OnInit {

  constructor(private service:UserService,private toastr:ToastrService,private _formBuilder: FormBuilder) { }
  
  articleForm:FormGroup;
  articleVariantSearch:FormGroup;
  articleImageSearch:FormGroup;
  articleList:FormGroup;
  arr=[];
  data:Test;
  ngOnInit() {
    this.articleForm = new FormGroup({
      FirstName: new FormControl('',Validators.required),
      LastName: new FormControl('',Validators.required),
      Age: new FormControl(null,Validators.required),
      Price:new FormControl('',Validators.required),
      DiscountPrice:new FormControl(null,Validators.required),
      VatRate:new FormControl('',Validators.required)
    })
  this.articleVariantSearch = new FormGroup({
   
    ArticleVariantSize: new FormControl(null,Validators.required)
  })
  this.articleImageSearch = new FormGroup({
    articleImageNumber:new FormControl(0,Validators.required)
  })


 
  this.articleList =  this._formBuilder.group({
    ArticleNo:['',Validators.required],
    Size:[0,Validators.required],
    Color:['']
  })

  }

  logKeyValuePairs(group: FormGroup): void {

   console.log(Object.keys(group.controls));
  }
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    
    dataSource = ELEMENT_DATA;
   
  onSubmit(){
    
    if(this.articleForm.valid){
      this.service.postTest(this.articleForm.value).subscribe(
        (res:any)=>{
          this.articleForm.reset();
          this.toastr.success('Succesfully','Success');
         
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
  onArticleVariantSubmit(){
    if(this.articleVariantSearch.valid){
      this.service.PostNumber(this.articleVariantSearch.value).subscribe(
        (res:any)=>{
          this.articleVariantSearch.reset();
          this.toastr.success('Succesfully','Success');
         
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
  onArticleListSubmit(){
    

   this.logKeyValuePairs(this.articleList);
  }
 
}
