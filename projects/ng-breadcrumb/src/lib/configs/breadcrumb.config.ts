import { Injectable } from '@angular/core';

import { Breadcrumb } from '../models/breadcrumb.model';

@Injectable()
export class BreadcrumbConfig {

  public prefixes?: Breadcrumb[] = [];

}