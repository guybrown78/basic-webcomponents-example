import { Component, Prop, h, State, Event, Listen, Watch, Element } from '@stencil/core';
export class AppHeader {
    constructor() {
        this.clientLogoSource = null;
        this.showUserAccount = false;
        // @Prop() userAccountMenuItems:any;
        this.isOpen = false;
        this.logoImageClass = "evaluate";
        this.dropdownItems = [];
        this.parsedOptions = [];
        this.dropdownIdentifier = "user-account-dd-nav";
        this.observer = null;
    }
    clientLogoSourcePropChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.logoImageClass = "evaluate";
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
    //
    onToggle() {
        this.isOpen = !this.isOpen;
    }
    componentWillLoad() {
        this.parseDropdownItems();
        this.initiateObserverMutation();
    }
    initiateObserverMutation() {
        // Options for the observer (which mutations to observe)
        const config = { attributes: true, childList: true, subtree: true };
        //
        const that = this;
        // Callback function to execute when mutations are observed
        const callback = function (mutationsList) {
            if (mutationsList.length) {
                that.parseDropdownItems();
            }
            // Use traditional 'for loops' for IE 11
            // for(let mutation of mutationsList) {
            // 		if (mutation.type === 'childList') {
            // 		}
            // }
        };
        // Create an observer instance linked to the callback function
        this.observer = new MutationObserver(callback);
        // Start observing the target node for configured mutations
        this.observer.observe(this.slotElement, config);
        // Disconnect the observing as componetnet is removed from DOM
    }
    disconnectedCallback() {
        // Stop observing the slotElement change
        this.observer.disconnect();
    }
    parseDropdownItems() {
        const optionsEls = this.slotElement.getElementsByTagName('tf-dropdown-option');
        let items = [];
        Array.from(optionsEls).forEach(opt => {
            const label = opt.innerHTML.replace(/<\!--.*?-->/g, "");
            items.push({
                value: opt.getAttribute('value'),
                label,
            });
        });
        if (items.length) {
            this.dropdownItems = [...items];
        }
    }
    onClientLogoLoaded() {
        if (this.imgRef.width > this.imgRef.height) {
            this.logoImageClass = "width-dom";
        }
        else {
            this.logoImageClass = "height-dom";
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
                    })),
                    h("div", { class: "hide-slot" },
                        h("slot", null)))));
        }
        //
        return (h("div", { class: "outer-container" },
            h("div", { class: "client-logo-container" },
                h("div", { class: "client-logo" },
                    h("img", { ref: el => this.imgRef = el, class: `
								client-logo-image
								${this.logoImageClass === "evaluate" ? "image-eval"
                            : this.logoImageClass === "width-dom" ? "image-width-dominant"
                                : this.logoImageClass === "height-dom" ? "image-height-dominant"
                                    : "image-default"}
							`, src: this.clientLogoSource, onLoad: this.onClientLogoLoaded.bind(this) })),
                userAccount),
            userAccountDropdown));
    }
    static get is() { return "tf-app-client-logo"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["client-logo.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["client-logo.css"]
    }; }
    static get properties() { return {
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
        }
    }; }
    static get states() { return {
        "isOpen": {},
        "logoImageClass": {},
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
    static get elementRef() { return "slotElement"; }
    static get watchers() { return [{
            "propName": "clientLogoSource",
            "methodName": "clientLogoSourcePropChanged"
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
