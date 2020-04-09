import { h } from "@stencil/core";
export class ListWrappingCell {
    constructor() {
        this.contentAlign = 'left';
    }
    render() {
        return (h("div", { class: "" },
            h("slot", { name: "icon" }),
            h("span", null,
                h("slot", null))));
    }
    static get is() { return "tf-leading-icon-label"; }
    static get encapsulation() { return "shadow"; }
    static get styles() { return "div{\n\t\t\t@apply flex items-center text-sm leading-5 text-gray-500;\n\t\t}\n\t\t::slotted([slot=icon]){\n\t\t\t@apply mr-2 h-5 w-5;\n\t\t}"; }
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
