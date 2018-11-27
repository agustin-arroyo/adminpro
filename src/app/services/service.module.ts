import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { SetingsService, SideBarService, ShareService} from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    SetingsService,
    SideBarService,
    ShareService
  ]
})
export class ServiceModule { }
