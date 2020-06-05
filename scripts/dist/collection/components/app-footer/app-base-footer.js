import { Component, h } from '@stencil/core';
export class AppHeader {
    render() {
        return (h("footer", null,
            h("slot", { name: "tagline" })));
    }
    static get is() { return "tf-app-base-footer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["app-footer.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["app-footer.css"]
    }; }
}
