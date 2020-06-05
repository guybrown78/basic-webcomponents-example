import { r as registerInstance, h } from './index-67a2bf30.js';
var breadcrumbsCss = ".breadcrumbs-container{-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;width:auto}.breadcrumb-wrapper,.breadcrumbs-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.breadcrumb-space{display:-ms-flexbox;display:flex;color:#224595;padding:0 .25rem}.chevron-right{width:20px;height:20px}.breadcrumb-link{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 .25rem;font-size:1rem;font-family:Roboto Condensed,sans-serif;line-height:1.25rem;font-weight:500;text-decoration:none;cursor:pointer;color:#224595;background-color:#fff;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.breadcrumb-link:hover{color:#7a8fbf}.breadcrumb-link:focus{outline:0;color:#173068}.breadcrumb-link-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Roboto Condensed,sans-serif;-ms-flex:1 1 0%;flex:1 1 0%}.page-title{padding:0 .25rem;font-weight:700}.page-message,.page-title{margin:0;font-size:1rem;line-height:1.25rem;text-decoration:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Roboto Condensed,sans-serif}.page-message{padding-top:0;padding-bottom:0;font-weight:500}";
var PageMessage = /** @class */ (function () {
    function PageMessage(hostRef) {
        registerInstance(this, hostRef);
    }
    PageMessage.prototype.render = function () {
        return (h("p", { class: "page-message" }, h("slot", null)));
    };
    return PageMessage;
}());
PageMessage.style = breadcrumbsCss;
export { PageMessage as tf_page_message };
