import { Component, h, Prop } from '@stencil/core';
export class FormErrors {
    constructor() {
        this.message = "Sorry, there was an error when trying to submit the form";
        this.hide = false;
    }
    render() {
        let content = null;
        if (!this.hide) {
            content = (h("div", { class: "form-errors form-card" },
                h("div", { class: "form-errors-container" },
                    h("div", { class: "form-errors-icon" },
                        h("div", { class: "hex-exclamation-icon" },
                            h("svg", { class: "hexagon-svg", viewBox: "0 0 44 50", xmlns: "http://www.w3.org/2000/svg" },
                                h("path", { class: "hex-outline", d: "M22.0051334,50 C20.9875773,50 19.94393,49.7081067 19.0307386,49.12432 L2.85420568,39.6510548 C1.00173174,38.642696 -0.12018909,36.5994427 0.0102668206,34.4500464 L0.0102668206,15.5300517 C-0.12018909,13.3806554 1.00173174,11.3374021 2.88029686,10.3025076 L19.0307386,0.855778161 C20.8310302,-0.285259387 23.1792366,-0.285259387 24.9795282,0.855778161 L41.1560611,10.3290434 C42.9302615,11.4435452 44,13.4071912 44,15.503516 L44,34.4765822 C44,36.572907 42.9302615,38.5630888 41.1821523,39.6510548 L24.9795282,49.1508558 C24.0663368,49.7081067 23.0487807,50 22.0051334,50 Z" })),
                            h("tf-icon-exclamation", { class: "exclamation-icon" }))),
                    h("span", { class: "error-message-title" }, this.message)),
                h("div", { class: "form-errors-container" },
                    h("div", { class: "form-errors-icon" },
                        h("div", { class: "form-errors-icon-spacer" }, "\u00A0")),
                    h("ul", { class: "form-errors-items" },
                        h("slot", null))),
                h("slot", null)));
        }
        return content;
    }
    static get is() { return "tf-form-errors"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["form-styles.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["form-styles.css"]
    }; }
    static get properties() { return {
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
            "defaultValue": "\"Sorry, there was an error when trying to submit the form\""
        },
        "hide": {
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
            "attribute": "hide",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
}
