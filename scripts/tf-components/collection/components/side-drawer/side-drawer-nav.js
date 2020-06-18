import { Component, h, Element } from '@stencil/core';
export class SideDrawerNav {
    componentWillLoad() {
        // parse table header element
        const nodeEls = this.slotElement.getElementsByTagName('tf-side-drawer-nav-link');
        //
        const l = Array.from(nodeEls).length;
        const lastItem = Array.from(nodeEls)[l - 1];
        lastItem.setAttribute("show-bottom-border", "false");
    }
    render() {
        return (h("nav", { class: "side-nav" },
            h("div", { class: "side-nav-items" },
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
    static get elementRef() { return "slotElement"; }
}
