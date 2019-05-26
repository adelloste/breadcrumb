import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { RouterModule }                     from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }                 from '@angular/common/http';

import { NgBreadcrumbModule } from 'ng-breadcrumb';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    
    NgBreadcrumbModule.forRoot()
  ],
  declarations: [],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    NgBreadcrumbModule
  ]
})
export class SharedModule { }