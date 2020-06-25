import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { RegistrationComponent } from './users/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './Shared/user.service';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
 


import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './auth.interceptor';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { SidenavListComponent } from './component/sidenav-list/sidenav-list.component';

import { MatTabsModule, MatSidenavModule,MatToolbarModule,MatIconModule,MatButtonModule,MatSlideToggleModule,MatListModule,MatGridListModule } from '@angular/material';
import{FlexLayoutModule} from '@angular/flex-layout';
import { LayoutComponent } from './component/layout/layout.component';
import { AuthService } from './auth.service';
import {JwtModule, JWT_OPTIONS, JwtModuleOptions } from '@auth0/angular-jwt';


import { MainModule } from './module/main/main.module';







export function getToken() {
  return localStorage.getItem('access_token');
 }
const JWT_Module_Options: JwtModuleOptions = {
   config:{
     tokenGetter: getToken,
     whitelistedDomains:['localhost:4200']
   }
};



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,

    LayoutComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatListModule,
    MatGridListModule,
    MainModule,
    JwtModule.forRoot(JWT_Module_Options),
    ToastrModule.forRoot()
  ],
  providers: [AuthService,{ 
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
