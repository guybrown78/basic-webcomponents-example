import { Component, h, Prop } from '@stencil/core';
export class FormCard {
    constructor() {
        this.colour = 'default';
    }
    render() {
        return (h("div", { class: `
					form-card 
					${this.colour === "white" ? "colour-white"
                : this.colour === "blue" ? "colour-blue"
                    : this.colour === "aqua" ? "colour-aqua"
                        : this.colour === "grey" ? "colour-grey"
                            : this.colour === "navy" ? "colour-navy"
                                : "colour-default"} 
				` },
            h("slot", null)));
    }
    static get is() { return "tf-form-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["form-styles.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["form-styles.css"]
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
            "reflect": false,
            "defaultValue": "'default'"
        }
    }; }
}
