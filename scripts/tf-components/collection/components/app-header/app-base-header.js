import { Component, Prop, h, Event } from '@stencil/core';
export class AppHeader {
    constructor() {
        this.appTitle = null;
        this.appInitials = null;
        this.showAppLogo = true;
        this.showClientLogo = false;
        this.clientLogoSource = null;
    }
    onButtonClickHandler(event) {
        event.preventDefault();
        this.tfAppLogoClicked.emit();
    }
    render() {
        let clientLogo = null;
        if (this.clientLogoSource && (this.clientLogoSource && this.showClientLogo)) {
            clientLogo = (h("div", { id: "client-logo-container" },
                h("div", { id: "client-logo" },
                    h("img", { src: this.clientLogoSource }))));
        }
        let appLogo = null;
        if (this.showAppLogo) {
            appLogo = (h("div", { id: "app-logo-container" },
                h("div", { id: "app-logo" },
                    h("tf-hexagon-button", { color: "gradient", id: "app-logo-icon", onClick: this.onButtonClickHandler.bind(this) },
                        h("div", { id: "app-logo-initials" }, this.appInitials)),
                    h("h1", { id: "app-logo-title" }, this.appTitle))));
        }
        return (h("header", null,
            appLogo,
            clientLogo));
    }
    static get is() { return "tf-app-base-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["app-header.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["app-header.css"]
    }; }
    static get properties() { return {
        "appTitle": {
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
            "attribute": "app-title",
            "reflect": true,
            "defaultValue": "null"
        },
        "appInitials": {
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
            "attribute": "app-initials",
            "reflect": true,
            "defaultValue": "null"
        },
        "showAppLogo": {
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
            "attribute": "show-app-logo",
            "reflect": true,
            "defaultValue": "true"
        },
        "showClientLogo": {
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
            "attribute": "show-client-logo",
            "reflect": true,
            "defaultValue": "false"
        },
        "clientLogoSource": {
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
            "attribute": "client-logo-source",
            "reflect": true,
            "defaultValue": "null"
        }
    }; }
    static get events() { return [{
            "method": "tfAppLogoClicked",
            "name": "tfAppLogoClicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            }
        }]; }
}
