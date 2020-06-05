import { Component, h, Prop } from '@stencil/core';
export class InfoPanel {
    constructor() {
        //
        this.colour = 'transparent';
        this.padding = 'none';
    }
    //
    render() {
        return (h("tf-card", { colour: this.colour, padding: this.padding },
            h("div", { class: `cards` },
                h("slot", null))));
    }
    static get is() { return "tf-info-panel"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["info-panel.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["info-panel.css"]
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
            "defaultValue": "'transparent'"
        },
        "padding": {
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
            "attribute": "padding",
            "reflect": true,
            "defaultValue": "'none'"
        }
    }; }
}
