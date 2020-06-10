import { Component, h } from '@stencil/core';
export class NodeRowCellH5 {
    render() {
        return (h("h5", { class: "row-cell-header" },
            h("slot", null)));
    }
    static get is() { return "tf-node-row-cell-h5"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["node-row.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["node-row.css"]
    }; }
}
