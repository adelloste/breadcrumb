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
          breadcrumb: 'Home'
        },
        children: [
          {
            path: 'levelone/:id/:ip',
            loadChildren: '../level-one/level-one.module#LevelOneModule'
          }
        ]
      }
    ])
  ],
  declarations: []
})
export class HomeRoutingModule { }