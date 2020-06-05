import { Component, h } from '@stencil/core';
export class MainContent {
    render() {
        return (h("main", null,
            h("slot", null)));
    }
    static get is() { return "tf-main-content"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["main-content.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["main-content.css"]
    }; }
}
