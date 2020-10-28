import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder,FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Designation } from 'src/app/model/Category copy';
import { UserService } from 'src/app/Shared/user.service';
import {MatTableDataSource} from '@angular/material/table';
import { Employee } from 'src/app/model/Employee';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  articleTestForm:FormGroup;
  DesignationList:Designation[];
  PracticeList:Employee[];
  constructor(private services:UserService,private toster:ToastrService,private dialog:MatDialog) { }

  ngOnInit() {
    this.articleTestForm=new FormGroup({
      name:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
      designation:new FormControl(null,Validators.required),
      salary:new FormControl(null,Validators.required),
      id:new FormControl(null,Validators.required)
    })
    //api method call
   
     this.services.getDesignationApi().then(res=> this.DesignationList = res as Designation[]);
     this.services.getPracticeList().subscribe(res=>{
       this.dataSource.data=res as Employee[]
     });
  }
  onSubmit(){
    if(this.articleTestForm.valid){
     this.services.testApi(this.articleTestForm.value).subscribe(
       (res:any)=>{
         this.articleTestForm.reset();
         this.toster.success('Saved Succesfully!','Save');
       },
       err=>{
        if(err.status == 500){
        this.toster.error('Incorrect Username or Password','Authentication Failed');
        }else{
          console.log(err);
        }
      }
     )
    }
  }
  displayedColumns: string[] = ['Id', 'Name', 'Address', 'Designation',
  'Salary','action1','action2','action3'];
  dataSource = new MatTableDataSource<Employee>();

  employeeDetails(row){
    //this.services.getPracticeEmployeeById(row.id).subscribe()
    this.services.practiseId(row.id);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "55%";
    dialogConfig.maxHeight=500;
     
    this.dialog.open(EmployeeDetailsComponent,dialogConfig);
  }
  employeeUpdate(row){
    
    this.articleTestForm.setValue(row);
  }
  employeeDelete(row){
    this.services.deletePracticeList(row.id).subscribe((res:any)=>{
      this.services.getPracticeList().subscribe(res=>{
        this.dataSource.data=res as Employee[]
      });
      this.toster.success('Order Process Succesfull!','Order');
     
      },
      err=>{
        if(err.status == 400){
        this.toster.error('Something Error!','Failed');
        }else{
          console.log(err);
        }
      })
  }
}
