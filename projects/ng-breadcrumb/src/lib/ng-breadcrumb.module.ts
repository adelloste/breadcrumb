import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule }                  from '@angular/common';
import { RouterModule }                  from '@angular/router';

import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

import { BreadcrumbConfig } from './configs/breadcrumb.config';

@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BreadcrumbComponent
  ]
})
export class BreadcrumbModule {
  static forRoot(config: BreadcrumbConfig = {}): ModuleWithProviders {
    return {
      ngModule: BreadcrumbModule,
      providers: [
        {
          provide: 'config', 
          useValue: config
        }
      ] 
    };
  }
}
