import { Component, h, State, Element } from '@stencil/core';
export class StatsPanel {
    constructor() {
        this.cardCount = 3;
        this.maxCardCount = 6;
    }
    componentWillLoad() {
        this.cardCount = this.slotElement.children.length > this.maxCardCount ? this.maxCardCount : this.slotElement.children.length;
    }
    render() {
        return (h("tf-card", { colour: "navy" },
            h("div", { class: `stats-grid grid-${this.cardCount}` },
                h("slot", null))));
    }
    static get is() { return "tf-stats-panel"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["stats-panel.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["stats-panel.css"]
    }; }
    static get states() { return {
        "cardCount": {}
    }; }
    static get elementRef() { return "slotElement"; }
}
