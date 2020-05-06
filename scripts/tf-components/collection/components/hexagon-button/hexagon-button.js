import { Component, Prop, h, Element } from '@stencil/core';
export class HexagonButton {
    constructor() {
        this.color = "accent";
        this.buttonId = null;
        this.buttonType = 'button';
        this.disabled = false;
    }
    // onButtonClickHandler(event){
    // 	// pauses the native event from being dispatched to allow the 'click' effect on the button
    // 	event.preventDefault();
    // 	event.stopPropagation();
    // 	setTimeout(() => {
    // 		this.el.dispatchEvent(event);
    // 	}, 500);
    // }
    render() {
        return (h("button", { tabindex: "0", "aria-pressed": "false", type: this.buttonType, id: this.buttonId, disabled: this.disabled, class: `sass-hex ${this.color}` },
            h("slot", null)));
    }
    static get is() { return "tf-hexagon-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["hexagon-button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["hexagon-button.css"]
    }; }
    static get properties() { return {
        "color": {
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
            "attribute": "color",
            "reflect": true,
            "defaultValue": "\"accent\""
        },
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
    static get elementRef() { return "el"; }
}
