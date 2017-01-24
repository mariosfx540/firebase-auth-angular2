import { Injectable } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import { Http, Headers, Response } from '@angular/http';



@Injectable()
export class SearchUserService{


    constructor(
        private _http: Http,
        private af: AngularFire
    ){}
}