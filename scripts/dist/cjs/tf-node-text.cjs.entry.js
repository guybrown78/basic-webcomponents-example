'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const NodeText = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.justify = "flex-start";
    }
    render() {
        const styles = {
            justifyContent: this.justify,
        };
        return (index.h("span", { id: "node-text-span", style: styles }, index.h("slot", null)));
    }
};
NodeText.style = "#node-text-span{\n\t\t\tmargin:0;\n\t\t\tpadding:0;\n\t\t\tfont-family: 'Roboto Condensed', sans-serif;\n\t\t\tfont-size: 15px;\n\t\t\tline-height: 20px;\n\t\t\tdisplay:flex;\n\t\t\tflex:1;\n\t\t}";

exports.tf_node_text = NodeText;
