## @adelloste/ng-breadrumb

ng-breadrumb is a module for Angular that generates a breadcrumb that indicate the current page’s location within a navigational hierarchy.
It is based on the built-in Angular router.

## Table of contents

* [Demo](#demo)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## Demo

Open [Demo](https://adelloste.github.io/breadcrumb).

**[⬆ back to top](#table-of-contents)**

## Installation

First you need to install the npm module:

```sh
npm install @adelloste/ng-breadcrumb --save
```

**[⬆ back to top](#table-of-contents)**

## Usage

#### 1. Import the `BreadcrumbModule`:

Finally, you can use ng-breadcrumb in your Angular project. You have to import `NgBreadcrumbModule.forRoot()` in the root NgModule of your application.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { NgBreadcrumbModule } from '@adelloste/ng-breadcrumb';

@NgModule({
    imports: [
        BrowserModule,
        NgBreadcrumbModule.forRoot()
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
```

##### SharedModule

If you use a `SharedModule` that you import in multiple other feature modules, you can export the `NgBreadcrumbModule` to make sure you don't have to import it in every module.

```ts
@NgModule({
    exports: [
        CommonModule,
        NgBreadcrumbModule
    ]
})
export class SharedModule { }
```

#### 2. Add a `breadcrumb` property in the route's data:

If you want to provide individual icons, add a `icon` property in the route's data.

```ts
export const ROUTES: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
        data: {
            breadcrumb: 'Home',
            icon: 'fa fa-home'  // I'm using font-awesome (only CSS classes)
        }
    },
    {
        path: 'heros',
        loadChildren: () => import('./heros/heros.module').then(m => m.HerosModule)
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

import { NgBreadcrumbModule } from '@adelloste/ng-breadcrumb';

@NgModule({
    imports: [
        BrowserModule,
        NgBreadcrumbModule.forRoot({
          prefixes: [
            { url: '', label: 'Prefix-Global', params: {}, icon: '' }
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

import { Breadcrumb } from '@adelloste/ng-breadcrumb';

@Component({
  selector: 'ad-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  prefixs: Breadcrumb[] = [{ url: '', label: 'Prefix', params: {}, icon: '' }];

  constructor() { }

  ngOnInit() { }

}
```

**[⬆ back to top](#table-of-contents)**

## License

ng-breadrumb is MIT licensed.

**[⬆ back to top](#table-of-contents)**
