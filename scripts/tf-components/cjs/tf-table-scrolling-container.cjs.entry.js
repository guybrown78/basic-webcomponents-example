'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const tableScrollingContainerCss = ".div-1{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;overflow:hidden}.div-2{overflow:auto}.div-3{vertical-align:middle;display:inline-block;min-width:100%;overflow:hidden}";

const TableScrollingContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "div-1" }, index.h("div", { class: "div-2" }, index.h("div", { class: "div-3" }, index.h("slot", null)))));
    }
};
TableScrollingContainer.style = tableScrollingContainerCss;

exports.tf_table_scrolling_container = TableScrollingContainer;
