import { r as registerInstance, h } from './index-67a2bf30.js';

const nodeHeaderCss = "#node-header{margin-bottom:.25rem;background-color:transparent;padding:.25rem .75rem;display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center}";

const NodeHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { id: "node-header" }, h("slot", null)));
    }
};
NodeHeader.style = nodeHeaderCss;

export { NodeHeader as tf_node_header };
