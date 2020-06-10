import { Component, h, Prop, State, Method, Watch, Event } from '@stencil/core';
export class Modal {
    constructor() {
        this.isOpen = false;
        this.hasShownOnce = false;
        this.autoOpen = false;
        this.autoOpenDelay = 100;
        this.showDuration = 3000;
        this.alertId = null;
        this.icon = 'notification';
        this.colour = "blue";
        this.message = "";
        this.showButton = false;
        this.buttonTitle = "View";
        this.buttonColour = "grey";
        this.buttonSize = "xs";
    }
    // clonedAlertId:string = null;
    async open() {
        this.opened = true;
    }
    openedPropChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.isOpen = newValue;
            // can do something here, set timers etc
            if (this.isOpen) {
                setTimeout(() => {
                    this.onClose();
                    if (!this.hasShownOnce) {
                        this.hasShownOnce = true;
                    }
                }, this.showDuration);
            }
        }
    }
    onClose() {
        this.alertRef.addEventListener('transitionend', this.onTransitionEnd.bind(this));
        this.opened = false;
    }
    onTransitionEnd(event) {
        this.alertRef.removeEventListener('transitionend', this.onTransitionEnd.bind(this));
        event.preventDefault();
        event.stopPropagation();
        this.tfAlertTransitionedOut.emit({
            alertId: this.alertId
        });
    }
    componentWillLoad() {
        // this.clonedAlertId = String(this.alertId);
        if (this.autoOpen) {
            this.autoOpenDelay = this.autoOpenDelay < 100 ? 100 : this.autoOpenDelay;
            setTimeout(() => {
                this.open();
            }, this.autoOpenDelay);
        }
    }
    render() {
        let icon = null;
        if (this.icon) {
            const IconTag = `tf-icon-${this.icon}`;
            icon = h(IconTag, { class: `icon` });
        }
        let buttonContainer = null;
        if (this.showButton) {
            buttonContainer = (h("div", { class: "alert-right" },
                h("tf-button", { size: this.buttonSize, colour: this.buttonColour }, this.buttonTitle)));
        }
        return (h("div", { class: `alert-wrapper ${this.isOpen ? 'show' : 'hide'}` },
            h("div", { class: `
					alert
					${this.isOpen ? 'show' : this.hasShownOnce ? 'hide' : 'initial'}
				`, id: this.alertId, ref: el => this.alertRef = el },
                h("div", { class: "alert-container" },
                    h("div", { class: `alert-left` },
                        h("div", { class: `icon-container ${this.colour}` }, icon)),
                    h("div", { class: "alert-body" },
                        h("p", { class: `message ${this.colour}` }, this.message)),
                    buttonContainer))));
    }
    static get is() { return "tf-alert"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./alert.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["alert.css"]
    }; }
    static get properties() { return {
        "autoOpen": {
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
            "attribute": "auto-open",
            "reflect": false,
            "defaultValue": "false"
        },
        "autoOpenDelay": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "auto-open-delay",
            "reflect": false,
            "defaultValue": "100"
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
        "showDuration": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "show-duration",
            "reflect": true,
            "defaultValue": "3000"
        },
        "alertId": {
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
            "attribute": "alert-id",
            "reflect": true,
            "defaultValue": "null"
        },
        "icon": {
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
            "attribute": "icon",
            "reflect": true,
            "defaultValue": "'notification'"
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
            "defaultValue": "\"blue\""
        },
        "message": {
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
            "attribute": "message",
            "reflect": true,
            "defaultValue": "\"\""
        },
        "showButton": {
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
            "attribute": "show-button",
            "reflect": true,
            "defaultValue": "false"
        },
        "buttonTitle": {
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
            "attribute": "button-title",
            "reflect": false,
            "defaultValue": "\"View\""
        },
        "buttonColour": {
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
            "attribute": "button-colour",
            "reflect": false,
            "defaultValue": "\"grey\""
        },
        "buttonSize": {
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
            "attribute": "button-size",
            "reflect": false,
            "defaultValue": "\"xs\""
        }
    }; }
    static get states() { return {
        "isOpen": {},
        "hasShownOnce": {}
    }; }
    static get events() { return [{
            "method": "tfAlertTransitionedOut",
            "name": "tfAlertTransitionedOut",
            "bubbles": false,
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
