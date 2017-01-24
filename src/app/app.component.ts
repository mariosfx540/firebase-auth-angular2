import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  users: Observable<any[]>;

  constructor(
  private af: AngularFire,
  private router: Router){
  }


  ngOnInit() {
    this.users = this.af.database.list('/users')
      .map(users => {
        console.log("BEFORE MAP", users);
        return users;
    });
  }
}
