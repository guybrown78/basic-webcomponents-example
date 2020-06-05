import { r as registerInstance, h } from './index-67a2bf30.js';
var nodeCss = "#node-container{margin-bottom:.5rem;background-color:#fff;border-radius:.25rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);padding:.25rem .75rem}#base-node,#node-container{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center}#fxl{margin-right:1rem}#flex,#fxl{display:-ms-flexbox;display:flex}#flex{-ms-flex:1 1 0%;flex:1 1 0%}#fxr{display:-ms-flexbox;display:flex;margin-left:1rem}";
var Node = /** @class */ (function () {
    function Node(hostRef) {
        registerInstance(this, hostRef);
        this.lWidth = null;
    }
    Node.prototype.render = function () {
        var stylesL = {};
        if (this.lWidth) {
            stylesL['width'] = this.lWidth;
        }
        return (h("div", { id: "base-node" }, h("div", { id: "fxl", style: stylesL }, h("slot", { name: "fxl" })), h("div", { id: "flex" }, h("slot", { name: "flex" }))));
    };
    return Node;
}());
Node.style = nodeCss;
export { Node as tf_node_fxl_flex };
