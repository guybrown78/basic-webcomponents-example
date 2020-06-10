import { r as registerInstance, h } from './index-67a2bf30.js';
var ParaTag = /** @class */ (function () {
    function ParaTag(hostRef) {
        registerInstance(this, hostRef);
        this.url = null;
        this.tagTitle = null;
        this.textAlign = "left";
    }
    ParaTag.prototype.render = function () {
        var styles = {
            textAlign: this.textAlign,
        };
        return (h("p", { style: styles }, h("slot", null)));
    };
    return ParaTag;
}());
ParaTag.style = "p{\n\t\t\tmargin-block-start: 10px;\n    \tmargin-block-end: 10px;\n    \tmargin-inline-start: 0px;\n\t\t\tmargin-inline-end: 0px;\n\t\t\tmargin-left:0;\n\t\t\tmargin-right\t:0;\n\t\t\tfont-family: 'Roboto Condensed', sans-serif;\n\t\t\tfont-size: 15px;\n\t\t\tline-height: 20px;\n\t\t\tdisplay:block;\n\t\t}";
export { ParaTag as tf_p_tag };
