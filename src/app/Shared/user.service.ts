import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Test } from '../model/Test';
import { Food } from '../model/Food';
import { ArticleDetails } from '../model/ArticleDetails';
import { ArticleVariant } from '../model/ArticleVariant';
import { ArticleImageVariant } from '../model/ArticleImageVariant';
import { EArticleDetails } from '../model/EArticleDetails';
import { FormGroup,FormControl, Validators,FormBuilder,FormArray } from '@angular/forms';
import *as _ from 'lodash';
import { EArticleImage } from '../model/EArticleImage';
import { ContactPerson } from '../model/ContactPerson';
import { CourierMaster } from '../model/CourierMaster';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  form:FormGroup = new FormGroup({
    art_Code:new FormControl(null),
   
    articleImage:new FormControl('',Validators.required),
    isDefault:new FormControl(false)
  })

  
 
  formData:User;
  TestData:Test;
  FoodData:Food;
  ArticleDetailsData:ArticleDetails;
  ArticleVariantData:ArticleVariant;
  ArticleImageData:ArticleImageVariant;
  ArticleVariantList:ArticleVariant[];
  ArticleImageList:ArticleImageVariant[];
  ArticleEImageList:EArticleImage[];
  ContactPersonList:ContactPerson[];
  readonly authUrl= "https://localhost:44375/api/OAuth";
  readonly baseUrl ="https://localhost:44375/api"

  constructor(private http:HttpClient) { }

  postUser(formData:User){
    return this.http.post(this.authUrl+'/GetAuthentication',formData);
  }

  getUser(){
    //var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.http.get(this.authUrl+'/GetUser');
  }
  postTest(TestData:Test){
    return this.http.post(this.authUrl+'/PostTest',TestData);
  }

  getCategoryList() {
    return this.http.get(this.baseUrl + '/ArticleSettings/GetCategorys').toPromise();
  }
  getSubCategoryList() {
    return this.http.get(this.baseUrl + '/ArticleSettings/GetSubCategorys').toPromise();
  }
  getBrandList() {
    return this.http.get(this.baseUrl + '/ArticleSettings/GetBrand').toPromise();
  }
  getVatList() {
    return this.http.get(this.baseUrl + '/ArticleSettings/GetVat').toPromise();
  }
  postAllArticleData(ArticleDetailsData:ArticleDetails){
    var body = {
      ArticleDetailsData,
      ArticleImageList: this.ArticleImageList,
      ArticleVariantList:this.ArticleVariantList
    };
    return this.http.post(this.baseUrl+'/ArticleSettings/GetAllArticleData',body);
  }

  EGetAllArticleDetails(){
    return this.http.get(this.baseUrl+'/ArticleGet/EGetAllArticleDetails');
  }
  populateForm(row){
    
    
     this.form.patchValue({art_Code:row.art_Code})
  }

  postEArticleImage(){
  
    return this.http.post(this.baseUrl+'/ArticleSettings/PostArticleImage',this.ArticleEImageList);
  }

  postCourierMaster(CourierDetails:CourierMaster){
    var body = {
      CourierDetails,
      ContactPersonList:this.ContactPersonList
    }
    return this.http.post(this.baseUrl+'/ArticleSettings/PostCourierMaster',body);
  }

}
