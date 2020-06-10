'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const SelectOption = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("slot", null));
    }
};
SelectOption.style = "::slotted(*){\n\t\t\tcolor: red;\n\t\t}";

exports.tf_select_option = SelectOption;
