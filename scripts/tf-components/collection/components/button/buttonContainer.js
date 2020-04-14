import { h } from "@stencil/core";
// const enum SizeEnums {
//   xs = 'extra-small',
// 	s = 'small',
// 	m = 'medium',
// 	l = 'large',
// 	xl = 'extra-large',
// 	default = 'default'
// }
export class Button {
    constructor() {
        this.size = 'default'; //SizeEnums.default;
    }
    render() {
        return (h("span", null,
            h("slot", null)));
    }
    static get is() { return "tf-button-container"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./buttonContainer.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["buttonContainer.css"]
    }; }
    static get properties() { return {
        "size": {
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
            "attribute": "size",
            "reflect": true,
            "defaultValue": "'default'"
        }
    }; }
}
