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
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from '../components/doughnut-chart/doughnut-chart.component';

// temporal
import { ChangeProgressBarComponent } from '../components/change-progress-bar/change-progress-bar.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

// promises
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({

  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphs001Component,
    PagesComponent,
    ChangeProgressBarComponent,
    DoughnutChartComponent,
    AccountSettingsComponent,
    PromisesComponent,
    RxjsComponent
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
    FormsModule,
    ChartsModule
  ]
})

export class PagesModule {}
