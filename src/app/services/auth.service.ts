import { Injectable } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import { Router } from '@angular/router';

@Injectable()

export class AuthService{
  displayName;
  photoURL;
  authState;
  isAuth = false;


  constructor(
    private af: AngularFire,
    private router: Router){
      
      
      this.af.auth.subscribe(authState => {
        if(!authState){
          this.displayName = null;
          this.photoURL = null;
        } else {
          this.displayName = authState.auth.displayName;
          this.photoURL = authState.auth.photoURL;
        }
      });
    }


  login(from: string){
    this.af.auth.login({
      provider: this.getProvider(from),
      method: AuthMethods.Popup
    }).then(authState => {
      this.isAuth = true;
    });
    this.router.navigate(['']);
  }

  logout(){
    this.af.auth.logout();
    this.isAuth = false;
  }


  private getProvider(from: String){
    switch(from){
      case 'facebook': return AuthProviders.Facebook;
      case 'google': return AuthProviders.Google;
    }
  }
}
