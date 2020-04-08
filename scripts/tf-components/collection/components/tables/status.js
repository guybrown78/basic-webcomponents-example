import { h } from "@stencil/core";
export class Status {
    constructor() {
        this.trafficLightColour = 'none';
    }
    render() {
        return (h("span", { class: `colour-${this.trafficLightColour}` },
            h("slot", null)));
    }
    static get is() { return "tf-status"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["status.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["status.css"]
    }; }
    static get properties() { return {
        "trafficLightColour": {
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
            "attribute": "traffic-light-colour",
            "reflect": true,
            "defaultValue": "'none'"
        }
    }; }
}
