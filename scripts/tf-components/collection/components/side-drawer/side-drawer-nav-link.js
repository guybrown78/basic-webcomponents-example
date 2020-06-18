import { Component, h, Prop, State, Element, Event } from '@stencil/core';
export class SideDrawerNavLink {
    constructor() {
        this.isSubOpen = false;
        this.showBottomBorder = true;
        this.hasSubMenu = false;
    }
    //
    onLinkClicked() {
        this.isSubOpen = !this.isSubOpen;
    }
    //
    onRouterLinkClicked() {
        this.tfRouterLinkClicked.emit({
            routerLink: this.routerLink
        });
        this.tfCloseSideDrawer.emit();
    }
    //
    componentWillLoad() {
        this.hasSubMenu = !!this.slotElement.querySelector('[slot="sub"]');
    }
    render() {
        let sub = null;
        let linkButton = (h("a", { href: this.hrefLink, title: !this.hrefTitle ? `Link to ${this.hrefLink}` : this.hrefTitle, class: `
					tailwind-side-nav
					${this.showBottomBorder ? "tailwind-side-nav-bottom-border" : ""}
				` },
            h("span", { class: "tailwind-side-nav-title" },
                h("slot", null))));
        if (this.routerLink) {
            linkButton = (h("a", { 
                //routerLink={ this.routerLink } 
                onClick: this.onRouterLinkClicked.bind(this), title: !this.hrefTitle ? `Link to ${this.hrefLink}` : this.hrefTitle, class: `
						tailwind-side-nav
						${this.showBottomBorder ? "tailwind-side-nav-bottom-border" : ""}
					` },
                h("span", { class: "tailwind-side-nav-title" },
                    h("slot", null))));
        }
        if (this.hasSubMenu) {
            sub = (h("div", { class: `sub-nav-content ${this.isSubOpen ? 'show' : 'hide'}` },
                h("slot", { name: "sub" })));
            const icon = this.isSubOpen ? h("tf-icon-chevron-up", null) : h("tf-icon-chevron-down", null);
            linkButton = (h("div", { class: `
						tailwind-side-nav 
						${this.isSubOpen ? 'opened' : ''}
						${this.showBottomBorder ? "tailwind-side-nav-bottom-border" : ""}
					`, onClick: this.onLinkClicked.bind(this) },
                h("span", { class: "tailwind-side-nav-title" },
                    h("slot", null)),
                h("span", { class: `tailwind-toggle-icon ${this.isSubOpen ? 'opened' : ''}` }, icon)));
        }
        return [linkButton, sub];
    }
    static get is() { return "tf-side-drawer-nav-link"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./side-drawer-nav-link.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["side-drawer-nav-link.css"]
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
    static get states() { return {
        "isSubOpen": {}
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
    static get elementRef() { return "slotElement"; }
}
