import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/user.service';
import {MatTableDataSource} from '@angular/material/table';
import { OrderDetails } from 'src/app/model/OrderDetails';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private service:UserService) { }
   OrderDetails = [];
  ngOnInit() {

    this.service.getOrderDetailsByOrderNo().subscribe(res=>{
     
      this.service.orderDetailsList= res as OrderDetails[],
      this.dataSource.data = res as OrderDetails[]
    }
      )
     
  }
  displayedColumns: string[] = ['Article', 'Article No', 'Quantity', 'Total Quantity',
  'Size','Paid Amount'];

 
  dataSource = new MatTableDataSource<OrderDetails>();
}
