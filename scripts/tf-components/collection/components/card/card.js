import { h } from "@stencil/core";
export class Card {
    constructor() {
        this.colour = 'default';
    }
    render() {
        return (h("section", { class: this.colour },
            h("slot", null)));
    }
    static get is() { return "tf-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["card.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["card.css"]
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
        }
    }; }
}
