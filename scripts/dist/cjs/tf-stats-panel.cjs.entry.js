'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const statsPanelCss = ".stats-grid{margin-top:.25rem;margin-bottom:.25rem;display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:1.25rem;gap:1.25rem}";

const StatsPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.cardCount = 3;
        this.maxCardCount = 6;
    }
    componentWillLoad() {
        this.cardCount = this.slotElement.children.length > this.maxCardCount ? this.maxCardCount : this.slotElement.children.length;
    }
    render() {
        return (index.h("tf-card", { colour: "navy" }, index.h("div", { class: `stats-grid grid-${this.cardCount}` }, index.h("slot", null))));
    }
    get slotElement() { return index.getElement(this); }
};
StatsPanel.style = statsPanelCss;

exports.tf_stats_panel = StatsPanel;
