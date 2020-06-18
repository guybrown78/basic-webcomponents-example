import { r as registerInstance, h } from './index-67a2bf30.js';
var nodeFlexCss = "#node-container,.node-container{margin-bottom:.5rem;background-color:#fff;border-radius:.25rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);padding:.25rem .75rem}#base-node,#node-container,.base-node,.node-container{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center}#fxl,.fxl{display:-ms-flexbox;display:flex;margin-right:1rem}#flex,.flex{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%}#fxr,.fxr{display:-ms-flexbox;display:flex;margin-left:1rem}";
var Node = /** @class */ (function () {
    function Node(hostRef) {
        registerInstance(this, hostRef);
        this.rWidth = null;
        this.lWidth = null;
    }
    Node.prototype.render = function () {
        var stylesR = {};
        if (this.rWidth) {
            stylesR['width'] = this.rWidth;
        }
        var stylesL = {};
        if (this.lWidth) {
            stylesL['width'] = this.lWidth;
        }
        return (h("div", { id: "base-node", class: "base-node" }, h("div", { id: "fxl", class: "fxl", style: stylesL }, h("slot", { name: "fxl" })), h("div", { id: "flex", class: "flex" }, h("slot", { name: "flex" })), h("div", { id: "fxr", class: "fxr", style: stylesR }, h("slot", { name: "fxr" }))));
    };
    return Node;
}());
Node.style = nodeFlexCss;
export { Node as tf_node_fxl_flex_fxr };
