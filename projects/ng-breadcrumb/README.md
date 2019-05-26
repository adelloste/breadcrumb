## ng-breadrumbs

ng-breadrumbs is a module for Angular that generates a breadcrumb that indicate the current page’s location within a navigational hierarchy.
It is based on the built-in Angular router.

## Installation

First you need to install the npm module:

```sh
npm install @ng-breadcrumb --save
```

## Usage

#### 1. Import the `BreadcrumbModule`:

Finally, you can use ng-breadcrumb in your Angular project. You have to import `BreadcrumbModule.forRoot()` in the root NgModule of your application.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { BreadcrumbModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        BrowserModule,
        BreadcrumbModule.forRoot()
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
```

##### SharedModule

If you use a `SharedModule` that you import in multiple other feature modules, you can export the `BreadcrumbModule` to make sure you don't have to import it in every module.

```ts
@NgModule({
    exports: [
        CommonModule,
        BreadcrumbModule
    ]
})
export class SharedModule { }
```

#### 2. Add a `breadcrumb` property in the route's data:

```ts
export const ROUTES: Routes = [
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule',
        data: {
            breadcrumb: 'Home'
        }
    },
    {
        path: 'heros',
        loadChildren: 'app/heros/heros.module#HerosModule',
        data: {
            breadcrumb: 'Heros'
        }
    },
    {
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full'
    }
];
```

#### 3. Put the the selector in your template:

```html
<ng-breadcrumb></ng-breadcrumb>
```

## Prefixing routes

#### Import global prefixes by adding it to the forRoot configuration

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { BreadcrumbModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        BrowserModule,
        BreadcrumbModule.forRoot({
          prefixes: [
            { url: '', label: 'Prefix-Global', params: {} }
          ]
        })
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
```

#### Import prefixes by adding it to the input

```html
<ng-breadcrumb [prefixes]="prefixes"></ng-breadcrumb>
```

```ts
import { Component, OnInit } from '@angular/core';

import { Breadcrumb } from 'breadcrumb';

@Component({
  selector: 'adellost-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public prefixs: Breadcrumb[] = [{ url: '', label: 'Prefix', params: {} }];

  constructor() { }

  ngOnInit() { }

}
```
