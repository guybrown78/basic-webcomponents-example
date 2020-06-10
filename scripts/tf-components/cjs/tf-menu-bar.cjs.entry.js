'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const menuBarCss = "section{padding:0 1.375rem;margin-bottom:1.375rem}#lozenge-container{height:3.75rem;background-color:#fff;width:100%;border-radius:1.875rem;-webkit-box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16)}";

const MenuBar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("section", null, index.h("div", { id: "lozenge-container" }, index.h("slot", null))));
    }
};
MenuBar.style = menuBarCss;

exports.tf_menu_bar = MenuBar;
