import { Component, h, Prop, Event } from '@stencil/core';
export class SideDrawerSubNavLink {
    constructor() {
        this.showBottomBorder = true;
    }
    onRouterLinkClicked() {
        this.tfRouterLinkClicked.emit({
            routerLink: this.routerLink
        });
        this.tfCloseSideDrawer.emit();
    }
    render() {
        let linkButton = (h("a", { href: this.hrefLink, title: !this.hrefTitle ? `Link to ${this.hrefLink}` : this.hrefTitle, class: `
					tailwind-sub-nav
					${this.showBottomBorder ? "tailwind-sub-nav-bottom-border" : ""}
				` },
            h("span", { class: "tailwind-sub-nav-title" },
                h("slot", null))));
        if (this.routerLink) {
            linkButton = (h("a", { 
                //routerLink={ this.routerLink } 
                onClick: this.onRouterLinkClicked.bind(this), title: !this.hrefTitle ? `Link to ${this.hrefLink}` : this.hrefTitle, class: `
						tailwind-sub-nav
						${this.showBottomBorder ? "tailwind-sub-nav-bottom-border" : ""}
					` },
                h("span", { class: "tailwind-sub-nav-title" },
                    h("slot", null))));
        }
        return (linkButton);
    }
    static get is() { return "tf-side-drawer-sub-nav-link"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./side-drawer-sub-nav-link.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["side-drawer-sub-nav-link.css"]
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
        "showBottomBorder": {
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
            "attribute": "show-bottom-border",
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
        }, {
            "method": "tfCloseSideDrawer",
            "name": "tfCloseSideDrawer",
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
