'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const cardPanelCss = ".card-grid{margin-top:0.25rem;margin-bottom:0.25rem;display:grid;grid-template-columns:repeat(1, minmax(0, 1fr));grid-gap:1.25rem;gap:1.25rem}@media (min-width: 640px){.card-grid.grid-1{grid-template-columns:repeat(1, minmax(0, 1fr))}.card-grid.grid-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.card-grid.grid-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.card-grid.grid-4{grid-template-columns:repeat(4, minmax(0, 1fr))}.card-grid.grid-5{grid-template-columns:repeat(5, minmax(0, 1fr))}.card-grid.grid-6{grid-template-columns:repeat(6, minmax(0, 1fr))}}";

const InfoPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("tf-card", { colour: this.colour, padding: this.padding }, index.h("div", { class: `card-grid grid-${this.cardCount}` }, index.h("slot", null))));
    }
    get slotElement() { return index.getElement(this); }
};
InfoPanel.style = cardPanelCss;

exports.tf_card_panel = InfoPanel;
