import { Component, h, Prop, State, Method, Watch, Event } from '@stencil/core';
export class Modal {
    constructor() {
        this.isOpen = false;
        this.headerStyle = "modal";
        this.showCancel = true;
        this.showConfirm = true;
        this.showClose = true;
        this.cancelText = "Cancel";
        this.confirmText = "Confirm";
        this.cancelColour = "grey";
        this.confirmColour = "aqua";
    }
    async open() {
        this.opened = true;
    }
    openedPropChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            // can do something here, set timers etc
            this.isOpen = newValue;
        }
    }
    onClose() {
        this.opened = false;
        this.tfModalClosed.emit();
    }
    onConfirm() {
        this.opened = false;
        this.tfModalConfirmed.emit();
    }
    render() {
        return (h("div", { class: `modal-wrapper ${this.isOpen ? 'show' : 'hide'}` },
            h("div", { class: "backdrop-container" },
                h("div", { class: `
					backdrop
					${this.isOpen ? 'show' : 'hide'}
				` })),
            h("div", { class: `
				modal
				${this.isOpen ? 'show' : 'hide'}
			` },
                h("header", { class: `modal-header header-style-${this.headerStyle}` },
                    h("h2", { class: `title header-style-${this.headerStyle}` }, this.displayTitle),
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
    static get is() { return "tf-modal"; }
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
        "opened": {
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
            "attribute": "opened",
            "reflect": true
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
    static get states() { return {
        "isOpen": {}
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
    static get methods() { return {
        "open": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get watchers() { return [{
            "propName": "opened",
            "methodName": "openedPropChanged"
        }]; }
}
