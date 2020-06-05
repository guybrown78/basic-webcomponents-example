import { r as registerInstance, h } from './index-67a2bf30.js';
var SelectOption = /** @class */ (function () {
    function SelectOption(hostRef) {
        registerInstance(this, hostRef);
    }
    SelectOption.prototype.render = function () {
        return (h("slot", null));
    };
    return SelectOption;
}());
SelectOption.style = "::slotted(*){\n\t\t\tcolor: red;\n\t\t}";
export { SelectOption as tf_select_option };
