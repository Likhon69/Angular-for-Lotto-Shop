import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HomeComponent } from 'src/app/component/home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/Shared/shared.module';
import { MatSidenavModule } from '@angular/material';
import { SettinggsComponent } from 'src/app/component/settinggs/settinggs.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { InstitutionsettingsComponent } from 'src/app/component/institutionsettings/institutionsettings.component';
import { UsersettingsComponent } from 'src/app/component/usersettings/usersettings.component';
import {MatExpansionModule} from '@angular/material/expansion'; 
import{MatButtonModule,MatFormFieldModule,MatInputModule,MatRippleModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { ToastrModule } from 'ngx-toastr';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    MainComponent,
   HomeComponent,
   SettinggsComponent,
   InstitutionsettingsComponent,
   UsersettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    FormsModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    ReactiveFormsModule,
    MatGridListModule, 
    MatSelectModule,
    MatTableModule,
    ToastrModule.forRoot()
  ]

})
export class MainModule { }
