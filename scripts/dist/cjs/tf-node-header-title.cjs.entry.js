'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const NodeHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.justify = "flex-start";
    }
    render() {
        const styles = {
            justifyContent: this.justify,
        };
        return (index.h("span", { style: styles }, index.h("slot", null)));
    }
};
NodeHeader.style = "span{\n\t\t\tmargin-block-start: 2px;\n\t\t\tmargin-block-end: 2px;\n\t\t\tmargin-inline-start: 0px;\n\t\t\tmargin-inline-end: 0px;\n\t\t\tmargin-left:0;\n\t\t\tmargin-right\t:0;\n\t\t\tfont-family: 'Roboto Condensed', sans-serif;\n\t\t\tfont-size: 11px;\n\t\t\tline-height: 14px;\n\t\t\ttext-transform:uppercase;\n\t\t\tdisplay:flex;\n\t\t\tflex:1;\n\t\t\toverflow-x:hidden;\n\t\t}";

exports.tf_node_header_title = NodeHeader;
