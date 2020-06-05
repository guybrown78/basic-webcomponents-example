'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const nodeHeaderCss = "#node-header{margin-bottom:.25rem;background-color:transparent;padding:.25rem .75rem;display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center}";

const NodeHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { id: "node-header" }, index.h("slot", null)));
    }
};
NodeHeader.style = nodeHeaderCss;

exports.tf_node_header = NodeHeader;
