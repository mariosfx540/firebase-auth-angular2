import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'login',
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.css']
})
export class LoginComponent {

    constructor(
      private af: AuthService,
      private router: Router){
    
  }


}