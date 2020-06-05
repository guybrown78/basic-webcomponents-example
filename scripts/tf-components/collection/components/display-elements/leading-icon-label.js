import { Component, h, Prop } from '@stencil/core';
export class ListWrappingCell {
    constructor() {
        this.contentAlign = 'left';
    }
    render() {
        return (h("div", { class: "container" },
            h("div", { class: "icon-container" },
                h("slot", { name: "icon" })),
            h("span", null,
                h("slot", null))));
    }
    static get is() { return "tf-leading-icon-label"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./leading-icon-label.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["leading-icon-label.css"]
    }; }
    static get properties() { return {
        "contentAlign": {
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
            "attribute": "content-align",
            "reflect": true,
            "defaultValue": "'left'"
        },
        "order": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "order",
            "reflect": true
        }
    }; }
}
