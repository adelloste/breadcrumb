import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: '',
        component: MainComponent,
        children: [
          {
            path: 'home',
            loadChildren: '../home/home.module#HomeModule'
          }
        ]
      }
    ])
  ],
  declarations: []
})
export class MainRoutingModule { }