import { r as registerInstance, h } from './index-67a2bf30.js';

const leadingIconLabelCss = ".container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:.875rem;line-height:1.25rem;color:#6b7280}.icon-container{margin-right:.5rem;height:1.25rem;width:1.25rem}";

const ListWrappingCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.contentAlign = 'left';
    }
    render() {
        return (h("div", { class: "container" }, h("div", { class: "icon-container" }, h("slot", { name: "icon" })), h("span", null, h("slot", null))));
    }
};
ListWrappingCell.style = leadingIconLabelCss;

export { ListWrappingCell as tf_leading_icon_label };
