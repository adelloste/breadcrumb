import { NgModule } from '@angular/core';

import { SharedModule }          from '../shared/shared.module';
import { LevelTwoRoutingModule } from './level-two-routing.module';

import { MainComponent } from './components/main/main.component';

@NgModule({
  imports: [
    SharedModule,
    LevelTwoRoutingModule
  ],
  declarations: [
    MainComponent
  ]
})
export class LevelTwoModule {}