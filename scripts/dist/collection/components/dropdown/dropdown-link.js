import { Component, h, Prop, Event } from '@stencil/core';
import { getColourClassname } from '../../utils/utils';
export class DropdownLink {
    constructor() {
        this.hrefTarget = "_self";
        this.colour = 'grey';
    }
    onDropdownLinkClicked() {
        this.tfDropdownLinkClicked.emit({
            routerLink: this.routerLink
        });
        this.tfCloseDropdown.emit();
    }
    render() {
        let t = !this.hrefTitle ? "Link to " + this.hrefLink : this.hrefTitle;
        let linkButton = (h("a", { href: this.hrefLink, title: t, target: this.hrefTarget, class: `
					dd-link 
					${getColourClassname(this.colour)}
				` },
            h("span", { class: "dd-link-title" },
                h("slot", null))));
        if (this.routerLink) {
            t = !this.hrefTitle ? "Go to " + this.hrefLink : this.hrefTitle;
            linkButton = (h("a", { onClick: this.onDropdownLinkClicked.bind(this), title: t, class: `
						dd-link 
						${getColourClassname(this.colour)}
					` },
                h("span", { class: "dd-link-title" },
                    h("slot", null))));
        }
        return (linkButton);
    }
    static get is() { return "tf-dropdown-link"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./dropdown-link.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["dropdown-link.css"]
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
        "hrefTarget": {
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
            "attribute": "href-target",
            "reflect": true,
            "defaultValue": "\"_self\""
        },
        "colour": {
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
            "attribute": "colour",
            "reflect": true,
            "defaultValue": "'grey'"
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
        }
    }; }
    static get events() { return [{
            "method": "tfDropdownLinkClicked",
            "name": "tfDropdownLinkClicked",
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
            "method": "tfCloseDropdown",
            "name": "tfCloseDropdown",
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
