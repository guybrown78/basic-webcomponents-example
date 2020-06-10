import { Component, h, Prop } from '@stencil/core';
import { getPaddingClassname } from '../../utils/utils';
export class Card {
    constructor() {
        this.colour = 'default';
        this.padding = 'default';
    }
    render() {
        return (h("section", { class: `
				${this.colour} 
				${getPaddingClassname(this.padding)}
			` },
            h("slot", null)));
    }
    static get is() { return "tf-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["card.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["card.css"]
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
            "defaultValue": "'default'"
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
            "defaultValue": "'default'"
        }
    }; }
}
