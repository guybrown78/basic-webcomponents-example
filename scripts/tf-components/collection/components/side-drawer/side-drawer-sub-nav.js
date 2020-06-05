import { Component, h } from '@stencil/core';
export class SideDrawerSubNav {
    render() {
        return (h("div", { class: "sub-nav-content opened" },
            h("slot", null)));
    }
    static get is() { return "tf-side-drawer-sub-nav"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./side-drawer-sub-nav.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["side-drawer-sub-nav.css"]
    }; }
}
