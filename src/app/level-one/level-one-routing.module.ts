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
          breadcrumb: 'Level one'
        },
        children: [
          {
            path: 'leveltwo',
            loadChildren: '../level-two/level-two.module#LevelTwoModule'
          }
        ]
      }
    ])
  ],
  declarations: []
})
export class LevelOneRoutingModule { }