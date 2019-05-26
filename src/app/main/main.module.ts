import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './components/main/main.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule {}