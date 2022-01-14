import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { AppTopBarComponent } from './toolbar/app.topbar.component';
import { AppFooterComponent } from './footer/app.footer.component';
//import { AppMenuComponent } from './menu/app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    AppTopBarComponent,
    AppFooterComponent,
    //AppMenuComponent,
    AppMenuitemComponent,
  ],
  exports: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    AppTopBarComponent,
    AppFooterComponent,
    //AppMenuComponent,
    AppMenuitemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
