import { Component, h, Element } from '@stencil/core';
export class SideDrawerSubNav {
    componentWillLoad() {
        // parse table header element
        const nodeEls = this.slotElement.getElementsByTagName('tf-side-drawer-sub-nav-link');
        //
        const l = Array.from(nodeEls).length;
        const lastItem = Array.from(nodeEls)[l - 1];
        lastItem.setAttribute("show-bottom-border", "false");
    }
    render() {
        return (h("div", { class: "sub-nav-content opened" },
            h("div", { class: "sub-nav-items" },
                h("slot", null))));
    }
    static get is() { return "tf-side-drawer-sub-nav"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./side-drawer-sub-nav.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["side-drawer-sub-nav.css"]
    }; }
    static get elementRef() { return "slotElement"; }
}
