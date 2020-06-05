import { r as registerInstance, h } from './index-67a2bf30.js';

const statDataCardCss = ".stat-card-container{background-color:#fff;overflow:hidden;-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);border-radius:.5rem}dl{-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;text-align:center}dt{padding:.5rem .25rem;font-size:.875rem;color:#25223a;line-height:1.25rem;font-weight:500;background-color:#d0dfe3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}dt.colour-blue,dt.colour-default{color:#fff;background-color:#224595}dd{-webkit-margin-start:0;margin-inline-start:0;padding:1.25rem .25rem;margin-top:.25rem;font-size:1.875rem;color:#25223a;line-height:2.25rem;font-weight:600}dd.colour-blue,dd.colour-default{color:#224595}@media (min-width:640px){.stats-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}";

const StatDataCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.colour = 'default';
    }
    render() {
        return (h("div", { class: "stat-card-container" }, h("div", { class: "stat-card" }, h("dl", null, h("dt", { class: `colour-${this.colour}` }, h("slot", { name: "title" })), h("dd", { class: `colour-${this.colour}` }, h("slot", { name: "data" }))))));
    }
};
StatDataCard.style = statDataCardCss;

export { StatDataCard as tf_stat_data_card };
