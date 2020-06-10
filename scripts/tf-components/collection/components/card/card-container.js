import { Component, h, Prop } from '@stencil/core';
export class CardContainer {
    constructor() {
        this.colour = 'default';
    }
    render() {
        return (h("div", { id: "card-container" },
            h("slot", null)));
    }
    static get is() { return "tf-card-container"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["card-container.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["card-container.css"]
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
        }
    }; }
}
