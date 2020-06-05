import { Component, h, Prop } from '@stencil/core';
export class FormTitle {
    constructor() {
        this.colour = 'default';
    }
    render() {
        return (h("div", { class: `form-title colour-${this.colour}` },
            h("slot", null)));
    }
    static get is() { return "tf-form-title"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["form-styles.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["form-styles.css"]
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
            "reflect": false,
            "defaultValue": "'default'"
        }
    }; }
}
