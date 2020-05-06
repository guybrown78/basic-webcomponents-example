import { Component, h, Prop } from '@stencil/core';
export class NodeText {
    constructor() {
        this.justify = "flex-start";
    }
    render() {
        const styles = {
            justifyContent: this.justify,
        };
        return (h("span", { id: "node-text-span", style: styles },
            h("slot", null)));
    }
    static get is() { return "tf-node-text"; }
    static get encapsulation() { return "shadow"; }
    static get styles() { return "#node-text-span{\n\t\t\tmargin:0;\n\t\t\tpadding:0;\n\t\t\tfont-family: 'Roboto Condensed', sans-serif;\n\t\t\tfont-size: 15px;\n\t\t\tline-height: 20px;\n\t\t\tdisplay:flex;\n\t\t\tflex:1;\n\t\t}"; }
    static get properties() { return {
        "justify": {
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
            "attribute": "justify",
            "reflect": true,
            "defaultValue": "\"flex-start\""
        }
    }; }
}
