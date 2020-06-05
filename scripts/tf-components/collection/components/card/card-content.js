import { Component, h } from '@stencil/core';
export class Node {
    render() {
        return (h("div", { id: "card-content-container" },
            h("slot", null)));
    }
    static get is() { return "tf-card-content"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["card.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["card.css"]
    }; }
}
