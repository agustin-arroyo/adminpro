import { NgModule } from '@angular/core';

// Routes
import { PAGES_ROUTES } from './pages.routes';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphs001Component } from './graphs001/graphs001.component';
import { PagesComponent } from './pages.component';

// Modules
import { SharedModule, } from '../shared/shared.module';

@NgModule({

  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphs001Component,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphs001Component,
    PagesComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ]
})

export class PagesModule {}
