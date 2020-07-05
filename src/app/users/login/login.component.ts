import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:UserService,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
    if(localStorage.getItem('token')!=null){
      this.router.navigateByUrl('/home');
    }
    this.resetForm();
  }
resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.service.formData = {
    Id:null,
    UserName:"",
    Email:"",
    password:""
  }
  

}
onSubmit(form:NgForm){
this.insertedData(form);
}
insertedData(form:NgForm){
this.service.postUser(form.value).subscribe(
  (res:any)=>{
   localStorage.setItem('token',res.token);
   this.router.navigateByUrl('/home'); 
   this.toastr.success('Saved Succesfully','Succesfull');
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
