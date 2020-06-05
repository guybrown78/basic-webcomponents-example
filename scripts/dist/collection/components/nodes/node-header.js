import { Component, h } from '@stencil/core';
export class NodeHeader {
    render() {
        return (h("div", { id: "node-header" },
            h("slot", null)));
    }
    static get is() { return "tf-node-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["node-header.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["node-header.css"]
    }; }
}
