import { r as registerInstance, h, g as getElement } from './index-67a2bf30.js';
import { c as getGridCountClassname } from './utils-b80ebc56.js';

const cardPanelCss = ".card-grid{margin-top:.25rem;margin-bottom:.25rem;display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:1.25rem;gap:1.25rem}@media (min-width:640px){.card-grid.grid-1{grid-template-columns:repeat(1,minmax(0,1fr))}.card-grid.grid-2{grid-template-columns:repeat(2,minmax(0,1fr))}.card-grid.grid-3{grid-template-columns:repeat(3,minmax(0,1fr))}.card-grid.grid-4{grid-template-columns:repeat(4,minmax(0,1fr))}.card-grid.grid-5{grid-template-columns:repeat(5,minmax(0,1fr))}.card-grid.grid-6{grid-template-columns:repeat(6,minmax(0,1fr))}}";

const InfoPanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("tf-card", { colour: this.colour, padding: this.padding }, h("div", { class: `
					 card-grid 
					 ${getGridCountClassname(this.cardCount)}
					` }, h("slot", null))));
    }
    get slotElement() { return getElement(this); }
};
InfoPanel.style = cardPanelCss;

export { InfoPanel as tf_card_panel };
