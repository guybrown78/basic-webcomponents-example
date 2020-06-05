import { Component, h, Prop } from '@stencil/core';
// const enum SizeEnums {
//   xs = 'extra-small',
// 	s = 'small',
// 	m = 'medium',
// 	l = 'large',
// 	xl = 'extra-large',
// 	default = 'default'
// };
// const enum ColourEnums {
//   blue = 'blue',
// 	darkBlue = 'dark-blue',
// 	aqua = 'aqua',
// 	grey = 'grey',
// 	default = 'default'
// }
// const enum PositionEnums {
//   left = 'left',
// 	right = 'right',
// 	default = 'default'
// }
export class Button {
    constructor() {
        this.size = 'default'; //SizeEnums.default;
        this.colour = 'default'; //ColourEnums.default;
        this.icon = null;
        this.iconPosition = 'default'; //PositionEnums.default;
        this.buttonId = null;
        this.buttonType = 'button'; //PositionEnums.default;
        this.disabled = false;
    }
    render() {
        let icon = null;
        if (this.icon) {
            const IconTag = `tf-icon-${this.icon}`;
            icon = h(IconTag, { class: `icon-${this.size}-${this.iconPosition === 'right' ? 'r' : 'l'}` });
        }
        return (h("span", { id: "button-containing-span" },
            h("button", { class: `tw-btn size-${this.size} colour-${this.colour} ${this.disabled ? 'disabled' : ''}`, type: this.buttonType, id: this.buttonId, disabled: this.disabled },
                (icon && (this.iconPosition == 'left' || this.iconPosition == 'default')) &&
                    icon,
                h("slot", null),
                (icon && this.iconPosition == 'right') &&
                    icon)));
    }
    static get is() { return "tf-button"; }
    static get originalStyleUrls() { return {
        "$": ["./button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["button.css"]
    }; }
    static get properties() { return {
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
            "defaultValue": "'default'"
        },
        "icon": {
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
            "defaultValue": "'default'"
        },
        "buttonId": {
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
            "attribute": "button-id",
            "reflect": true,
            "defaultValue": "null"
        },
        "buttonType": {
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
            "attribute": "button-type",
            "reflect": true,
            "defaultValue": "'button'"
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
        }
    }; }
}
