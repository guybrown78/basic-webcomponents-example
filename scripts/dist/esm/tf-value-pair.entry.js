import { r as registerInstance, h } from './index-67a2bf30.js';

const valuePairCss = ".value-pair{-ms-flex-direction:column;flex-direction:column}.dark{font-size:1.125rem;font-weight:500;color:#161e2e}.dark,.light{line-height:1.25rem}.light{font-size:.875rem;color:#6b7280}";

const ValuePair = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "value-pair" }, h("div", { class: 'dark' }, h("slot", { name: "dark" })), h("div", { class: 'light' }, h("slot", { name: "light" }))));
    }
};
ValuePair.style = valuePairCss;

export { ValuePair as tf_value_pair };
