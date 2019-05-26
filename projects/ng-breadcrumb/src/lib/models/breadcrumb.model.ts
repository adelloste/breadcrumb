import { Params } from "@angular/router";

export class Breadcrumb {
    url: string;
    label: string;
    params?: Params;

    constructor(url: string, label: string, params?: Params) {
        this.url = url;
        this.label = label;
        this.params = params;
    }
}
