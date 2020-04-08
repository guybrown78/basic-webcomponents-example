import { r as registerInstance, h } from './core-4955d2b1.js';
var Button = /** @class */ (function () {
    function Button(hostRef) {
        registerInstance(this, hostRef);
        this.size = 'default'; //SizeEnums.default;
    }
    Button.prototype.render = function () {
        return (h("span", null, h("slot", null)));
    };
    Object.defineProperty(Button, "style", {
        get: function () { return "span{display:-ms-inline-flexbox;display:inline-flex;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);padding-left:1rem;padding-right:1rem}"; },
        enumerable: true,
        configurable: true
    });
    return Button;
}());
export { Button as tf_button_container };
