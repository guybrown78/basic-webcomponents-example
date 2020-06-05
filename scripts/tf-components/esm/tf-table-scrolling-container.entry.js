import { r as registerInstance, h } from './index-67a2bf30.js';

const tableScrollingContainerCss = ".div-1{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;overflow:hidden}.div-2{overflow:auto}.div-3{vertical-align:middle;display:inline-block;min-width:100%;overflow:hidden}";

const TableScrollingContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "div-1" }, h("div", { class: "div-2" }, h("div", { class: "div-3" }, h("slot", null)))));
    }
};
TableScrollingContainer.style = tableScrollingContainerCss;

export { TableScrollingContainer as tf_table_scrolling_container };
