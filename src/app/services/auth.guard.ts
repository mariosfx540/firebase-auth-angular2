import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(
        private af: AuthService,
        private router: Router){

    }


    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.af.isAuth){
            console.log('AUTH GUARD PASSED');
            this.router.navigate(['']);
            return true;
        } else {
            console.log("BLOCKED BY AUTH GUARD");
            this.router.navigate(['/login']);
            return false;
        }
    }
}

