import { Component, h, Prop, Event } from '@stencil/core';
export class ModalTest {
    constructor() {
        this.headerStyle = "modal";
        this.showCancel = true;
        this.showConfirm = true;
        this.showClose = true;
        this.cancelText = "Cancel";
        this.confirmText = "Confirm";
        this.cancelColour = "grey";
        this.confirmColour = "aqua";
    }
    onClose() {
        console.log("onClose");
    }
    onConfirm() {
        console.log("onConfirm");
    }
    render() {
        return (h("div", { class: `modal-wrapper show` },
            h("div", { class: "backdrop-container" },
                h("div", { class: `
					backdrop
					show
				` })),
            h("div", { class: `
				modal
				show
			` },
                h("header", { class: `modal-header ${this.headerStyle === "modal" ? "header-style-modal"
                        : this.headerStyle === "modal" ? "header-style-alert"
                            : "header-style-default"}` },
                    h("h2", { class: `title ${this.headerStyle === "modal" ? "header-style-modal"
                            : this.headerStyle === "modal" ? "header-style-alert"
                                : "header-style-default"}` }, this.displayTitle),
                    this.showClose &&
                        h("div", { class: "close-button" },
                            h("tf-icon-button", { onClick: this.onClose.bind(this), colour: "grey", icon: "close" }))),
                h("section", { class: "modal-body" },
                    h("slot", null)),
                h("footer", { class: "modal-footer" },
                    this.showConfirm &&
                        h("span", { class: "confirm-wrapper" },
                            h("tf-button", { onClick: this.onConfirm.bind(this), colour: this.confirmColour }, this.confirmText)),
                    this.showCancel &&
                        h("span", { class: "cancel-wrapper" },
                            h("tf-button", { onClick: this.onClose.bind(this), colour: this.cancelColour }, this.cancelText))))));
    }
    static get is() { return "tf-modal-test"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./modal.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["modal.css"]
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
        "headerStyle": {
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
            "attribute": "header-style",
            "reflect": true,
            "defaultValue": "\"modal\""
        },
        "showCancel": {
            "type": "boolean",
            "mutable": true,
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
            "attribute": "show-cancel",
            "reflect": true,
            "defaultValue": "true"
        },
        "showConfirm": {
            "type": "boolean",
            "mutable": true,
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
            "attribute": "show-confirm",
            "reflect": true,
            "defaultValue": "true"
        },
        "showClose": {
            "type": "boolean",
            "mutable": true,
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
            "attribute": "show-close",
            "reflect": true,
            "defaultValue": "true"
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
        },
        "confirmText": {
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
            "attribute": "confirm-text",
            "reflect": true,
            "defaultValue": "\"Confirm\""
        },
        "cancelColour": {
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
            "attribute": "cancel-colour",
            "reflect": true,
            "defaultValue": "\"grey\""
        },
        "confirmColour": {
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
            "attribute": "confirm-colour",
            "reflect": true,
            "defaultValue": "\"aqua\""
        }
    }; }
    static get events() { return [{
            "method": "tfModalClosed",
            "name": "tfModalClosed",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "tfModalConfirmed",
            "name": "tfModalConfirmed",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
