'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-cf37baa7.js');

const Button = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.size = 'default'; //SizeEnums.default;
    }
    render() {
        return (core.h("span", null, core.h("slot", null)));
    }
    static get style() { return "span{display:-ms-inline-flexbox;display:inline-flex;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);padding-left:1rem;padding-right:1rem}"; }
};

exports.tf_button_container = Button;
