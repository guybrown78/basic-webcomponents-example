'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1af04393.js');

const MenuBar = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h("section", null, core.h("div", { id: "lozenge-container" }, core.h("slot", null))));
    }
    static get style() { return "section{padding:0 1.375rem;margin-bottom:1.375rem}#lozenge-container{height:3.75rem;background-color:#fff;width:100%;border-radius:1.875rem;-webkit-box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16)}"; }
};

exports.tf_menu_bar = MenuBar;
