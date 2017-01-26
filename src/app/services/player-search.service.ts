import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';

import { Player } from '../shared/models/player';

@Injectable()
export class PlayerSearchService {

  constructor(private _af: AngularFire) { }


  allPlayers(): Observable<Player[]> {

    return this._af.database.list('/users');

  }

}
