import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PublicComponent } from './home/public.component';

import { AuthGuard } from './services/auth.guard';

const appRoutes: Routes = [
    {
        path: '',
        component: PublicComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'about',
        component: AboutComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'home',
        component: HomeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);