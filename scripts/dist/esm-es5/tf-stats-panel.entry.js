import { r as registerInstance, h, g as getElement } from './index-67a2bf30.js';
var statsPanelCss = ".stats-grid{margin-top:.25rem;margin-bottom:.25rem;display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:1.25rem;gap:1.25rem}";
var StatsPanel = /** @class */ (function () {
    function StatsPanel(hostRef) {
        registerInstance(this, hostRef);
        this.cardCount = 3;
        this.maxCardCount = 6;
    }
    StatsPanel.prototype.componentWillLoad = function () {
        this.cardCount = this.slotElement.children.length > this.maxCardCount ? this.maxCardCount : this.slotElement.children.length;
    };
    StatsPanel.prototype.render = function () {
        return (h("tf-card", { colour: "navy" }, h("div", { class: "stats-grid grid-" + this.cardCount }, h("slot", null))));
    };
    Object.defineProperty(StatsPanel.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return StatsPanel;
}());
StatsPanel.style = statsPanelCss;
export { StatsPanel as tf_stats_panel };
