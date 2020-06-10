'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const leadingIconLabelCss = ".container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:.875rem;line-height:1.25rem;color:#6b7280}.icon-container{margin-right:.5rem;height:1.25rem;width:1.25rem}";

const ListWrappingCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.contentAlign = 'left';
    }
    render() {
        return (index.h("div", { class: "container" }, index.h("div", { class: "icon-container" }, index.h("slot", { name: "icon" })), index.h("span", null, index.h("slot", null))));
    }
};
ListWrappingCell.style = leadingIconLabelCss;

exports.tf_leading_icon_label = ListWrappingCell;
