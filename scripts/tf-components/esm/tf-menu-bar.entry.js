import { r as registerInstance, h } from './index-0c8d3d54.js';

const menuBarCss = "section{padding:0 1.375rem;margin-bottom:1.375rem}#lozenge-container{height:3.75rem;background-color:#ffffff;width:100%;border-radius:1.875rem;-webkit-box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16)}";

const MenuBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("section", null, h("div", { id: "lozenge-container" }, h("slot", null))));
    }
};
MenuBar.style = menuBarCss;

export { MenuBar as tf_menu_bar };
