import { r as registerInstance, h } from './index-67a2bf30.js';

const sideDrawerNavCss = ".side-nav{-ms-flex:1 1 0%;flex:1 1 0%;padding:.75rem;width:100%;max-height:100%;overflow-y:auto}";

const SideDrawerNav = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("nav", { class: "side-nav" }, h("slot", null)));
    }
};
SideDrawerNav.style = sideDrawerNavCss;

export { SideDrawerNav as tf_side_drawer_nav };
