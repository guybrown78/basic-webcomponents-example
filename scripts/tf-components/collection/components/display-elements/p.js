import { Component, h, Prop } from '@stencil/core';
export class PTag {
    constructor() {
        this.textAlign = "left";
        this.colour = "default";
    }
    render() {
        const textAlign = this.textAlign;
        const colour = this.colour;
        return (h("p", { class: `
				tag-p 
				${colour === "white" ? "colour-white"
                : colour === "blue" ? "colour-blue"
                    : colour === "aqua" ? "colour-aqua"
                        : colour === "grey" ? "colour-grey"
                            : colour === "navy" ? "colour-navy"
                                : "colour-default"}
				${textAlign === "right" ? "text-align-right"
                : textAlign === "center" ? "text-align-center"
                    : textAlign === "justify" ? "text-align-justify"
                        : textAlign === "left" ? "text-align-left"
                            : "text-align-left"}
			` },
            h("slot", null)));
    }
    static get is() { return "tf-p"; }
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
