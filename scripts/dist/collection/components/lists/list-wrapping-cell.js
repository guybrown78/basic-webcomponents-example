import { Component, h, Prop } from '@stencil/core';
export class ListWrappingCell {
    constructor() {
        this.contentAlign = 'left';
    }
    render() {
        return (h("div", { class: this.order ? 'wrap' : '' },
            h("slot", null)));
    }
    static get is() { return "tf-list-wrapping-cell"; }
    static get encapsulation() { return "shadow"; }
    static get styles() { return "div{\n\t\t\t@apply flex-shrink-0;\n\t\t}\n\t\t.wrap{\n\t\t\t@apply mt-4;\n\t\t}\n\t\t@screen sm {\n\t\t\tdiv{\n\t\t\t\t@apply mt-0;\n\t\t\t}\n\t\t}"; }
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
