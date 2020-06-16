import { Component, h, Prop, State, Method, Element, Event, Listen } from '@stencil/core';
export class List {
    constructor() {
        //
        this.isFocused = false;
        //
        this.name = null;
        this.placeholder = '';
        this.autoComplete = 'on';
        this.inputType = 'text';
        this.observer = null;
    }
    async getValue() {
        try {
            return this.itemRef.value;
        }
        catch (e) {
            throw `Can't find itemRef.value for ${this.name} tf-input. More details: ${e}`;
        }
    }
    async getItemRef() {
        try {
            return this.itemRef;
        }
        catch (e) {
            throw `Can't find itemRef for ${this.name} tf-input. More details: ${e}`;
        }
    }
    onHandleOptionClicked(event) {
        console.log("...", event.detail.value);
        this.value = event.detail.value;
        this.emitSearchValue();
        // if(this.isOpen && event.detail.parent === this.generatedId){
        // 	event.preventDefault();
        // 	event.stopPropagation();
        // 	const dropdownId = this.dropdownId;
        // 	this.tfDropdownSelected.emit({
        // 		...event.detail,
        // 		dropdownId,
        // 	});
        // 	//
        // 	this.isOpen = false;
        // }
    }
    async onUserInput(event) {
        this.value = await this.getValue();
        this.tfOnInput.emit({
            id: this.name,
            value: this.value,
            proxyEvent: Object.assign({}, event)
        });
    }
    onInputFocus() {
        this.isFocused = true;
    }
    onInputBlur() {
        this.isFocused = false;
    }
    onKeyPress(event) {
        if (!event)
            return null;
        const keyCode = event.keyCode || event.which;
        if (keyCode === 13) {
            // Enter pressed
            this.emitSearchValue();
        }
    }
    emitSearchValue() {
        console.log(this.name, this.value);
        this.tfOnSearch.emit({
            id: this.name,
            value: this.value,
        });
    }
    componentWillLoad() {
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
                that.updatedChildItems();
            }
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
    updatedChildItems() {
        const optionsEls = this.slotElement.getElementsByTagName('tf-dropdown-option');
        let items = [];
        Array.from(optionsEls).forEach(opt => {
            const label = opt.innerHTML.replace(/<\!--.*?-->/g, "");
            items.push({
                value: opt.getAttribute('value'),
                label,
            });
        });
    }
    render() {
        //
        return (h("div", { class: "label-input-container" },
            h("div", { class: "search-container input-container" },
                h("div", { class: "svg-container svg-leading" },
                    h("tf-icon-search", { class: `
							svg-icon
							${this.isFocused ? "is-focused" : ""}
						` })),
                h("input", { id: this.name, 
                    // ref={el => this.itemRef = el}
                    ref: el => this.itemRef = el, class: `
							form-input 
							form-input-styled 
							form-input-leading-icon
						`, placeholder: this.placeholder, type: this.inputType, value: this.value, autoComplete: "off", onInput: this.onUserInput.bind(this), onFocus: this.onInputFocus.bind(this), onBlur: this.onInputBlur.bind(this), onKeyPress: this.onKeyPress.bind(this) })),
            h("div", { class: "search-results-panel" },
                h("slot", null))));
    }
    static get is() { return "tf-search"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["search.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["search.css"]
    }; }
    static get properties() { return {
        "name": {
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
            "attribute": "name",
            "reflect": true,
            "defaultValue": "null"
        },
        "value": {
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
            "attribute": "value",
            "reflect": false
        },
        "placeholder": {
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
            "attribute": "placeholder",
            "reflect": true,
            "defaultValue": "''"
        },
        "autoComplete": {
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
            "attribute": "auto-complete",
            "reflect": true,
            "defaultValue": "'on'"
        },
        "inputType": {
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
            "attribute": "input-type",
            "reflect": true,
            "defaultValue": "'text'"
        }
    }; }
    static get states() { return {
        "isFocused": {}
    }; }
    static get events() { return [{
            "method": "tfOnInput",
            "name": "tfOnInput",
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
            "method": "tfOnSearch",
            "name": "tfOnSearch",
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
    static get methods() { return {
        "getValue": {
            "complexType": {
                "signature": "() => Promise<string>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<string>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "getItemRef": {
            "complexType": {
                "signature": "() => Promise<HTMLInputElement>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLInputElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<HTMLInputElement>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "slotElement"; }
    static get listeners() { return [{
            "name": "tfDropdownOptionClicked",
            "method": "onHandleOptionClicked",
            "target": "body",
            "capture": false,
            "passive": false
        }]; }
}
