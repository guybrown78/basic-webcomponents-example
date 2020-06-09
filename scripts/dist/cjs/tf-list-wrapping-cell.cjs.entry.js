'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const ListWrappingCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.contentAlign = 'left';
    }
    render() {
        return (index.h("div", { class: this.order ? 'wrap' : '' }, index.h("slot", null)));
    }
};
ListWrappingCell.style = "div{\n\t\t\t@apply flex-shrink-0;\n\t\t}\n\t\t.wrap{\n\t\t\t@apply mt-4;\n\t\t}\n\t\t@screen sm {\n\t\t\tdiv{\n\t\t\t\t@apply mt-0;\n\t\t\t}\n\t\t}";

exports.tf_list_wrapping_cell = ListWrappingCell;
