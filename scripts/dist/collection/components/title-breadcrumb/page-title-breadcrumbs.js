import { Component, Prop, h, State, Event } from '@stencil/core';
export class PageTitleBreadcrumbs {
    constructor() {
        this.showBackButton = false;
        this.backButtonColour = "white";
        this.isOpen = false;
    }
    onBackButtonClicked() {
        this.tfBackButtonClicked.emit();
    }
    render() {
        let backBtn = null;
        if (this.showBackButton) {
            backBtn = (h("tf-icon-button", { icon: "chevron-left", size: "xs", colour: this.backButtonColour, onClick: this.onBackButtonClicked.bind(this) }));
        }
        return (h("div", { class: "container" },
            h("div", { class: "back-button-container" }, backBtn),
            h("div", { class: "content-container" },
                h("slot", { name: "welcomeMessage" }),
                h("slot", { name: "breadcrumbs" }),
                h("slot", { name: "pageTitle" }))));
    }
    static get is() { return "tf-page-title-breadcrumbs"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["page-title-breadcrumbs.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["page-title-breadcrumbs.css"]
    }; }
    static get properties() { return {
        "showBackButton": {
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
            "attribute": "show-back-button",
            "reflect": true,
            "defaultValue": "false"
        },
        "backButtonColour": {
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
            "attribute": "back-button-colour",
            "reflect": true,
            "defaultValue": "\"white\""
        }
    }; }
    static get states() { return {
        "isOpen": {}
    }; }
    static get events() { return [{
            "method": "tfBackButtonClicked",
            "name": "tfBackButtonClicked",
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
