import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder,FormArray } from '@angular/forms';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Shared/user.service';
import { DistrictMaster } from 'src/app/model/DistrictMaster';
import { DsitrictArea } from 'src/app/model/DsitrictArea';
@Component({
  selector: 'app-agrement-settings',
  templateUrl: './agrement-settings.component.html',
  styleUrls: ['./agrement-settings.component.css']
})
export class AgrementSettingsComponent implements OnInit {
  agreementForm:FormGroup;
  DistrictMasterList:DistrictMaster[];
  DistrictAreaList:DsitrictArea[];
  constructor(private service:UserService,
    private toastr:ToastrService,
    private _formBuilder: FormBuilder,
    private dialog:MatDialog) { }

  ngOnInit() {
    this.agreementForm = new FormGroup({
      zone:new FormControl('',Validators.required),
      area:new FormControl('',Validators.required),
      company:new FormControl('',Validators.required),
      amount:new FormControl(null,Validators.required)
    })
    this.service.getAllDistrictMaster().then(res=> this.DistrictMasterList = res as DistrictMaster[]
     
    
      );
      
    
  }

  getArea(id){
    this.service.getAllDistrictAreaById(id).then(res=>this.DistrictAreaList = res as DsitrictArea[]);
  }

}
