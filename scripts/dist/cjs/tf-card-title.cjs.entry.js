'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const cardTitleCss = "h2{-webkit-margin-before:20px;margin-block-start:20px;-webkit-margin-after:15px;margin-block-end:15px;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;margin-left:0;margin-right:0;font-family:Roboto Condensed,sans-serif;font-size:22px;line-height:22px;font-weight:700;display:block}h2.blue,h2.default{color:#224595}h2.white{color:#fff}";

const CardTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.colour = "blue";
    }
    render() {
        return (index.h("h2", { class: this.colour }, index.h("slot", null)));
    }
};
CardTitle.style = cardTitleCss;

exports.tf_card_title = CardTitle;
