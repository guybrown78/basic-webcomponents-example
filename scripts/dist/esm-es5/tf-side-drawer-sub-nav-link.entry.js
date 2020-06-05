import { r as registerInstance, c as createEvent, h } from './index-67a2bf30.js';
var sideDrawerSubNavLinkCss = ".tailwind-sub-nav{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.5rem .75rem;font-size:1.125rem;line-height:1.25rem;font-weight:500;text-decoration:none;cursor:pointer;color:#1d1a2e;background-color:#d0dfe3;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.tailwind-sub-nav:hover{color:#302c4b;background-color:#b1bdc1}.tailwind-sub-nav:focus{outline:0;color:#1d1a2e;background-color:#b1bdc1}.tailwind-sub-nav-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Roboto Condensed,sans-serif;-ms-flex:1 1 0%;flex:1 1 0%}.tailwind-toggle-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}";
var SideDrawerSubNavLink = /** @class */ (function () {
    function SideDrawerSubNavLink(hostRef) {
        registerInstance(this, hostRef);
        this.tfRouterLinkClicked = createEvent(this, "tfRouterLinkClicked", 7);
        this.tfCloseSideDrawer = createEvent(this, "tfCloseSideDrawer", 7);
    }
    SideDrawerSubNavLink.prototype.onRouterLinkClicked = function () {
        this.tfRouterLinkClicked.emit({
            routerLink: this.routerLink
        });
        this.tfCloseSideDrawer.emit();
    };
    SideDrawerSubNavLink.prototype.render = function () {
        var linkButton = (h("a", { href: this.hrefLink, title: !this.hrefTitle ? "Link to " + this.hrefLink : this.hrefTitle, class: "tailwind-sub-nav" }, h("span", { class: "tailwind-sub-nav-title" }, h("slot", null))));
        if (this.routerLink) {
            linkButton = (h("a", {
                //routerLink={ this.routerLink } 
                onClick: this.onRouterLinkClicked.bind(this), title: !this.hrefTitle ? "Link to " + this.hrefLink : this.hrefTitle, class: "tailwind-sub-nav"
            }, h("span", { class: "tailwind-sub-nav-title" }, h("slot", null))));
        }
        return (linkButton);
    };
    return SideDrawerSubNavLink;
}());
SideDrawerSubNavLink.style = sideDrawerSubNavLinkCss;
export { SideDrawerSubNavLink as tf_side_drawer_sub_nav_link };
