import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphs001Component } from './graphs001/graphs001.component';
import { PagesComponent } from './pages.component';

const pagesRoutes: Routes = [
  { path:
    '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graphs001', component: Graphs001Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
   }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes);
