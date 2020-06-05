import { Component, h, Prop } from '@stencil/core';
export class ContainedCard {
    constructor() {
        this.colour = 'default';
    }
    render() {
        return (h("div", { id: "contained-card", class: this.colour },
            h("div", { id: "contained-card-slot-wrapper" },
                h("slot", null))));
    }
    static get is() { return "tf-contained-card"; }
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
