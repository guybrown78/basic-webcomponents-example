import { r as registerInstance, h } from './index-67a2bf30.js';
var listCss = ".list-container{overflow:hidden}ul{list-style-type:none;margin:0;padding:0}@media (min-width:640px){.list-container{border-radius:.25rem}}";
var List = /** @class */ (function () {
    function List(hostRef) {
        registerInstance(this, hostRef);
    }
    List.prototype.render = function () {
        return (h("div", { class: "list-container" }, h("ul", null, h("slot", null))));
    };
    return List;
}());
List.style = listCss;
export { List as tf_list };
