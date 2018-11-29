import { RouterModule, Routes } from '@angular/router';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphs001Component } from './graphs001/graphs001.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
  { path:
    '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Dasboard' } },
      { path: 'progress', component: ProgressComponent, data: { title: 'Progress' } },
      { path: 'graphs001', component: Graphs001Component, data: { title: 'Gráficas' } },
      { path: 'promesas', component: PromisesComponent, data: { title: 'Promesas' } },
      { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJs' } },
      { path: 'app-account-settings', component: AccountSettingsComponent, data: { title: 'Ajustes' } },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
   }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes);
