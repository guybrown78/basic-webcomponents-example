import { Component, h } from '@stencil/core';
export class MenuBar {
    render() {
        return (h("section", null,
            h("div", { id: "lozenge-container" },
                h("slot", null))));
    }
    static get is() { return "tf-menu-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["menu-bar.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["menu-bar.css"]
    }; }
}
