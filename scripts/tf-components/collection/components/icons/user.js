import { Component, h } from '@stencil/core';
export class SVGIcon {
    render() {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" },
            h("path", { fill: "currentColor", d: "M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z" })));
    }
    static get is() { return "tf-icon-user"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["icons.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["icons.css"]
    }; }
}
