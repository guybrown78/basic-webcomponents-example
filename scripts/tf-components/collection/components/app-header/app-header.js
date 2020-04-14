import { h } from "@stencil/core";
export class AppHeader {
    onButtonClickHandler(event) {
        event.preventDefault();
        this.tfAppLogoClicked.emit();
    }
    render() {
        return (h("header", null,
            h("div", { id: "app-logo-container" },
                h("div", { id: "app-logo" },
                    h("tf-hexagon-button", { color: "gradient", id: "app-logo-icon", onClick: this.onButtonClickHandler.bind(this) },
                        h("div", { id: "app-logo-initials" }, this.appInitials)),
                    h("h1", { id: "app-logo-title" }, this.appTitle))),
            h("div", { id: "central-contailer" },
                h("div", { id: "app-logo" },
                    h("tf-hexagon-button", { color: "accent", id: "app-logo-icon" },
                        h("div", { id: "quick-link-icon" }, "+")))),
            h("div", { id: "client-logo-container" },
                h("div", { id: "client-logo" },
                    h("img", { src: this.clientLogoSource })))));
    }
    static get is() { return "tf-app-header"; }
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
            "reflect": true
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
            "reflect": true
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
            "reflect": true
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
