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
  readonly baseUrl= "https://localhost:44375/api/OAuth";

  constructor(private http:HttpClient) { }

  postUser(formData:User){
    return this.http.post(this.baseUrl+'/GetAuthentication',formData);
  }

  getUser(){
    //var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.http.get(this.baseUrl+'/GetUser');
  }
  postTest(TestData:Test){
    return this.http.post(this.baseUrl+'/PostTest',TestData);
  }

}
