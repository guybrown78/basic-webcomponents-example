import { h } from "@stencil/core";
export class List {
    constructor() {
        this.showHint = false;
        this.showError = false;
        this.showLabel = true;
        this.showLeadingIcon = false;
        this.showTrailingIcon = false;
        this.showErrorIcon = false;
        //
        this.name = null;
        this.label = null;
        this.placeholder = '';
        this.inputRequired = false;
        this.inputAutoComplete = 'on';
        this.inputType = 'text';
        this.value = null;
        //
        this.inputHint = null;
        this.inputError = null;
        this.error = false;
        this.hideLabel = false;
        this.icon = null;
        this.iconPosition = null;
    }
    //
    errorChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.error = newValue;
            this.setError();
        }
    }
    async getValue() {
        try {
            return this.inputRef.value;
        }
        catch (e) {
            console.log('caught error', e);
            // Handle exceptions
        }
    }
    async getInputRef() {
        try {
            return this.inputRef;
        }
        catch (e) {
            console.log('caught error', e);
            // Handle exceptions
        }
    }
    componentWillLoad() {
        if (this.inputHint) {
            this.showHint = true;
        }
        this.setError();
        if (this.hideLabel) {
            this.showLabel = false;
        }
        if (this.icon && this.iconPosition) {
            if (this.iconPosition == 'left' || this.iconPosition == 'leading') {
                this.showLeadingIcon = true;
            }
            if (this.iconPosition == 'right' || this.iconPosition == 'trailing') {
                this.showTrailingIcon = true;
            }
        }
    }
    // componentDidLoad() {
    // 	//
    // }
    // onUserInput(event:Event) {
    // 	console.log("input")
    // 	event.preventDefault();
    // 	event.stopPropagation();
    // 	this.el.dispatchEvent(event);
    // }
    setError() {
        if (!this.inputError) {
            this.inputError = 'Error with the input field';
        }
        this.showErrorIcon = this.showError = this.error;
    }
    render() {
        let bottomText = null;
        if (this.showHint) {
            bottomText = h("p", { class: "hint" }, this.inputHint);
        }
        if (this.showError) {
            bottomText = h("p", { class: "error" }, this.inputError);
        }
        //
        let leadingSVG = null;
        let trailingSVG = null;
        let IconTag = null;
        //
        if (this.showLeadingIcon || this.showTrailingIcon) {
            IconTag = `tf-icon-${this.icon}`;
        }
        if (this.showLeadingIcon) {
            leadingSVG = (h("div", { class: "svg-container svg-leading" },
                h(IconTag, { class: "svg-icon" })));
        }
        //
        if (this.showTrailingIcon) {
            trailingSVG = (h("div", { class: "svg-container svg-trailing" },
                h(IconTag, { class: "svg-icon" })));
        }
        else if (this.showErrorIcon) {
            trailingSVG = (h("div", { class: "svg-container svg-trailing" },
                h("tf-icon-exclamation", { class: "svg-error-icon" })));
        }
        //
        return (h("div", { class: "label-input-container" },
            h("label", { class: `${this.showLabel ? 'form-label' : 'form-label-sr-only'}`, htmlFor: this.name }, this.label),
            h("div", { class: "input-container" },
                leadingSVG,
                h("input", { id: this.name, ref: el => this.inputRef = el, class: `
							form-input 
							form-input-styled 
							${this.showError ? 'form-input-error' : ''} 
							${this.showLeadingIcon ? 'form-input-leading-icon' : ''} 
							${this.showTrailingIcon || this.showErrorIcon ? 'form-input-trailing-icon' : ''}
						`, placeholder: this.placeholder, required: this.inputRequired, type: this.inputType, value: this.value, autoComplete: this.inputAutoComplete }),
                trailingSVG),
            bottomText));
    }
    static get is() { return "tf-input"; }
    static get originalStyleUrls() { return {
        "$": ["input.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["input.css"]
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
        "label": {
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
            "attribute": "label",
            "reflect": true,
            "defaultValue": "null"
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
        "inputRequired": {
            "type": "boolean",
            "mutable": true,
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
            "attribute": "input-required",
            "reflect": true,
            "defaultValue": "false"
        },
        "inputAutoComplete": {
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
            "attribute": "input-auto-complete",
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
        },
        "value": {
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
            "attribute": "value",
            "reflect": false,
            "defaultValue": "null"
        },
        "inputHint": {
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
            "attribute": "input-hint",
            "reflect": true,
            "defaultValue": "null"
        },
        "inputError": {
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
            "attribute": "input-error",
            "reflect": false,
            "defaultValue": "null"
        },
        "error": {
            "type": "boolean",
            "mutable": true,
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
            "attribute": "error",
            "reflect": true,
            "defaultValue": "false"
        },
        "hideLabel": {
            "type": "boolean",
            "mutable": true,
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
            "attribute": "hide-label",
            "reflect": true,
            "defaultValue": "false"
        },
        "icon": {
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
            "attribute": "icon",
            "reflect": true,
            "defaultValue": "null"
        },
        "iconPosition": {
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
            "attribute": "icon-position",
            "reflect": true,
            "defaultValue": "null"
        }
    }; }
    static get states() { return {
        "showHint": {},
        "showError": {},
        "showLabel": {},
        "showLeadingIcon": {},
        "showTrailingIcon": {},
        "showErrorIcon": {}
    }; }
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
        "getInputRef": {
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
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "error",
            "methodName": "errorChanged"
        }]; }
}
