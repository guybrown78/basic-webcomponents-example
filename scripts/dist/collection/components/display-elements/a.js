import { Component, h, Prop } from '@stencil/core';
export class ATag {
    constructor() {
        this.textAlign = "left";
        this.colour = "default";
        this.underlined = true;
        this.url = null;
        this.tagTitle = null;
        this.target = "_self";
    }
    render() {
        return (h("a", { class: `
					${this.underlined ? 'underlined' : 'not-underlined'} 
					tag-a 
					colour-${this.colour} 
					${this.colour === "white" ? "colour-white"
                : this.colour === "blue" ? "colour-blue"
                    : this.colour === "aqua" ? "colour-aqua"
                        : this.colour === "grey" ? "colour-grey"
                            : this.colour === "navy" ? "colour-navy"
                                : "colour-default"} 
					${this.textAlign === "right" ? "text-align-right"
                : this.colour === "center" ? "text-align-center"
                    : this.colour === "justify" ? "text-align-justify"
                        : this.colour === "left" ? "text-align-left"
                            : "text-align-left"} 
				`, href: this.url, target: this.target, title: this.tagTitle, tabindex: "0" },
            h("slot", null)));
    }
    static get is() { return "tf-a"; }
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
        },
        "underlined": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "underlined",
            "reflect": true,
            "defaultValue": "true"
        },
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
        },
        "target": {
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
            "attribute": "target",
            "reflect": true,
            "defaultValue": "\"_self\""
        }
    }; }
}
