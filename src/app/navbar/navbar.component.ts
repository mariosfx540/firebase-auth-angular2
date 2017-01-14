import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'navbar',
  templateUrl: './navbar-component.html',
  styleUrls: ['../navbar/navbar-component.css']
})

export class NavbarComponent{

    constructor(
      private af: AuthService,
      private router: Router){}
}