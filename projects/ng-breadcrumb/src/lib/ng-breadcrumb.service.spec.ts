import { TestBed } from '@angular/core/testing';

import { NgBreadcrumbService } from './ng-breadcrumb.service';

describe('NgBreadcrumbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgBreadcrumbService = TestBed.get(NgBreadcrumbService);
    expect(service).toBeTruthy();
  });
});
