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
          breadcrumb: 'Home',
          icon: 'fa fa-home'
        },
        children: [
          {
            path: 'levelone/:id/:ip',
            loadChildren: () => import('../level-one/level-one.module').then(m => m.LevelOneModule)
          }
        ]
      }
    ])
  ],
  declarations: []
})
export class HomeRoutingModule { }