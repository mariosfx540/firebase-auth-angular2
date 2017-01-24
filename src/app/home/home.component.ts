import { Component } from '@angular/core';
import { SearchUserService } from '../services/search.players';


@Component({
  selector: 'home',
  templateUrl: './home-component.html'
})

export class HomeComponent{



  constructor(private search: SearchUserService){}
  
  



}