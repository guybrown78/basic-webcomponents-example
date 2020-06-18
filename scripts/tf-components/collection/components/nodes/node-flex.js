import { Component, h } from '@stencil/core';
export class Node {
    render() {
        return (h("div", { id: "base-node", class: "base-node" },
            h("div", { id: "flex", class: "flex" },
                h("slot", { name: "flex" }))));
    }
    static get is() { return "tf-node-flex"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["node-flex.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["node-flex.css"]
    }; }
}
