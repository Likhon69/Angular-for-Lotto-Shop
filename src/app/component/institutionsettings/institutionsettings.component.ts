import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/user.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-institutionsettings',
  templateUrl: './institutionsettings.component.html',
  styleUrls: ['./institutionsettings.component.css']
})
export class InstitutionsettingsComponent implements OnInit {

  constructor(private service:UserService,private toastr:ToastrService) { }
  
  articleForm:FormGroup;
  
  ngOnInit() {
    this.articleForm = new FormGroup({
      FirstName: new FormControl('',Validators.required),
      LastName: new FormControl('',Validators.required),
      Age: new FormControl(null,Validators.required),
      Price:new FormControl('',Validators.required),
      DiscountPrice:new FormControl(null,Validators.required),
      VatRate:new FormControl('',Validators.required)
    })
  
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    
    dataSource = ELEMENT_DATA;
  onSubmit(){
    if(this.articleForm.valid){
      this.service.postTest(this.articleForm.value).subscribe(
        (res:any)=>{
          this.articleForm.reset();
          this.toastr.success('Succesfully','Success');
         
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
}
