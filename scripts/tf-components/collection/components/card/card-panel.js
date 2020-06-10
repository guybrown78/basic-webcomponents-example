import { Component, h, State, Element, Prop } from '@stencil/core';
import { getGridCountClassname } from '../../utils/utils';
export class InfoPanel {
    constructor() {
        this.cardCount = 3;
        //
        this.colour = 'default';
        this.padding = 'default';
        this.shouldWrap = false;
        this.maxCardCount = 6;
    }
    componentWillLoad() {
        this.cardCount = this.slotElement.children.length > this.maxCardCount ? this.maxCardCount : this.slotElement.children.length;
    }
    render() {
        return (h("tf-card", { colour: this.colour, padding: this.padding },
            h("div", { class: `
					 card-grid 
					 ${getGridCountClassname(this.cardCount)}
					` },
                h("slot", null))));
    }
    static get is() { return "tf-card-panel"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["card-panel.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["card-panel.css"]
    }; }
    static get properties() { return {
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
        "padding": {
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
            "attribute": "padding",
            "reflect": true,
            "defaultValue": "'default'"
        },
        "shouldWrap": {
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
            "attribute": "should-wrap",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "cardCount": {}
    }; }
    static get elementRef() { return "slotElement"; }
}
