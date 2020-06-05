import { Component, Prop, h, State, Event, Listen, Watch } from '@stencil/core';
export class AppHeader {
    constructor() {
        this.showClientLogo = false;
        this.clientLogoSource = null;
        this.showUserAccount = false;
        this.isOpen = false;
        this.dropdownItems = [
            { label: 'My Account', value: 'userAccount' },
            { label: 'Log Out', value: 'signOut' }
        ];
        this.dropdownIdentifier = "user-account-dd-nav";
    }
    userAccountMenuItemsPropChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.setDropdownItems();
        }
    }
    handleClick(event) {
        if (this.isOpen) {
            const target = event.composedPath()[0];
            if (!target.matches('.dd-panel') &&
                !target.matches('.dd-panel-container') &&
                !target.matches('.dd-panel-bg') &&
                !target.matches('.dd-link') &&
                !target.matches('slot')) {
                event.preventDefault();
                event.stopPropagation();
                this.isOpen = false;
            }
        }
    }
    onHandleOptionClicked(event) {
        if (this.isOpen && event.detail.parent === this.dropdownIdentifier) {
            event.preventDefault();
            event.stopPropagation();
            this.tfUserAccountDropdownSelected.emit(Object.assign({}, event.detail));
            this.isOpen = false;
        }
    }
    onToggle() {
        this.isOpen = !this.isOpen;
    }
    componentWillLoad() {
        this.setDropdownItems();
    }
    setDropdownItems() {
        if (this.userAccountMenuItems) {
            this.dropdownItems = [...eval('(' + this.userAccountMenuItems + ')')];
        }
    }
    render() {
        let userAccount = null;
        let userAccountDropdown = null;
        if (this.showUserAccount) {
            userAccount = (h("div", { class: "account-navigation-container" },
                h("tf-icon-button", { icon: this.isOpen ? 'close' : 'user', size: "xs", colour: this.isOpen ? 'navy' : 'white', "outline-colour": "navy", onClick: this.onToggle.bind(this) })));
            //
            userAccountDropdown = (h("div", { class: `
					dd-panel 
					${this.isOpen ? 'show' : 'hide'}
				` },
                h("div", { class: `dd-panel-container dd-panel-grey` },
                    h("div", { class: "dd-panel-bg" }, this.dropdownItems.map((item, index) => {
                        return (h("tf-dropdown-rendered-option", { class: index + 1 < this.dropdownItems.length ? "show-dividing-border" : "", value: item.value, "element-title": item.label, colour: "grey", parent: this.dropdownIdentifier }, item.label));
                    })))));
        }
        //
        return (h("div", { class: "outer-container" },
            h("div", { class: "client-logo-container" },
                h("div", { class: "client-logo" },
                    h("img", { class: "client-logo-image", src: this.clientLogoSource })),
                userAccount),
            userAccountDropdown));
    }
    static get is() { return "tf-client-logo"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["client-logo.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["client-logo.css"]
    }; }
    static get properties() { return {
        "showClientLogo": {
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
            "attribute": "show-client-logo",
            "reflect": true,
            "defaultValue": "false"
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
            "reflect": true,
            "defaultValue": "null"
        },
        "showUserAccount": {
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
            "attribute": "show-user-account",
            "reflect": true,
            "defaultValue": "false"
        },
        "userAccountMenuItems": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "user-account-menu-items",
            "reflect": false
        }
    }; }
    static get states() { return {
        "isOpen": {},
        "dropdownItems": {}
    }; }
    static get events() { return [{
            "method": "tfUserAccountDropdownSelected",
            "name": "tfUserAccountDropdownSelected",
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
    static get watchers() { return [{
            "propName": "userAccountMenuItems",
            "methodName": "userAccountMenuItemsPropChanged"
        }]; }
    static get listeners() { return [{
            "name": "click",
            "method": "handleClick",
            "target": "window",
            "capture": true,
            "passive": false
        }, {
            "name": "tfDropdownOptionClicked",
            "method": "onHandleOptionClicked",
            "target": "body",
            "capture": false,
            "passive": false
        }]; }
}
