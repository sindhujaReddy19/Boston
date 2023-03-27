import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private router:Router){}
  username:any;
  password:any;

  submit(){
     if(this.password=='1234'){
         this.router.navigateByUrl('/user/home');
     }
  }
}
