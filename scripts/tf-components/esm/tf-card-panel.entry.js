import { r as registerInstance, h, g as getElement } from './index-67a2bf30.js';
import { d as getGridCountClassname } from './utils-f127cc8f.js';

const cardPanelCss = ".card-grid{margin-top:.25rem;margin-bottom:.25rem;display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:1.25rem;gap:1.25rem}";

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
