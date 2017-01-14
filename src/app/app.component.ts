import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(
  private af: AuthService,
  private router: Router){
  }



  
}
