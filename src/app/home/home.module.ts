import { NgModule } from '@angular/core';

import { SharedModule }      from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { MainComponent } from './components/main/main.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    MainComponent
  ]
})
export class HomeModule {}