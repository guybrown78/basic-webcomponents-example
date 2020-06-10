import { r as registerInstance, h } from './index-67a2bf30.js';
var tableScrollingContainerCss = ".div-1{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;overflow:hidden}.div-2{overflow:auto}.div-3{vertical-align:middle;display:inline-block;min-width:100%;overflow:hidden}";
var TableScrollingContainer = /** @class */ (function () {
    function TableScrollingContainer(hostRef) {
        registerInstance(this, hostRef);
    }
    TableScrollingContainer.prototype.render = function () {
        return (h("div", { class: "div-1" }, h("div", { class: "div-2" }, h("div", { class: "div-3" }, h("slot", null)))));
    };
    return TableScrollingContainer;
}());
TableScrollingContainer.style = tableScrollingContainerCss;
export { TableScrollingContainer as tf_table_scrolling_container };
