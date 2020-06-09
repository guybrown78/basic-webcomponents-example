import { r as registerInstance, h } from './index-67a2bf30.js';

const ListWrappingCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.contentAlign = 'left';
    }
    render() {
        return (h("div", { class: this.order ? 'wrap' : '' }, h("slot", null)));
    }
};
ListWrappingCell.style = "div{\n\t\t\t@apply flex-shrink-0;\n\t\t}\n\t\t.wrap{\n\t\t\t@apply mt-4;\n\t\t}\n\t\t@screen sm {\n\t\t\tdiv{\n\t\t\t\t@apply mt-0;\n\t\t\t}\n\t\t}";

export { ListWrappingCell as tf_list_wrapping_cell };
