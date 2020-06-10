import { Component, h, Prop } from '@stencil/core';
export class ProductOutline {
    constructor() {
        this.colour = 'default';
        this.size = 'default';
    }
    render() {
        return (h("div", { class: `product-icon colour-${this.colour} size-${this.size}` },
            h("div", { class: "initials" }, this.initials),
            h("tf-icon-hexagon-outline", null)));
    }
    static get is() { return "tf-icon-product-outline"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["product.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["product.css"]
    }; }
    static get properties() { return {
        "colour": {
            "type": "string",
            "mutable": false,
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
            "attribute": "colour",
            "reflect": true,
            "defaultValue": "'default'"
        },
        "size": {
            "type": "string",
            "mutable": false,
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
            "attribute": "size",
            "reflect": true,
            "defaultValue": "'default'"
        },
        "initials": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "initials",
            "reflect": true
        }
    }; }
}
