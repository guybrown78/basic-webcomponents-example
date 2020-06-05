import { r as registerInstance, h } from './index-67a2bf30.js';
var nodeListCss = "ul{margin:0;padding:0;list-style-type:none}";
var NodeList = /** @class */ (function () {
    function NodeList(hostRef) {
        registerInstance(this, hostRef);
    }
    NodeList.prototype.render = function () {
        return (h("ul", { id: "node-list" }, h("slot", null)));
    };
    return NodeList;
}());
NodeList.style = nodeListCss;
export { NodeList as tf_node_list };
