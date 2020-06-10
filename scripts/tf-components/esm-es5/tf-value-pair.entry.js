import { r as registerInstance, h } from './index-67a2bf30.js';
var valuePairCss = ".value-pair{-ms-flex-direction:column;flex-direction:column}.dark{font-size:1.125rem;font-weight:500;color:#161e2e}.dark,.light{line-height:1.25rem}.light{font-size:.875rem;color:#6b7280}";
var ValuePair = /** @class */ (function () {
    function ValuePair(hostRef) {
        registerInstance(this, hostRef);
    }
    ValuePair.prototype.render = function () {
        return (h("div", { class: "value-pair" }, h("div", { class: 'dark' }, h("slot", { name: "dark" })), h("div", { class: 'light' }, h("slot", { name: "light" }))));
    };
    return ValuePair;
}());
ValuePair.style = valuePairCss;
export { ValuePair as tf_value_pair };
