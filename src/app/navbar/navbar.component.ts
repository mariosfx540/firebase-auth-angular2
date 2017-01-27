import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PlayerSearchService } from '../services/player-search.service';
import { Router } from '@angular/router';

import { Player } from '../shared/models/player';


@Component({
  selector: 'navbar',
  templateUrl: './navbar-component.html',
  styleUrls: ['../navbar/navbar-component.css']
})

export class NavbarComponent{
  
  allPlayers: Player[];
  filtered: Player[];
  
  constructor(
    private af: AuthService,
    private _search: PlayerSearchService){}



  ngOnInit() {
    this._search.allPlayers()
      .subscribe(
        players => this.allPlayers = this.filtered = players
      )
  }

  search(search:string){
    
    this.filtered = this.allPlayers.filter(player => player.name.includes(search));
  }




}