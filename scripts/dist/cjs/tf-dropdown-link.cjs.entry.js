'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const dropdownLinkCss = ".dd-link{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.5rem .75rem;text-decoration:none;cursor:pointer;color:#363154;background-color:#d0dfe3;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.dd-link:focus,.dd-link:hover{background-color:#b1bdc1}.dd-link:focus{outline:0}.dd-link-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Roboto Condensed,sans-serif;line-height:1.25rem}";

const DropdownLink = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.hrefTarget = "_self";
        this.colour = 'grey';
        this.tfDropdownLinkClicked = index.createEvent(this, "tfDropdownLinkClicked", 7);
        this.tfCloseDropdown = index.createEvent(this, "tfCloseDropdown", 7);
    }
    onDropdownLinkClicked() {
        this.tfDropdownLinkClicked.emit({
            routerLink: this.routerLink
        });
        this.tfCloseDropdown.emit();
    }
    render() {
        let linkButton = (index.h("a", { href: this.hrefLink, title: !this.hrefTitle ? `Link to ${this.hrefLink}` : this.hrefTitle, target: this.hrefTarget, class: `dd-link dd-link-${this.colour}` }, index.h("span", { class: "dd-link-title" }, index.h("slot", null))));
        if (this.routerLink) {
            linkButton = (index.h("a", { onClick: this.onDropdownLinkClicked.bind(this), title: !this.hrefTitle ? `Go to ${this.hrefLink}` : this.hrefTitle, class: `dd-link dd-link-${this.colour}` }, index.h("span", { class: "dd-link-title" }, index.h("slot", null))));
        }
        return (linkButton);
    }
};
DropdownLink.style = dropdownLinkCss;

exports.tf_dropdown_link = DropdownLink;
