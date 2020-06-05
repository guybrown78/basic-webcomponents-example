import { Component, h } from '@stencil/core';
export class Divider {
    render() {
        return (h("div", { class: "divider-wrapper" },
            h("div", { class: "divider" })));
    }
    static get is() { return "tf-divider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["elements.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["elements.css"]
    }; }
}
