import { Component, h, Prop, State, Listen, Element, Event } from '@stencil/core';
import { getColourClassname } from '../../utils/utils';
// import uniqid from 'uniqid';
export class Dropdown {
    constructor() {
        this.generatedId = String(Math.floor(Math.random() * 99999));
        this.isOpen = false;
        this.displayTitle = "";
        this.dropdownId = null;
        this.size = 'default';
        this.colour = 'grey';
        this.disabled = false;
        this.position = "right";
        this.parsedOptions = [];
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
    onHandleCloseDropdown() {
        this.isOpen = false;
    }
    onHandleOptionClicked(event) {
        if (this.isOpen && event.detail.parent === this.generatedId) {
            event.preventDefault();
            event.stopPropagation();
            const dropdownId = this.dropdownId;
            this.tfDropdownSelected.emit(Object.assign(Object.assign({}, event.detail), { dropdownId }));
            //
            this.isOpen = false;
        }
    }
    onToggle() {
        this.isOpen = !this.isOpen;
    }
    componentWillLoad() {
        // parse table header element
        const optionsEls = this.slotElement.getElementsByTagName('tf-dropdown-option');
        // 
        Array.from(optionsEls).forEach(opt => {
            const title = opt.innerHTML.replace(/<\!--.*?-->/g, "");
            this.parsedOptions.push({
                value: opt.getAttribute('value'),
                title,
            });
        });
    }
    render() {
        const pos = this.position.toLowerCase() === 'left' ? 'left' : 'right';
        let options = (h("slot", null));
        if (this.parsedOptions.length) {
            options = this.parsedOptions.map(opt => (h("tf-dropdown-rendered-option", { value: opt.value, "element-title": opt.title, colour: this.colour, parent: this.generatedId }, opt.title)));
        }
        return (h("div", { class: "dd-container" },
            h("tf-button-container", { id: this.dropdownId },
                h("tf-button", { size: 'm', icon: this.isOpen ? 'chevron-up' : 'chevron-down', "icon-position": "right", colour: this.colour, onClick: this.onToggle.bind(this) }, this.displayTitle)),
            h("div", { class: `
					dd-panel 
					${pos} 
					${this.isOpen ? 'show' : 'hide'}
				` },
                h("div", { class: `
						dd-panel-container 
						${getColourClassname(this.colour)}
					` },
                    h("div", { class: "dd-panel-bg" }, options)))));
    }
    static get is() { return "tf-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./dropdown.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["dropdown.css"]
    }; }
    static get properties() { return {
        "displayTitle": {
            "type": "string",
            "mutable": true,
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
            "attribute": "display-title",
            "reflect": true,
            "defaultValue": "\"\""
        },
        "dropdownId": {
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
            "attribute": "dropdown-id",
            "reflect": true,
            "defaultValue": "null"
        },
        "size": {
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
            "attribute": "size",
            "reflect": true,
            "defaultValue": "'default'"
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
        "disabled": {
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
            "attribute": "disabled",
            "reflect": true,
            "defaultValue": "false"
        },
        "position": {
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
            "attribute": "position",
            "reflect": true,
            "defaultValue": "\"right\""
        }
    }; }
    static get states() { return {
        "isOpen": {}
    }; }
    static get events() { return [{
            "method": "tfDropdownSelected",
            "name": "tfDropdownSelected",
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
    static get listeners() { return [{
            "name": "click",
            "method": "handleClick",
            "target": "window",
            "capture": true,
            "passive": false
        }, {
            "name": "tfCloseDropdown",
            "method": "onHandleCloseDropdown",
            "target": "body",
            "capture": false,
            "passive": false
        }, {
            "name": "tfDropdownOptionClicked",
            "method": "onHandleOptionClicked",
            "target": "body",
            "capture": false,
            "passive": false
        }]; }
}
