'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const breadcrumbsCss = ".breadcrumbs-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;width:auto}.breadcrumb-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.breadcrumb-space{display:-ms-flexbox;display:flex;color:#224595;padding-left:0.25rem;padding-right:0.25rem;padding-top:0;padding-bottom:0}.chevron-right{width:20px;height:20px}.breadcrumb-link{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:0.25rem;padding-right:0.25rem;padding-top:0;padding-bottom:0;font-size:1rem;font-family:\"Roboto Condensed\", sans-serif;line-height:1.25rem;font-weight:500;text-decoration:none;cursor:pointer;color:#224595;background-color:#ffffff;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;transition-duration:150ms}.breadcrumb-link:hover{color:#7A8FBF}.breadcrumb-link:focus{outline:0;color:#173068}.breadcrumb-link-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:\"Roboto Condensed\", sans-serif;-ms-flex:1 1 0%;flex:1 1 0%}.page-title{margin:0;padding-top:0;padding-bottom:0;padding-left:0.25rem;padding-right:0.25rem;font-size:1rem;font-family:\"Roboto Condensed\", sans-serif;line-height:1.25rem;font-weight:700;text-decoration:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:\"Roboto Condensed\", sans-serif}.page-message{margin:0;padding-top:0;padding-bottom:0;font-size:1rem;font-family:\"Roboto Condensed\", sans-serif;line-height:1.25rem;font-weight:500;text-decoration:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:\"Roboto Condensed\", sans-serif}";

const SideDrawerSubNavLink = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.showChevron = true;
        this.tfRouterLinkClicked = index.createEvent(this, "tfRouterLinkClicked", 7);
    }
    onRouterLinkClicked() {
        this.tfRouterLinkClicked.emit({
            routerLink: this.routerLink
        });
    }
    render() {
        let linkButton = (index.h("a", { href: this.hrefLink, title: !this.hrefTitle ? `Link to ${this.hrefLink}` : this.hrefTitle, class: "breadcrumb-link" }, index.h("span", { class: "breadcrumb-link-title" }, index.h("slot", null))));
        if (this.routerLink) {
            linkButton = (index.h("a", { onClick: this.onRouterLinkClicked.bind(this), title: !this.hrefTitle ? `Breadcrumb to ${this.hrefLink}` : this.hrefTitle, class: "breadcrumb-link" }, index.h("span", { class: "breadcrumb-link-title" }, index.h("slot", null))));
        }
        let chevronIcon = null;
        if (this.showChevron) {
            chevronIcon = (index.h("div", { class: "breadcrumb-space" }, index.h("tf-icon-chevron-right", { class: "chevron-right" })));
        }
        return (index.h("div", { class: "breadcrumb-wrapper" }, linkButton, chevronIcon));
    }
};
SideDrawerSubNavLink.style = breadcrumbsCss;

exports.tf_breadcrumb = SideDrawerSubNavLink;
