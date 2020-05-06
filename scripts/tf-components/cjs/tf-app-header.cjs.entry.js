'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-17ea994a.js');

const appHeaderCss = "header{padding:0 1.375rem;margin-bottom:1.375rem;height:4.625rem;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}#app-logo-container{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end}#app-logo{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}#app-logo-icon{width:2.813rem;height:3.125rem;min-width:45px}#app-logo-initials{color:#ffffff;text-transform:uppercase;font-weight:400;font-size:1.25rem;text-align:center;}#app-logo-initials::-moz-selection{color:none;background:none}#app-logo-initials::selection{color:none;background:none}#app-logo-initials::-moz-selection{color:none;background:none}h1{margin:0 0 0 1.125rem;color:#ffffff;font-size:1.5rem;line-height:1.46;font-weight:normal}@media only screen and (max-width: 640px){#app-logo-title{display:none}}#central-contailer{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;padding:0 3.125rem;-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:end;justify-content:flex-end}#quick-link-icon{color:#363154;font-size:1.25rem;text-align:center;}#quick-link-icon::-moz-selection{color:none;background:none}#quick-link-icon::selection{color:none;background:none}#quick-link-icon::-moz-selection{color:none;background:none}#client-logo-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;justify-self:flex-end;padding:0 0.5rem;-ms-flex-pack:center;justify-content:center;border-radius:0 0 5px 5px;-webkit-box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);background-color:#ffffff}#client-logo{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:112px;height:59px}#client-logo img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;overflow:hidden}#account-navigation-container{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:40px;height:59px}@media only screen and (max-width: 640px){#account-navigation-container{display:none}}#account-navigation-container tf-hexagon-button{width:27px;height:30px}";

const AppHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.tfAppLogoClicked = index.createEvent(this, "tfAppLogoClicked", 7);
    }
    onButtonClickHandler(event) {
        event.preventDefault();
        this.tfAppLogoClicked.emit();
    }
    render() {
        return (index.h("header", null, index.h("div", { id: "app-logo-container" }, index.h("div", { id: "app-logo" }, index.h("tf-hexagon-button", { color: "gradient", id: "app-logo-icon", onClick: this.onButtonClickHandler.bind(this) }, index.h("div", { id: "app-logo-initials" }, this.appInitials)), index.h("h1", { id: "app-logo-title" }, this.appTitle))), index.h("div", { id: "central-contailer" }, index.h("div", { id: "app-logo" }, index.h("tf-hexagon-button", { color: "accent", id: "app-logo-icon" }, index.h("div", { id: "quick-link-icon" }, "+")))), index.h("div", { id: "client-logo-container" }, index.h("div", { id: "client-logo" }, index.h("img", { src: this.clientLogoSource })))));
    }
};
AppHeader.style = appHeaderCss;

exports.tf_app_header = AppHeader;
