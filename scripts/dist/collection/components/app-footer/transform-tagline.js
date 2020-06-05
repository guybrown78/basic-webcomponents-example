import { Component, h } from '@stencil/core';
export class AppHeader {
    render() {
        return (h("span", { class: "tagline" }, "Transform, part of the 3T Energy Group. Together\u00A0we\u00A0are\u00A0Transforming\u00A0Training\u00A0with\u00A0Technology."));
    }
    static get is() { return "tf-transform-tagline"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["app-footer.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["app-footer.css"]
    }; }
}
