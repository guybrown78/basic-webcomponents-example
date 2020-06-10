import { Component, h, Prop } from '@stencil/core';
import { getColourClassname, getTextAlignClassname } from '../../utils/utils';
export class SpanBold {
    constructor() {
        this.textAlign = "left";
        this.colour = "default";
    }
    render() {
        return (h("span", { class: `
				span-bold 
				${getColourClassname(this.colour)}
				${getTextAlignClassname(this.textAlign)}
			` },
            h("slot", null)));
    }
    static get is() { return "tf-span-bold"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["elements.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["elements.css"]
    }; }
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
            "defaultValue": "\"left\""
        },
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
            "defaultValue": "\"default\""
        }
    }; }
}
