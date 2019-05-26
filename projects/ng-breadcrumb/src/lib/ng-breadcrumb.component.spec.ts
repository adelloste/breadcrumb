import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBreadcrumbComponent } from './ng-breadcrumb.component';

describe('NgBreadcrumbComponent', () => {
  let component: NgBreadcrumbComponent;
  let fixture: ComponentFixture<NgBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
