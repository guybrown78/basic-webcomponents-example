'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const sideDrawerNavCss = ".side-nav{-ms-flex:1 1 0%;flex:1 1 0%;padding:.75rem;width:100%;max-height:100%;overflow-y:auto}";

const SideDrawerNav = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("nav", { class: "side-nav" }, index.h("slot", null)));
    }
};
SideDrawerNav.style = sideDrawerNavCss;

exports.tf_side_drawer_nav = SideDrawerNav;
