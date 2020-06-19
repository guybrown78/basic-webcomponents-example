import { Component, h, Prop } from '@stencil/core';
export class StatDataCard {
    constructor() {
        this.colour = 'default';
    }
    render() {
        const colour = this.colour;
        return (h("div", { class: "stat-card-container" },
            h("div", { class: `
							stat-header
							${colour === "red" ? "colour-red"
                    : colour === "orange" || colour === "amber" ? "colour-amber"
                        : colour === "green" ? "colour-green"
                            : colour === "blue" ? "colour-blue"
                                : "colour-default"}
						` },
                h("div", { class: "stat-header-title" },
                    h("slot", { name: "title" }))),
            h("div", { class: "stat-data" },
                h("div", { class: `
								stat-data-content
								${colour === "red" ? "colour-red"
                        : colour === "orange" || colour === "amber" ? "colour-amber"
                            : colour === "green" ? "colour-green"
                                : colour === "blue" ? "colour-blue"
                                    : "colour-default"}
							` },
                    h("slot", { name: "data" })))));
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
