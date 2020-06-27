import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Test } from '../model/Test';
import { Food } from '../model/Food';

@Injectable({
  providedIn: 'root'
})

export class UserService {
 
  formData:User;
  TestData:Test;
  FoodData:Food;
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

  PostNumber(number:Test){
    return this.http.post(this.authUrl+'/ArticleSizeVariant',number);
  }
}
