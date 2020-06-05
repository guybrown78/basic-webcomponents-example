import { Component, h } from '@stencil/core';
export class TableScrollingContainer {
    render() {
        return (h("div", { class: "div-1" },
            h("div", { class: "div-2" },
                h("div", { class: "div-3" },
                    h("slot", null)))));
    }
    static get is() { return "tf-table-scrolling-container"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["table-scrolling-container.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["table-scrolling-container.css"]
    }; }
}
