import { Component, h, Prop } from '@stencil/core';
export class StatDataCard {
    constructor() {
        this.colour = 'default';
    }
    render() {
        return (h("div", { class: "stat-card-container" },
            h("div", { class: "stat-card" },
                h("dl", null,
                    h("dt", { class: `colour-${this.colour}` },
                        h("slot", { name: "title" })),
                    h("dd", { class: `colour-${this.colour}` },
                        h("slot", { name: "data" }))))));
    }
    static get is() { return "tf-stat-data-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["stat-data-card.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["stat-data-card.css"]
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
