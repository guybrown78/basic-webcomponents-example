import { r as registerInstance, h } from './index-67a2bf30.js';

const nodeListCss = "ul{margin:0;padding:0;list-style-type:none}";

const NodeList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("ul", { id: "node-list" }, h("slot", null)));
    }
};
NodeList.style = nodeListCss;

export { NodeList as tf_node_list };
