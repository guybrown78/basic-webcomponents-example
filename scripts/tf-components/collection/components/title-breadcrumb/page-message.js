import { Component, h } from '@stencil/core';
export class PageMessage {
    render() {
        return (h("p", { class: "page-message" },
            h("slot", null)));
    }
    static get is() { return "tf-page-message"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./breadcrumbs.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["breadcrumbs.css"]
    }; }
}
