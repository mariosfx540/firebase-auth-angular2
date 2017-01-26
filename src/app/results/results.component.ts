import { Component, OnInit } from '@angular/core';
import { PlayerSearchService } from '../services/player-search.service';
import { Player } from '../shared/models/player';


@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit{

  allPlayers: Player[];
  filtered: Player[];

  constructor(private _search: PlayerSearchService) { }

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
