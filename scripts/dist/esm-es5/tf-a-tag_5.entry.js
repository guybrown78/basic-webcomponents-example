import { r as registerInstance, h } from './index-67a2bf30.js';
import { a as getColourClassname, d as getTextAlignClassname } from './utils-1247f068.js';
var AnchorTag = /** @class */ (function () {
    function AnchorTag(hostRef) {
        registerInstance(this, hostRef);
        this.url = null;
        this.tagTitle = null;
    }
    AnchorTag.prototype.render = function () {
        return (h("a", { href: this.url, title: this.tagTitle }, h("slot", null)));
    };
    return AnchorTag;
}());
AnchorTag.style = "a{\n\t\t\t@apply font-medium text-blue-600 transition ease-in-out duration-150;\n\t\t}\n\t\ta:hover{\n\t\t\t@apply text-blue-500;\n\t\t}\n\t\ta:focus{\n\t\t\t@apply outline-none underline;\n\t\t}";
var formStylesCss = ".form-card{margin:auto;padding:3rem 1.25rem;min-height:100%;background-color:#fff;border-radius:.25rem;display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.form-title{margin:1rem 0;padding-bottom:.5rem;width:100%;color:#363154;border:solid #32f7dc;border-width:0 0 4px}.form-wrapper{margin-top:2rem;width:100%}.colour-navy{background-color:#363154}.colour-default,.colour-white{background-color:#fff}.colour-blue{background-color:#224595}.colour-aqua{background-color:#32f7dc}.colour-grey{background-color:#d0dfe3}@media (min-width:640px){.form-card{width:40%;padding-left:1.5rem;padding-right:1.5rem}}";
var FormCard = /** @class */ (function () {
    function FormCard(hostRef) {
        registerInstance(this, hostRef);
    }
    FormCard.prototype.render = function () {
        return (h("div", { class: "form-card" }, h("slot", null)));
    };
    return FormCard;
}());
FormCard.style = formStylesCss;
var formStylesCss$1 = ".form-card{margin:auto;padding:3rem 1.25rem;min-height:100%;background-color:#fff;border-radius:.25rem;display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.form-title{margin:1rem 0;padding-bottom:.5rem;width:100%;color:#363154;border:solid #32f7dc;border-width:0 0 4px}.form-wrapper{margin-top:2rem;width:100%}.colour-navy{background-color:#363154}.colour-default,.colour-white{background-color:#fff}.colour-blue{background-color:#224595}.colour-aqua{background-color:#32f7dc}.colour-grey{background-color:#d0dfe3}@media (min-width:640px){.form-card{width:40%;padding-left:1.5rem;padding-right:1.5rem}}";
var FormTitle = /** @class */ (function () {
    function FormTitle(hostRef) {
        registerInstance(this, hostRef);
    }
    FormTitle.prototype.render = function () {
        return (h("div", { class: "form-title" }, h("slot", null)));
    };
    return FormTitle;
}());
FormTitle.style = formStylesCss$1;
var formStylesCss$2 = ".form-card{margin:auto;padding:3rem 1.25rem;min-height:100%;background-color:#fff;border-radius:.25rem;display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.form-title{margin:1rem 0;padding-bottom:.5rem;width:100%;color:#363154;border:solid #32f7dc;border-width:0 0 4px}.form-wrapper{margin-top:2rem;width:100%}.colour-navy{background-color:#363154}.colour-default,.colour-white{background-color:#fff}.colour-blue{background-color:#224595}.colour-aqua{background-color:#32f7dc}.colour-grey{background-color:#d0dfe3}@media (min-width:640px){.form-card{width:40%;padding-left:1.5rem;padding-right:1.5rem}}";
var FormTitle$1 = /** @class */ (function () {
    function FormTitle$1(hostRef) {
        registerInstance(this, hostRef);
    }
    FormTitle$1.prototype.render = function () {
        return (h("div", { class: "form-wrapper" }, h("slot", null)));
    };
    return FormTitle$1;
}());
FormTitle$1.style = formStylesCss$2;
var elementsCss = "dd,dl,h1,h2,h5,p{margin:0}h1,h2,h5{font-size:inherit;font-weight:inherit}.colour-default,.colour-navy{color:#363154}.colour-white{color:#fff}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{background-color:transparent;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-a.colour-white:hover{color:#e7eff1}.tag-a.colour-blue:hover{color:#7a8fbf}.tag-a.colour-aqua:hover{color:#2ad2bb}.tag-a.colour-grey:hover{color:#9ba7aa}.tag-a.colour-default:hover,.tag-a.colour-navy:hover{color:#868398}.tag-h1{font-family:Roboto Condensed,sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{background-color:transparent;font-size:1.5rem;line-height:1.75rem}.span-title,.tag-h2{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.5rem;margin-bottom:.5rem;font-weight:800}.span-title{font-size:1.125rem;line-height:1.5rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold,.span-description{font-family:Roboto Condensed,sans-serif}.span-bold{font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";
var HOneTag = /** @class */ (function () {
    function HOneTag(hostRef) {
        registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
    }
    HOneTag.prototype.render = function () {
        return (h("h2", { class: "\n\t\t\t\ttag-h1 \n\t\t\t\t" + getColourClassname(this.colour) + "\n\t\t\t\t" + getTextAlignClassname(this.textAlign) + "\n\t\t\t" }, h("slot", null)));
    };
    return HOneTag;
}());
HOneTag.style = elementsCss;
export { AnchorTag as tf_a_tag, FormCard as tf_form_card, FormTitle as tf_form_title, FormTitle$1 as tf_form_wrapper, HOneTag as tf_h1 };
