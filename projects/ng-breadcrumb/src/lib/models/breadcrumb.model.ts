import { Params } from "@angular/router";

export class Breadcrumb {
    url: string;
    label: string;
    params?: Params;
    icon?: string;

    constructor(url: string, label: string, params?: Params, icon?: string) {
        this.url    = url;
        this.label  = label;
        this.params = params;
        this.icon   = icon;
    }
}
