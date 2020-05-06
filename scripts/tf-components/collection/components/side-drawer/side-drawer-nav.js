import { Component, h } from '@stencil/core';
export class SideDrawerNav {
    render() {
        return (h("nav", { id: "side-nav", class: "side-nav" },
            h("div", null,
                h("slot", null))));
    }
    static get is() { return "tf-side-drawer-nav"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./side-drawer-nav.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["side-drawer-nav.css"]
    }; }
}
