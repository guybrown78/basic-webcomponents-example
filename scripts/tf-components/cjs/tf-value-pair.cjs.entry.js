'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const valuePairCss = ".value-pair{-ms-flex-direction:column;flex-direction:column}.dark{font-size:1.125rem;font-weight:500;color:#161e2e}.dark,.light{line-height:1.25rem}.light{font-size:.875rem;color:#6b7280}";

const ValuePair = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "value-pair" }, index.h("div", { class: 'dark' }, index.h("slot", { name: "dark" })), index.h("div", { class: 'light' }, index.h("slot", { name: "light" }))));
    }
};
ValuePair.style = valuePairCss;

exports.tf_value_pair = ValuePair;
