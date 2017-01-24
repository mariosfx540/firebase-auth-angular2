import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { SearchUserService } from '../services/search.players';


@Component({
  selector: 'navbar',
  templateUrl: './navbar-component.html',
  styleUrls: ['../navbar/navbar-component.css']
})

export class NavbarComponent{

  response:string;
  
  constructor(
    private af: AuthService,
    private router: Router,
    private search: SearchUserService){}


}