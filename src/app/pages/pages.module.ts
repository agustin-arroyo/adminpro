import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Routes
import { PAGES_ROUTES } from './pages.routes';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphs001Component } from './graphs001/graphs001.component';
import { PagesComponent } from './pages.component';

// Modules
import { SharedModule, } from '../shared/shared.module';

// temporal
import { ChangeProgressBarComponent } from '../components/change-progress-bar/change-progress-bar.component';

@NgModule({

  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphs001Component,
    PagesComponent,
    ChangeProgressBarComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphs001Component,
    PagesComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule
  ]
})

export class PagesModule {}
