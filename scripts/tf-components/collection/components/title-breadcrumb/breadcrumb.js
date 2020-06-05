import { Component, h, Prop, Event } from '@stencil/core';
export class SideDrawerSubNavLink {
    constructor() {
        this.showChevron = true;
    }
    onRouterLinkClicked() {
        this.tfRouterLinkClicked.emit({
            routerLink: this.routerLink
        });
    }
    render() {
        let linkButton = (h("a", { href: this.hrefLink, title: !this.hrefTitle ? `Link to ${this.hrefLink}` : this.hrefTitle, class: "breadcrumb-link" },
            h("span", { class: "breadcrumb-link-title" },
                h("slot", null))));
        if (this.routerLink) {
            linkButton = (h("a", { onClick: this.onRouterLinkClicked.bind(this), title: !this.hrefTitle ? `Breadcrumb to ${this.hrefLink}` : this.hrefTitle, class: "breadcrumb-link" },
                h("span", { class: "breadcrumb-link-title" },
                    h("slot", null))));
        }
        let chevronIcon = null;
        if (this.showChevron) {
            chevronIcon = (h("div", { class: "breadcrumb-space" },
                h("tf-icon-chevron-right", { class: "chevron-right" })));
        }
        return (h("div", { class: "breadcrumb-wrapper" },
            linkButton,
            chevronIcon));
    }
    static get is() { return "tf-breadcrumb"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./breadcrumbs.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["breadcrumbs.css"]
    }; }
    static get properties() { return {
        "hrefLink": {
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
            "attribute": "href-link",
            "reflect": true
        },
        "hrefTitle": {
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
            "attribute": "href-title",
            "reflect": true
        },
        "routerLink": {
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
            "attribute": "router-link",
            "reflect": true
        },
        "showChevron": {
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
            "attribute": "show-chevron",
            "reflect": true,
            "defaultValue": "true"
        }
    }; }
    static get events() { return [{
            "method": "tfRouterLinkClicked",
            "name": "tfRouterLinkClicked",
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
