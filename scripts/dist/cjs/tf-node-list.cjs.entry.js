'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const nodeListCss = "ul{margin:0;padding:0;list-style-type:none}";

const NodeList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("ul", { id: "node-list" }, index.h("slot", null)));
    }
};
NodeList.style = nodeListCss;

exports.tf_node_list = NodeList;
