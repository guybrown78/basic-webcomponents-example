import { r as registerInstance, h } from './core-4955d2b1.js';
var MenuBar = /** @class */ (function () {
    function MenuBar(hostRef) {
        registerInstance(this, hostRef);
    }
    MenuBar.prototype.render = function () {
        return (h("section", null, h("div", { id: "lozenge-container" }, h("slot", null))));
    };
    Object.defineProperty(MenuBar, "style", {
        get: function () { return "section{padding:0 1.375rem;margin-bottom:1.375rem}#lozenge-container{height:3.75rem;background-color:#fff;width:100%;border-radius:1.875rem;-webkit-box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16)}"; },
        enumerable: true,
        configurable: true
    });
    return MenuBar;
}());
export { MenuBar as tf_menu_bar };
