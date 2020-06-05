import { r as registerInstance, h, g as getElement } from './index-67a2bf30.js';

const statsPanelCss = ".stats-grid{margin-top:.25rem;margin-bottom:.25rem;display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:1.25rem;gap:1.25rem}";

const StatsPanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cardCount = 3;
        this.maxCardCount = 6;
    }
    componentWillLoad() {
        this.cardCount = this.slotElement.children.length > this.maxCardCount ? this.maxCardCount : this.slotElement.children.length;
    }
    render() {
        return (h("tf-card", { colour: "navy" }, h("div", { class: `stats-grid grid-${this.cardCount}` }, h("slot", null))));
    }
    get slotElement() { return getElement(this); }
};
StatsPanel.style = statsPanelCss;

export { StatsPanel as tf_stats_panel };
