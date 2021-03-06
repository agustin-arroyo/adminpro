import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

@NgModule({
  imports : [
    RouterModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    SideBarComponent,
    BreadcrumbsComponent,
    NoPageFoundComponent
  ],
  exports: [
    HeaderComponent,
    SideBarComponent,
    BreadcrumbsComponent
  ]
})

export class SharedModule {}
