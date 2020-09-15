import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder,FormArray } from '@angular/forms';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Shared/user.service';
import { DistrictMaster } from 'src/app/model/DistrictMaster';
import { DsitrictArea } from 'src/app/model/DsitrictArea';
import { CourierMaster } from 'src/app/model/CourierMaster';
@Component({
  selector: 'app-agrement-settings',
  templateUrl: './agrement-settings.component.html',
  styleUrls: ['./agrement-settings.component.css']
})
export class AgrementSettingsComponent implements OnInit {
  agreementForm:FormGroup;
  DistrictMasterList:DistrictMaster[];
  DistrictAreaList:DsitrictArea[];
  CourierComanyList:CourierMaster[];
  constructor(private service:UserService,
    private toastr:ToastrService,
    private _formBuilder: FormBuilder,
    private dialog:MatDialog) { }

  ngOnInit() {
    this.agreementForm = new FormGroup({
      zone:new FormControl(null,Validators.required),
      area:new FormControl(null,Validators.required),
      company:new FormControl(null,Validators.required),
      amount:new FormControl(null,Validators.required)
    })
    this.service.getAllDistrictMaster().then(res=> this.DistrictMasterList = res as DistrictMaster[]
     
    
      );

      this.service.getCourierDetailsList().then(res=>this.CourierComanyList = res as CourierMaster[]);
      
    
  }

  getArea(id){
    this.service.getAllDistrictAreaById(id).then(res=>this.DistrictAreaList = res as DsitrictArea[]);
  }
  onSubmit(){
    if(this.agreementForm.valid){
      this.service.postAgreement(this.agreementForm.value).subscribe(
        (res:any)=>{
         this.agreementForm.reset();
         
         
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
