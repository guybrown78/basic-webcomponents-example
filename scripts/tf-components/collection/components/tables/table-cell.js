import { h } from "@stencil/core";
export class TableCell {
    constructor() {
        this.textAlign = 'centre';
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "tf-table-cell"; }
    static get properties() { return {
        "textAlign": {
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
            "attribute": "text-align",
            "reflect": true,
            "defaultValue": "'centre'"
        }
    }; }
}
