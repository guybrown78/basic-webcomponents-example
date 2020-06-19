import { r as registerInstance, h, g as getElement } from './index-67a2bf30.js';
import { c as getGridCountClassname } from './utils-b80ebc56.js';
var cardPanelCss = ".card-grid{margin-top:.25rem;margin-bottom:.25rem;display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:1.25rem;gap:1.25rem}@media (min-width:640px){.card-grid.grid-1{grid-template-columns:repeat(1,minmax(0,1fr))}.card-grid.grid-2{grid-template-columns:repeat(2,minmax(0,1fr))}.card-grid.grid-3{grid-template-columns:repeat(3,minmax(0,1fr))}.card-grid.grid-4{grid-template-columns:repeat(4,minmax(0,1fr))}.card-grid.grid-5{grid-template-columns:repeat(5,minmax(0,1fr))}.card-grid.grid-6{grid-template-columns:repeat(6,minmax(0,1fr))}}";
var InfoPanel = /** @class */ (function () {
    function InfoPanel(hostRef) {
        registerInstance(this, hostRef);
        this.cardCount = 3;
        //
        this.colour = 'default';
        this.padding = 'default';
        this.shouldWrap = false;
        this.maxCardCount = 6;
    }
    InfoPanel.prototype.componentWillLoad = function () {
        this.cardCount = this.slotElement.children.length > this.maxCardCount ? this.maxCardCount : this.slotElement.children.length;
    };
    InfoPanel.prototype.render = function () {
        return (h("tf-card", { colour: this.colour, padding: this.padding }, h("div", { class: "\n\t\t\t\t\t card-grid \n\t\t\t\t\t " + getGridCountClassname(this.cardCount) + "\n\t\t\t\t\t" }, h("slot", null))));
    };
    Object.defineProperty(InfoPanel.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return InfoPanel;
}());
InfoPanel.style = cardPanelCss;
export { InfoPanel as tf_card_panel };
