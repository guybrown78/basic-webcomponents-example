import { h } from "@stencil/core";
export class SideDrawerSubNavLink {
    render() {
        return (h("a", { href: this.hrefLink, title: !this.hrefTitle ? `Link to ${this.hrefLink}` : this.hrefTitle, class: "tailwind-sub-nav" },
            h("span", { class: "tailwind-sub-nav-title" },
                h("slot", null))));
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
        }
    }; }
}
