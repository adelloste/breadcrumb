import { Component, OnInit, Input, OnChanges, Inject, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd }                  from '@angular/router';

import { Breadcrumb }       from '../../models/breadcrumb.model';
import { BreadcrumbConfig } from '../../configs/breadcrumb.config';
import { BREADCRUMB }       from '../../constants/breadcrumbs';

import { Subscription } from 'rxjs';
import { filter }       from 'rxjs/operators';

@Component({
  selector: 'ng-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public prefixs?: Breadcrumb[];

  public url: string = "";
  public breadcrumbs: Breadcrumb[] = [];
  public sub: Subscription;

  /**
   * Constructor
   * @param router 
   * @param activatedRoute 
   * @param config 
   */
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject('config') private config: BreadcrumbConfig
  ) {
    this.start();
  }

  ngOnInit() { }

  ngOnChanges() {
    this.prefixs && this.addPrefixes(this.prefixs);
  }

  /**
   * Let's go!
   * @method start
   */
  private start() {
    this.sub = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    )
    .subscribe((event) => {
      // Build breadcrumbs with the root route of current activated route
      this.breadcrumbs = this.buildBreadcrumb(this.activatedRoute.root);
      // Add prefixes to breadcrumbs
      this.config.prefixes && this.addPrefixes(this.config.prefixes);
    });
  }

  /**
   * Add prefixes
   * @method addPrefixes
   * @param prefixes 
   */
  private addPrefixes(prefixes: Breadcrumb[]): void {
    prefixes.map((prefix: Breadcrumb) => {
      // Update url with params
      prefix.url = prefix.url + `/${Object.keys(prefix.params).map((e: string) => prefix.params[e]).join("/")}`;
      // Return updated prefix
      return prefix;
    });
    this.breadcrumbs = [ ...prefixes, ...this.breadcrumbs ];
  }

  /**
   * Returns array of Breadcrumb objects that represent the breadcrumb
   * @method buildBreadcrumb
   * @param route 
   * @param breadcrumbs 
   */
  private buildBreadcrumb(route: ActivatedRoute, breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    // Get the child routes
    let children: ActivatedRoute[] = route.children;
    // Return if there are no more children
    if(children.length === 0) {
      // Return breacrumbs
      return breadcrumbs;
    }
    // Iterate over each children
    for(let child of children) {
      // Check if present the configuration of this route
      if(child.routeConfig && child.routeConfig.data) {
        // Get the route's URL segment
        let routeURL: string = route.snapshot.url.map(segment => segment.path).join("/");
        // Create url
        this.url = this.url + `/${routeURL}`;
        // Create breadcrumb
        let breadcrumb: Breadcrumb = new Breadcrumb(this.url, child.snapshot.data[BREADCRUMB], child.snapshot.params);
        // Add the breadcrumb
        breadcrumbs = [ ...breadcrumbs, breadcrumb ];
      }
      // Recursive
      return this.buildBreadcrumb(child, breadcrumbs);
    }
  }

  ngOnDestroy() {
    // https://github.com/angular/angular/issues/16261
    this.sub.unsubscribe();
  }

}
