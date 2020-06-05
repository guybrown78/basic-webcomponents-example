import { Component, h, Prop } from '@stencil/core';
export class Node {
    constructor() {
        this.lWidth = null;
    }
    render() {
        let stylesL = {};
        if (this.lWidth) {
            stylesL['width'] = this.lWidth;
        }
        return (h("div", { id: "base-node" },
            h("div", { id: "fxl", style: stylesL },
                h("slot", { name: "fxl" })),
            h("div", { id: "flex" },
                h("slot", { name: "flex" }))));
    }
    static get is() { return "tf-node-fxl-flex"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["node.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["node.css"]
    }; }
    static get properties() { return {
        "lWidth": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "l-width",
            "reflect": true,
            "defaultValue": "null"
        }
    }; }
}
