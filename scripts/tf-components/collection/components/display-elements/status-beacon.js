import { Component, h, Prop } from '@stencil/core';
export class Status {
    constructor() {
        this.trafficLightColour = 'none';
    }
    render() {
        const colour = this.trafficLightColour;
        return (h("div", { class: `
				beacon 
				${colour === "red" ? "colour-red"
                : colour === "orange" || colour === "amber" ? "colour-amber"
                    : colour === "green" ? "colour-green"
                        : colour === "grey" || colour === "none" ? "colour-none"
                            : "colour-default"}
			` }));
    }
    static get is() { return "tf-status-beacon"; }
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
