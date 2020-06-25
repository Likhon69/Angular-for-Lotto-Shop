import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/Shared/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-settinggs',
  templateUrl: './settinggs.component.html',
  styleUrls: ['./settinggs.component.css']
})
export class SettinggsComponent implements OnInit {
  constructor(private service:UserService,private toastr:ToastrService) { }

  ngOnInit() {
 
  }
 

}
