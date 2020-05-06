import { Component, h, Prop } from '@stencil/core';
export class CardTitle {
    constructor() {
        this.colour = "blue";
    }
    render() {
        return (h("h2", { class: this.colour },
            h("slot", null)));
    }
    static get is() { return "tf-card-title"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["card-title.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["card-title.css"]
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
            "defaultValue": "\"blue\""
        }
    }; }
}
