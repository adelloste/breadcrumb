import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: '**',
        redirectTo: "/home",
        pathMatch: 'full'
      }
    ],
    { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
