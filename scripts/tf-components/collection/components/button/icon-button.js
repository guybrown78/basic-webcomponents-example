import { Component, h, Prop } from '@stencil/core';
export class Button {
    constructor() {
        this.buttonId = null;
        this.size = 'default';
        this.colour = 'default';
        this.icon = null;
        //
        this.buttonType = 'button';
        this.disabled = false;
    }
    render() {
        const IconTag = `tf-icon-${this.icon}`;
        const icon = h(IconTag, { class: `central-icon icon-size-${this.size}` });
        return (h("div", { class: "hex-container" },
            h("button", { class: `hex-btn size-${this.size} colour-${this.colour} ${this.disabled ? 'disabled' : ''}`, type: this.buttonType, id: this.buttonId, disabled: this.disabled }, icon)));
        //   return (
        // <tf-hexagon-button 
        // 	class="icon-hex-btn"
        // 	button-type={this.buttonType}
        // 	button-id={this.buttonId}
        // 	disabled={this.disabled}
        // 	color={this.colour}
        // >
        // 	{ icon }
        // </tf-hexagon-button>
        //	);
    }
    static get is() { return "tf-icon-button"; }
    static get originalStyleUrls() { return {
        "$": ["./button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["button.css"]
    }; }
    static get properties() { return {
        "buttonId": {
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
            "attribute": "button-id",
            "reflect": true,
            "defaultValue": "null"
        },
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
            "defaultValue": "'default'"
        },
        "icon": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "icon",
            "reflect": true,
            "defaultValue": "null"
        },
        "buttonType": {
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
            "attribute": "button-type",
            "reflect": true,
            "defaultValue": "'button'"
        },
        "disabled": {
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
            "attribute": "disabled",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
}
