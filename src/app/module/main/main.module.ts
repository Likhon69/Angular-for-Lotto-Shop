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
import {MatDialogModule} from '@angular/material/dialog';
import { ArticleImageVariantComponent } from 'src/app/component/article-image-variant/article-image-variant.component';
import { ArticleVariantComponent } from 'src/app/component/article-variant/article-variant.component';
import { QuillModule } from 'ngx-quill';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleSettingsComponent } from 'src/app/component/article-settings/article-settings.component';
import { MatPaginatorModule,MatIconModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSortModule} from '@angular/material/sort';
import { AddArticleImageComponent } from 'src/app/component/add-article-image/add-article-image.component';
import { CouriermasterComponent } from 'src/app/component/couriermaster/couriermaster.component';
import { CouriercontactpersonComponent } from 'src/app/component/couriercontactperson/couriercontactperson.component';


@NgModule({
  declarations: [
    MainComponent,
   HomeComponent,
   SettinggsComponent,
   InstitutionsettingsComponent,
   UsersettingsComponent,
   ArticleImageVariantComponent,
   ArticleVariantComponent,
   ArticleSettingsComponent,
   AddArticleImageComponent,
   CouriermasterComponent,
   CouriercontactpersonComponent
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
    MatDialogModule,
    HttpClientModule,
    AngularEditorModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
    MatCheckboxModule,
    QuillModule.forRoot(),
    ToastrModule.forRoot()
  ],
  entryComponents:[ArticleImageVariantComponent,ArticleVariantComponent,AddArticleImageComponent,CouriercontactpersonComponent],
  

})
export class MainModule { }
