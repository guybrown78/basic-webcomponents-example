import { Component, h } from '@stencil/core';
export class Node {
    render() {
        return (h("div", { class: "node-container" },
            h("div", { class: "flex" },
                h("slot", null))));
    }
    static get is() { return "tf-node"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["node.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["node.css"]
    }; }
}
