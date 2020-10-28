import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/user.service';
import {MatTableDataSource} from '@angular/material/table';
import { EmployeeDetails } from 'src/app/model/EmployeeDetails';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  PracticeEmployeeList:EmployeeDetails[];
  constructor(private services:UserService) { }

  ngOnInit() {
    this.services.getPracticeEmployeeById().subscribe(res=>{
      this.dataSource.data=res as EmployeeDetails[]
    });
  }
  
  displayedColumns: string[] = ['Designation', 'Natoinality', 'Father Name', 'Mother Name',
  'Job Location'];
  dataSource = new MatTableDataSource<EmployeeDetails>();

}
