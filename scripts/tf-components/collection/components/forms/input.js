import { h } from "@stencil/core";
export class List {
    constructor() {
        this.showHint = false;
        this.showError = false;
        //
        this.name = null;
        this.label = null;
        this.placeholder = '';
        this.inputHint = null;
        this.inputError = null;
        this.error = false;
    }
    componentWillLoad() {
        console.log(this.inputHint);
        if (this.inputHint) {
            this.showHint = true;
        }
        if (this.inputError) {
            if (!this.error) {
                this.error = true;
            }
            this.showError = true;
        }
    }
    render() {
        let bottomText = null;
        if (this.showHint) {
            bottomText = h("p", { class: "hint" }, this.inputHint);
        }
        if (this.showError) {
            bottomText = h("p", { class: "error" }, this.inputError);
        }
        return (h("div", { class: "label-input-container" },
            h("label", { htmlFor: this.name }, this.label),
            h("div", { class: "input-container" },
                h("input", { id: this.name, class: `
							form-input 
							form-input-styled 
							${this.showError ? 'form-input-error' : ''} 
							another-style
						`, placeholder: this.placeholder })),
            bottomText));
    }
    static get is() { return "tf-input"; }
    static get encapsulation() { return "shadow"; }
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
            "attribute": "placeholder",
            "reflect": true,
            "defaultValue": "''"
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
            "reflect": true,
            "defaultValue": "null"
        },
        "error": {
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
            "attribute": "error",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "showHint": {},
        "showError": {}
    }; }
}
