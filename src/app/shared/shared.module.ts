import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { RouterModule }                     from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }                 from '@angular/common/http';

import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { NavbarComponent }   from './components/navbar/navbar.component';

import { NgBreadcrumbModule } from '@adelloste/ng-breadcrumb';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    
    NgBreadcrumbModule.forRoot()
  ],
  declarations: [
    SidemenuComponent,
    NavbarComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    SidemenuComponent,
    NavbarComponent,

    NgBreadcrumbModule
  ]
})
export class SharedModule { }