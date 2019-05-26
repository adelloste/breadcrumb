import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: '',
        component: MainComponent,
        data: {
          breadcrumb: 'Level two'
        }
      }
    ])
  ],
  declarations: []
})
export class LevelTwoRoutingModule { }