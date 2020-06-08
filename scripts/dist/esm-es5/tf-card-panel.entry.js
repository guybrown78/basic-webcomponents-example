import { r as registerInstance, h, g as getElement } from './index-67a2bf30.js';
import { f as getGridCountClassname } from './utils-1247f068.js';
var cardPanelCss = ".card-grid{margin-top:.25rem;margin-bottom:.25rem;display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:1.25rem;gap:1.25rem}";
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
