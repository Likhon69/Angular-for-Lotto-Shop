import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { OrderHeader } from 'src/app/model/OrderHeader';
import { UserService } from 'src/app/Shared/user.service';
import {MatSort} from '@angular/material/sort';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { OrderDetailsComponent } from '../order-details/order-details.component';


@Component({
  selector: 'app-order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.css']
})
export class OrderHeaderComponent implements OnInit {
  searchKey:string;
  constructor( private dialog:MatDialog,private service:UserService) { }

  ngOnInit() {
    this.service.getOrderHeaderDetails().subscribe(res=>
      
      this.dataSource.data = res as OrderHeader[]
      )
  }
  displayedColumns: string[] = ['Order No', 'Order Date', 'Total Quantity', 'Total Amount',
  'Payment Method','Paid Amount','action1','action2'];
  dataSource = new MatTableDataSource<OrderHeader>();
 

  onClear(){
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter(){
    this.dataSource.filter  = this.searchKey.trim().toLowerCase();
  }

  orderDetails(row){
    var res = row.order_No;
    this.service.orderNo(res);
    console.log("Order"+" "+res);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "75%";
    dialogConfig.maxHeight=500;
     
    this.dialog.open(OrderDetailsComponent,dialogConfig);
  }
}
