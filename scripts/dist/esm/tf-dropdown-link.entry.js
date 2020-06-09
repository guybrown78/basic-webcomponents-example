import { r as registerInstance, c as createEvent, h } from './index-67a2bf30.js';
import { g as getColourClassname } from './utils-3b3848ae.js';

const dropdownLinkCss = ".dd-link{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.5rem .75rem;text-decoration:none;cursor:pointer;color:#363154;background-color:#d0dfe3;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.dd-link:focus,.dd-link:hover{background-color:#b1bdc1}.dd-link:focus{outline:0}.colour-blue{color:#fff;background-color:#224595}.colour-blue:hover{background-color:#4260a4}.colour-blue:focus{outline:0;background-color:#1e3d85}.colour-aqua{color:#363154;background-color:#32f7dc}.colour-aqua:hover{background-color:#84faea}.colour-aqua:focus{outline:0;background-color:#2ad2bb}.colour-navy{color:#fff;background-color:#363154}.colour-navy:hover{background-color:#534f6d}.colour-navy:focus{outline:0;background-color:#25223a}.colour-default,.colour-grey{color:#363154;background-color:#d0dfe3}.colour-default:hover,.colour-grey:hover{background-color:#b1bdc1}.colour-default:focus,.colour-grey:focus{outline:0;background-color:#b1bdc1}.colour-white{color:#363154;background-color:#fff}.colour-white:hover{background-color:#ecf2f3}.colour-white:focus{outline:0;background-color:#e7eff1}.dd-link-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Roboto Condensed,sans-serif;line-height:1.25rem}";

const DropdownLink = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hrefTarget = "_self";
        this.colour = 'grey';
        this.tfDropdownLinkClicked = createEvent(this, "tfDropdownLinkClicked", 7);
        this.tfCloseDropdown = createEvent(this, "tfCloseDropdown", 7);
    }
    onDropdownLinkClicked() {
        this.tfDropdownLinkClicked.emit({
            routerLink: this.routerLink
        });
        this.tfCloseDropdown.emit();
    }
    render() {
        let t = !this.hrefTitle ? "Link to " + this.hrefLink : this.hrefTitle;
        let linkButton = (h("a", { href: this.hrefLink, title: t, target: this.hrefTarget, class: `
					dd-link 
					${getColourClassname(this.colour)}
				` }, h("span", { class: "dd-link-title" }, h("slot", null))));
        if (this.routerLink) {
            t = !this.hrefTitle ? "Go to " + this.hrefLink : this.hrefTitle;
            linkButton = (h("a", { onClick: this.onDropdownLinkClicked.bind(this), title: t, class: `
						dd-link 
						${getColourClassname(this.colour)}
					` }, h("span", { class: "dd-link-title" }, h("slot", null))));
        }
        return (linkButton);
    }
};
DropdownLink.style = dropdownLinkCss;

export { DropdownLink as tf_dropdown_link };
