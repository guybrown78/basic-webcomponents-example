'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const nodeFlexCss = "#node-container,.node-container{margin-bottom:.5rem;background-color:#fff;border-radius:.25rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);padding:.25rem .75rem}#base-node,#node-container,.base-node,.node-container{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center}#fxl,.fxl{display:-ms-flexbox;display:flex;margin-right:1rem}#flex,.flex{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%}#fxr,.fxr{display:-ms-flexbox;display:flex;margin-left:1rem}";

const Node = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { id: "base-node", class: "base-node" }, index.h("div", { id: "flex", class: "flex" }, index.h("slot", { name: "flex" }))));
    }
};
Node.style = nodeFlexCss;

exports.tf_node_flex = Node;
