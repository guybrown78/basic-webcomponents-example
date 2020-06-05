'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const pageTitleBreadcrumbsCss = ".container{background-color:#fff;border-radius:9999px;margin-bottom:1.25rem;-webkit-box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04)}.back-button-container,.container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.back-button-container{width:45px;padding-left:.25rem}.content-container{padding-left:.5rem;padding-top:1.25rem;padding-bottom:1.25rem;-ms-flex:1 1 0%;flex:1 1 0%;display:-ms-flexbox;display:flex;border:solid #224595;border-width:0 0 0 1px}@media (max-width:640px){.content-container{-ms-flex-direction:column;flex-direction:column;padding-top:.75rem;padding-bottom:.75rem}}";

const PageTitleBreadcrumbs = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.showBackButton = false;
        this.backButtonColour = "white";
        this.isOpen = false;
        this.tfBackButtonClicked = index.createEvent(this, "tfBackButtonClicked", 7);
    }
    onBackButtonClicked() {
        this.tfBackButtonClicked.emit();
    }
    render() {
        let backBtn = null;
        if (this.showBackButton) {
            backBtn = (index.h("tf-icon-button", { icon: "chevron-left", size: "xs", colour: this.backButtonColour, onClick: this.onBackButtonClicked.bind(this) }));
        }
        return (index.h("div", { class: "container" }, index.h("div", { class: "back-button-container" }, backBtn), index.h("div", { class: "content-container" }, index.h("slot", { name: "welcomeMessage" }), index.h("slot", { name: "breadcrumbs" }), index.h("slot", { name: "pageTitle" }))));
    }
};
PageTitleBreadcrumbs.style = pageTitleBreadcrumbsCss;

exports.tf_page_title_breadcrumbs = PageTitleBreadcrumbs;
