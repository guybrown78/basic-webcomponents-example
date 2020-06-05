import { Component, h, Prop, Event } from '@stencil/core';
export class StatDataCard {
    constructor() {
        this.cardTitle = 'Software Module';
        this.productTitle = '';
        this.productDescription = '';
        this.productCta = 'Find out more ask your Account Manager';
        this.productId = '';
        this.isActive = false;
        this.marketingCtaAsButton = false;
    }
    onProductButtonClicked() {
        this.tfPhOverviewButtonClicked.emit({
            productId: this.productId,
            productTitle: this.productTitle,
            productInitials: this.productInitials,
            productCode: this.productCode
        });
    }
    onProductFindOutMoreClicked() {
        this.tfPhOverviewFindOutMoreClicked.emit({
            productId: this.productId,
            productTitle: this.productTitle,
            productInitials: this.productInitials,
            productCode: this.productCode
        });
    }
    componentWillLoad() {
        if (!this.productCode) {
            this.productCode = this.productInitials ? this.productInitials : null;
        }
    }
    render() {
        let overContent = (h("div", { class: "card-over-body" },
            h("tf-product-logo", { code: this.productCode, size: "xl" }),
            h("tf-button", { colour: "aqua", onClick: this.onProductButtonClicked.bind(this) }, "Open")));
        if (!this.isActive) {
            overContent = (h("div", { class: "card-over-body" },
                h("tf-span-description", { class: "over-text", colour: "white", "text-align": "center" }, this.productDescription),
                h("tf-span-description", { class: `over-text ${this.marketingCtaAsButton ? 'product-cta' : ''}`, colour: "aqua", "text-align": "center", onClick: this.onProductFindOutMoreClicked.bind(this) }, this.productCta)));
        }
        return [
            h("section", { class: "card-container" },
                h("header", { class: "card-header" }, this.cardTitle),
                h("div", { class: "card-face" },
                    h("div", { class: "card-body" },
                        h("tf-product-logo", { colour: "blue", code: this.productCode }),
                        h("tf-span-title", { id: "product-title-span", "text-align": "center", colour: "blue" }, this.productTitle)),
                    h("div", { class: "card-footer" },
                        h("div", { class: "footer-contents" },
                            h("tf-status-beacon", { "traffic-light-colour": this.isActive ? "green" : "none" }),
                            h("tf-span-description", { colour: "blue" }, this.isActive ? "ACTIVE" : "INACTIVE")))),
                h("div", { class: "card-over" }, overContent))
        ];
    }
    static get is() { return "tf-ph-overview-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["overview-button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["overview-button.css"]
    }; }
    static get properties() { return {
        "cardTitle": {
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
            "attribute": "card-title",
            "reflect": false,
            "defaultValue": "'Software Module'"
        },
        "productCode": {
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
            "attribute": "product-code",
            "reflect": true
        },
        "productInitials": {
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
            "attribute": "product-initials",
            "reflect": true
        },
        "productTitle": {
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
            "attribute": "product-title",
            "reflect": true,
            "defaultValue": "''"
        },
        "productDescription": {
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
            "attribute": "product-description",
            "reflect": true,
            "defaultValue": "''"
        },
        "productCta": {
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
            "attribute": "product-cta",
            "reflect": false,
            "defaultValue": "'Find out more ask your Account Manager'"
        },
        "productId": {
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
            "attribute": "product-id",
            "reflect": false,
            "defaultValue": "''"
        },
        "isActive": {
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
            "attribute": "is-active",
            "reflect": true,
            "defaultValue": "false"
        },
        "marketingCtaAsButton": {
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
            "attribute": "marketing-cta-as-button",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get events() { return [{
            "method": "tfPhOverviewButtonClicked",
            "name": "tfPhOverviewButtonClicked",
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
            "method": "tfPhOverviewFindOutMoreClicked",
            "name": "tfPhOverviewFindOutMoreClicked",
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
