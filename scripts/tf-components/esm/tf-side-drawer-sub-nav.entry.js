import { r as registerInstance, h } from './index-67a2bf30.js';

const sideDrawerSubNavCss = ".sub-nav-content{max-height:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);overflow:hidden;padding:.5rem;background-color:#d0dfe3;line-height:1.5}.opened{max-height:100vh}";

const SideDrawerSubNav = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "sub-nav-content opened" }, h("slot", null)));
    }
};
SideDrawerSubNav.style = sideDrawerSubNavCss;

export { SideDrawerSubNav as tf_side_drawer_sub_nav };
