import { Component, h, Prop } from '@stencil/core';
export class Node {
    constructor() {
        this.rWidth = null;
        this.lWidth = null;
    }
    render() {
        let stylesR = {};
        if (this.rWidth) {
            stylesR['width'] = this.rWidth;
        }
        let stylesL = {};
        if (this.lWidth) {
            stylesL['width'] = this.lWidth;
        }
        return (h("div", { id: "base-node" },
            h("div", { id: "fxl", style: stylesL },
                h("slot", { name: "fxl" })),
            h("div", { id: "flex" },
                h("slot", { name: "flex" })),
            h("div", { id: "fxr", style: stylesR },
                h("slot", { name: "fxr" }))));
    }
    static get is() { return "tf-node-fxl-flex-fxr"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["node.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["node.css"]
    }; }
    static get properties() { return {
        "rWidth": {
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
            "attribute": "r-width",
            "reflect": true,
            "defaultValue": "null"
        },
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
