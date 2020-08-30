import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder,FormArray } from '@angular/forms';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Shared/user.service';

@Component({
  selector: 'app-couriercontactperson',
  templateUrl: './couriercontactperson.component.html',
  styleUrls: ['./couriercontactperson.component.css']
})
export class CouriercontactpersonComponent implements OnInit {
  contactPersonForm:FormGroup;
  constructor(private service:UserService,
    private toastr:ToastrService,
    private _formBuilder: FormBuilder,
    private dialog:MatDialog) { }

  ngOnInit() {
    this.contactPersonForm = new FormGroup({
      personName:new FormControl('',Validators.required),
      phone1:new FormControl('',Validators.required),
      phone2:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required)
    })

    this.service.ContactPersonList = [];
  }

  onSubmit(){
    if(this.contactPersonForm.valid){
      this.service.ContactPersonList.push(this.contactPersonForm.value);
      this.contactPersonForm.reset();
    }

  }

  keyPress1(event: any){
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  keyPress2(event: any){
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
