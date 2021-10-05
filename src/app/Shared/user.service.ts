import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee} from '../model/Employee';
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
import { Agreement } from '../model/Agreement';
import { OrderDetails } from '../model/OrderDetails';
import { Practice } from '../model/Practice';
import { Designation } from '../model/Category copy';
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
  
  FoodData:Food;
  ArticleDetailsData:ArticleDetails;
  ArticleVariantData:ArticleVariant;
  ArticleImageData:ArticleImageVariant;
  ArticleVariantList:ArticleVariant[];
  ArticleImageList:ArticleImageVariant[];
  ArticleEImageList:EArticleImage[];
  ContactPersonList:ContactPerson[];
  order:string;
  employeeId:number;
  orderDetailsList:OrderDetails[];
  orderDetailsList1:OrderDetails[];
  readonly authUrl= "http://www.apilottodevelop.somee.com/api/OAuth";
  readonly baseUrl ="http://www.apilottodevelop.somee.com/api"
  readonly imgUrl = "http://www.apilottodevelop.somee.com/Likhon/"

  constructor(private http:HttpClient) { }

  postUser(formData:User){
    return this.http.post(this.authUrl+'/GetAuthentication',formData);
  }

  getUser(){
    //var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.http.get(this.authUrl+'/GetUser');
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

  getAllDistrictMaster(){
    return this.http.get(this.baseUrl+'/ArticleGet/GetAllDistrictMaster').toPromise();
  }
  getAllDistrictAreaById(id:number){
    return this.http.get(this.baseUrl+'/ArticleGet/GetDistrictMasterById/'+id).toPromise();
  }

  getCourierDetailsList(){
    return this.http.get(this.baseUrl+'/ArticleGet/GetCourierDetailsList').toPromise();
  }

  postAgreement(AgreementData:Agreement){
    return this.http.post(this.baseUrl+'/ArticleSettings/PostAgreement',AgreementData);
  }

  getOrderHeaderDetails(){
    return this.http.get(this.baseUrl+'/Order/GetOrderHeaderDetails');
  }
  orderNo(orderNo:string){
    this.order = orderNo;
  }
  getOrderDetailsByOrderNo(){
   
    
    return this.http.get(this.baseUrl+'/Order/GetOrderDetailsByOrderNo/'+this.order)
  }

  orderProcess(orderNo:string){
    return this.http.post(this.baseUrl+'/Order/OrderProcess/'+orderNo,orderNo);
  }
  practiceApi(practice:Practice){
   return this.http.post(this.baseUrl+'/ArticleGet/PostPractice',practice);
  }
  
  testApi(employee:Employee){
    return this.http.post(this.baseUrl+'/ArticleGet/PostTest',employee);
  }
  
  getDesignationApi(){
   return this.http.get(this.baseUrl+'/ArticleGet/GetDesignationList').toPromise();
  }
  getPracticeList(){
  return this.http.get(this.baseUrl+'/ArticleGet/GetPracticeList');
  }
  practiseId(id:number){
    this.employeeId = id;
  }
  getPracticeEmployeeById(){
    return this.http.get(this.baseUrl+'/ArticleGet/GetPracticeEmployeeList/'+this.employeeId);
  }
  deletePracticeList(no:number){
    return this.http.post(this.baseUrl+'/ArticleGet/DeletePractice/'+no,no);
    }
}
