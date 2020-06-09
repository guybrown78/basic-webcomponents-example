'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const sideDrawerCss = "aside{left:-100%;width:400px;max-width:80%;max-height:100vh;-webkit-transition:left .3s ease-out;transition:left .3s ease-out;z-index:100;-webkit-box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.backdrop,aside{height:100vh;position:fixed;top:0;background-color:#363154}.backdrop{left:0;width:100%;opacity:0;z-index:10;pointer-events:none;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}header{padding:0 1.375rem;margin-bottom:1.375rem;height:4.625rem;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.header-icon-container{height:4.625rem;display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end}.close-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.side-drawer-main{display:-ms-flexbox;display:flex;width:100%;height:100%;margin-bottom:1rem;overflow-y:hidden}";

const SideDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.showContactInfo = false;
    }
    async open() {
        this.opened = true;
    }
    onAppLogoClicked() {
        this.open();
    }
    onHandleCloseSideDrawer() {
        this.onCloseDraw();
    }
    stockSymbolChanged(newValue, oldValue) {
    }
    onCloseDraw() {
        this.opened = false;
    }
    onContentChange(content) {
        this.showContactInfo = content === 'contact';
    }
    render() {
        let mainContent = index.h("slot", null);
        return [
            index.h("div", { onClick: this.onCloseDraw.bind(this), class: "backdrop" }),
            index.h("aside", null, index.h("header", null, index.h("div", { class: "header-icon-container" }, index.h("div", { class: "close-icon" }, index.h("tf-icon-button", { size: "large", icon: "close", colour: "white", onClick: this.onCloseDraw.bind(this) })))), index.h("main", { class: "side-drawer-main" }, mainContent))
        ];
    }
    static get watchers() { return {
        "opened": ["stockSymbolChanged"]
    }; }
};
SideDrawer.style = sideDrawerCss;

exports.tf_side_drawer = SideDrawer;
