import { r as registerInstance, h } from './index-67a2bf30.js';
var buttonContainerCss = "#button-containing-span{display:-ms-inline-flexbox;display:inline-flex;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}";
var Button = /** @class */ (function () {
    function Button(hostRef) {
        registerInstance(this, hostRef);
        this.size = 'default'; //SizeEnums.default;
    }
    Button.prototype.render = function () {
        return (h("span", { id: "button-containing-span" }, h("slot", null)));
    };
    return Button;
}());
Button.style = buttonContainerCss;
export { Button as tf_button_container };
