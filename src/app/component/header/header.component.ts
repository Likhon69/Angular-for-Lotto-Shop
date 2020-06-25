import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Shared/user.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userDetails:{};

  constructor(private router:Router,private services:UserService,public auth:AuthService) { }

  @Output() public sidenavToggle = new EventEmitter();
  ngOnInit() {
   
    this.services.getUser().subscribe(res=>{
      this.userDetails = res;  
     
    },
    err=>{
      console.log(err);
    })
   
  }
   
  

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']); 
    }
  
    onToggleSidenav(){
      this.sidenavToggle.emit();
    }
}
