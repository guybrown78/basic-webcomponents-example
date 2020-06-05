import { Component, h, Prop } from '@stencil/core';
export class AnchorTag {
    constructor() {
        this.url = null;
        this.tagTitle = null;
    }
    render() {
        return (h("a", { href: this.url, title: this.tagTitle },
            h("slot", null)));
    }
    static get is() { return "tf-a-tag"; }
    static get styles() { return "a{\n\t\t\t@apply font-medium text-blue-600 transition ease-in-out duration-150;\n\t\t}\n\t\ta:hover{\n\t\t\t@apply text-blue-500;\n\t\t}\n\t\ta:focus{\n\t\t\t@apply outline-none underline;\n\t\t}"; }
    static get properties() { return {
        "url": {
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
            "attribute": "url",
            "reflect": true,
            "defaultValue": "null"
        },
        "tagTitle": {
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
            "attribute": "tag-title",
            "reflect": true,
            "defaultValue": "null"
        }
    }; }
}
