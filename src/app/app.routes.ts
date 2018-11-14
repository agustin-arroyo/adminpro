import { PagesComponent } from './pages/pages.component';
import { RouterModule, Routes } from '@angular/router';

// Components
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graphs001Component } from './pages/graphs001/graphs001.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { RegisterComponent } from './login/register.component';


const appRoutes: Routes = [
  { path:
    '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graphs001', component: Graphs001Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
   },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NoPageFoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true});
