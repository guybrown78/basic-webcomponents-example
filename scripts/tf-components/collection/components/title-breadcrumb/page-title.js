import { Component, h } from '@stencil/core';
export class PageTitle {
    render() {
        return (h("h1", { class: "page-title" },
            h("slot", null)));
    }
    static get is() { return "tf-page-title"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./breadcrumbs.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["breadcrumbs.css"]
    }; }
}
