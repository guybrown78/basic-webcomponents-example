import { r as registerInstance, h } from './index-67a2bf30.js';

const SelectOption = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("slot", null));
    }
};
SelectOption.style = "::slotted(*){\n\t\t\tcolor: red;\n\t\t}";

export { SelectOption as tf_select_option };
