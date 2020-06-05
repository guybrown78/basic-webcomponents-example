import { r as registerInstance, c as createEvent, h } from './index-67a2bf30.js';
var dropdownLinkCss = ".dd-link{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.5rem .75rem;text-decoration:none;cursor:pointer;color:#363154;background-color:#d0dfe3;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.dd-link:focus,.dd-link:hover{background-color:#b1bdc1}.dd-link:focus{outline:0}.dd-link-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Roboto Condensed,sans-serif;line-height:1.25rem}";
var DropdownLink = /** @class */ (function () {
    function DropdownLink(hostRef) {
        registerInstance(this, hostRef);
        this.hrefTarget = "_self";
        this.colour = 'grey';
        this.tfDropdownLinkClicked = createEvent(this, "tfDropdownLinkClicked", 7);
        this.tfCloseDropdown = createEvent(this, "tfCloseDropdown", 7);
    }
    DropdownLink.prototype.onDropdownLinkClicked = function () {
        this.tfDropdownLinkClicked.emit({
            routerLink: this.routerLink
        });
        this.tfCloseDropdown.emit();
    };
    DropdownLink.prototype.render = function () {
        var linkButton = (h("a", { href: this.hrefLink, title: !this.hrefTitle ? "Link to " + this.hrefLink : this.hrefTitle, target: this.hrefTarget, class: "dd-link dd-link-" + this.colour }, h("span", { class: "dd-link-title" }, h("slot", null))));
        if (this.routerLink) {
            linkButton = (h("a", { onClick: this.onDropdownLinkClicked.bind(this), title: !this.hrefTitle ? "Go to " + this.hrefLink : this.hrefTitle, class: "dd-link dd-link-" + this.colour }, h("span", { class: "dd-link-title" }, h("slot", null))));
        }
        return (linkButton);
    };
    return DropdownLink;
}());
DropdownLink.style = dropdownLinkCss;
export { DropdownLink as tf_dropdown_link };
