import { NgModule } from '@angular/core';

import { SharedModule }          from '../shared/shared.module';
import { LevelOneRoutingModule } from './level-one-routing.module';

import { MainComponent } from './components/main/main.component';

@NgModule({
  imports: [
    SharedModule,
    LevelOneRoutingModule
  ],
  declarations: [
    MainComponent
  ]
})
export class LevelOneModule {}