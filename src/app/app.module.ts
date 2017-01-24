import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { PublicComponent } from './home/public.component';
import { SearchUserService } from './services/search.players';

export const firebaseConfig = {
    apiKey: "AIzaSyAYYybmyfTenT6qAr6yHRf2NHKXsmUtIa8",
    authDomain: "fir-project-37bd7.firebaseapp.com",
    databaseURL: "https://fir-project-37bd7.firebaseio.com",
    storageBucket: "fir-project-37bd7.appspot.com",
    messagingSenderId: "157363492370"
  };

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [
    AuthService,
    AuthGuard,
    SearchUserService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
