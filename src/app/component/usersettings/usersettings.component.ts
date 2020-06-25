import { Component, OnInit,Input } from '@angular/core';
import{MatAccordionDisplayMode} from '@angular/material';

@Component({
  selector: 'app-usersettings',
  templateUrl: './usersettings.component.html',
  styleUrls: ['./usersettings.component.css']
})
export class UsersettingsComponent implements OnInit {
 
  constructor() { }
  panelOpenState = false;
  ngOnInit() {
  }

}
