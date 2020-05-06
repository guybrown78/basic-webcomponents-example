import { Component, h } from '@stencil/core';
export class List {
    render() {
        return (h("div", { class: "list-container" },
            h("ul", null,
                h("slot", null))));
    }
    static get is() { return "tf-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["list.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["list.css"]
    }; }
}
