'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');
const utils = require('./utils-087faf22.js');

const cardPanelCss = ".card-grid{margin-top:.25rem;margin-bottom:.25rem;display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:1.25rem;gap:1.25rem}";

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
        return (index.h("tf-card", { colour: this.colour, padding: this.padding }, index.h("div", { class: `
					 card-grid 
					 ${utils.getGridCountClassname(this.cardCount)}
					` }, index.h("slot", null))));
    }
    get slotElement() { return index.getElement(this); }
};
InfoPanel.style = cardPanelCss;

exports.tf_card_panel = InfoPanel;
