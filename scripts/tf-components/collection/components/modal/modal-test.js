import { Component, h, Prop } from '@stencil/core';
export class ModalTest {
    constructor() {
        this.cancelText = "Cancel";
    }
    render() {
        return (h("div", { class: `modal-wrapper show` },
            h("div", { class: `
					backdrop
					show
				` }),
            h("div", { class: `barry show` },
                h("tf-h2", null, this.displayTitle))));
    }
    static get is() { return "tf-modal-test"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./modal-test.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["modal-test.css"]
    }; }
    static get properties() { return {
        "displayTitle": {
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
            "attribute": "display-title",
            "reflect": true
        },
        "cancelText": {
            "type": "string",
            "mutable": true,
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
            "attribute": "cancel-text",
            "reflect": true,
            "defaultValue": "\"Cancel\""
        }
    }; }
}
