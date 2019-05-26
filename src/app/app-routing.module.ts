import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'main',
        loadChildren: './main/main.module#MainModule'
      },
      {
        path: '**',
        redirectTo: "/main/home",
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
