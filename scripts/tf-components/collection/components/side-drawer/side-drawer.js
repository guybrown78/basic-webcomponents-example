import { Component, h, Prop, State, Method, Listen, Watch } from '@stencil/core';
export class SideDrawer {
    constructor() {
        this.showContactInfo = false;
    }
    async open() {
        this.opened = true;
    }
    onAppLogoClicked() {
        this.open();
    }
    onHandleCloseSideDrawer() {
        this.onCloseDraw();
    }
    stockSymbolChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            // can do something here, set timers etc
        }
    }
    onCloseDraw() {
        this.opened = false;
    }
    onContentChange(content) {
        this.showContactInfo = content === 'contact';
    }
    render() {
        let mainContent = h("slot", null);
        return [
            h("div", { onClick: this.onCloseDraw.bind(this), class: "backdrop" }),
            h("aside", null,
                h("header", null,
                    h("div", { id: "app-logo-container" },
                        h("div", { id: "app-logo" },
                            h("tf-hexagon-button", { onClick: this.onCloseDraw.bind(this), color: "white", id: "app-logo-icon" },
                                h("div", { id: "app-logo-initials" },
                                    h("tf-icon-close", null)))))),
                h("main", null, mainContent))
        ];
    }
    static get is() { return "tf-side-drawer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./side-drawer.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["side-drawer.css"]
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
        }
    }; }
    static get states() { return {
        "showContactInfo": {}
    }; }
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
            "methodName": "stockSymbolChanged"
        }]; }
    static get listeners() { return [{
            "name": "tfAppLogoClicked",
            "method": "onAppLogoClicked",
            "target": "body",
            "capture": false,
            "passive": false
        }, {
            "name": "tfCloseSideDrawer",
            "method": "onHandleCloseSideDrawer",
            "target": "body",
            "capture": false,
            "passive": false
        }, {
            "name": "tfCloseSideDrawer",
            "method": "onHandleCloseSideDrawer",
            "target": "body",
            "capture": false,
            "passive": false
        }]; }
}
