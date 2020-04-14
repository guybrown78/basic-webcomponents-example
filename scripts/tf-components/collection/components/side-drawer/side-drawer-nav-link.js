import { h } from "@stencil/core";
export class SideDrawerNavLink {
    constructor() {
        this.isSubOpen = false;
        this.hasSubMenu = false;
    }
    //
    onLinkClicked() {
        this.isSubOpen = !this.isSubOpen;
    }
    //
    componentWillLoad() {
        this.hasSubMenu = !!this.slotElement.querySelector('[slot="sub"]');
    }
    render() {
        let sub = null;
        let linkButton = (h("a", { href: this.hrefLink, title: !this.hrefTitle ? `Link to ${this.hrefLink}` : this.hrefTitle, class: "tailwind-side-nav" },
            h("span", { class: "tailwind-side-nav-title" },
                h("slot", null))));
        if (this.hasSubMenu) {
            sub = (h("div", { class: `sub-nav-content ${this.isSubOpen ? 'show' : 'hide'}` },
                h("slot", { name: "sub" })));
            const icon = this.isSubOpen ? h("tf-icon-chevron-up", null) : h("tf-icon-chevron-down", null);
            linkButton = (h("div", { class: `tailwind-side-nav ${this.isSubOpen ? 'opened' : ''}`, onClick: this.onLinkClicked.bind(this) },
                h("span", { class: "tailwind-side-nav-title" },
                    h("slot", null)),
                h("span", { class: "tailwind-toggle-icon" }, icon)));
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
        }
    }; }
    static get states() { return {
        "isSubOpen": {}
    }; }
    static get elementRef() { return "slotElement"; }
}
