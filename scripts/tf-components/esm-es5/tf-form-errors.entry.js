import { r as registerInstance, h } from './index-67a2bf30.js';
var formStylesCss = ".form-card,.form-card-wrapper{position:relative}.form-card{margin:auto;padding:3rem 1.25rem;min-height:100%;background-color:#fff;border-radius:.25rem;display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.top{z-index:50}.form-title{margin:1rem 0;padding-bottom:.5rem;width:100%;color:#363154;border:solid #32f7dc;border-width:0 0 4px}.form-wrapper{margin-top:2rem;width:100%}.colour-navy{background-color:#363154}.colour-default,.colour-white{background-color:#fff}.colour-blue{background-color:#224595}.colour-aqua{background-color:#32f7dc}.colour-grey{background-color:#d0dfe3}.form-card-errors{margin-top:-5px;z-index:10}.form-errors{background-color:#b92950;color:#fff;padding-top:.75rem;padding-bottom:.75rem}.form-errors-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.form-errors-icon{width:30px;height:35px;padding-right:.75rem;color:#b92950}.form-errors-icon-spacer{display:block;display:block;height:.25rem}.error-message-title{font-family:Roboto Condensed,sans-serif;color:#fff;font-weight:700}.form-errors-items{list-style-type:none;margin:0;padding:0}.hex-exclamation-icon{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.hexagon-svg{height:35px;color:#fff}.hex-fill,.hex-outline{fill:currentColor}.exclamation-icon{height:18px;width:18px;position:absolute;z-index:50;color:#b92950}.form-error-list-item{display:block}@media (min-width:640px){.form-card{width:40%;padding-left:1.5rem;padding-right:1.5rem}}";
var FormErrors = /** @class */ (function () {
    function FormErrors(hostRef) {
        registerInstance(this, hostRef);
        this.message = "Sorry, there was an error when trying to submit the form";
        this.hide = false;
    }
    FormErrors.prototype.render = function () {
        var content = null;
        if (!this.hide) {
            content = (h("div", { class: "form-errors form-card" }, h("div", { class: "form-errors-container" }, h("div", { class: "form-errors-icon" }, h("div", { class: "hex-exclamation-icon" }, h("svg", { class: "hexagon-svg", viewBox: "0 0 44 50", xmlns: "http://www.w3.org/2000/svg" }, h("path", { class: "hex-outline", d: "M22.0051334,50 C20.9875773,50 19.94393,49.7081067 19.0307386,49.12432 L2.85420568,39.6510548 C1.00173174,38.642696 -0.12018909,36.5994427 0.0102668206,34.4500464 L0.0102668206,15.5300517 C-0.12018909,13.3806554 1.00173174,11.3374021 2.88029686,10.3025076 L19.0307386,0.855778161 C20.8310302,-0.285259387 23.1792366,-0.285259387 24.9795282,0.855778161 L41.1560611,10.3290434 C42.9302615,11.4435452 44,13.4071912 44,15.503516 L44,34.4765822 C44,36.572907 42.9302615,38.5630888 41.1821523,39.6510548 L24.9795282,49.1508558 C24.0663368,49.7081067 23.0487807,50 22.0051334,50 Z" })), h("tf-icon-exclamation", { class: "exclamation-icon" }))), h("span", { class: "error-message-title" }, this.message)), h("div", { class: "form-errors-container" }, h("div", { class: "form-errors-icon" }, h("div", { class: "form-errors-icon-spacer" }, "\u00A0")), h("ul", { class: "form-errors-items" }, h("slot", null))), h("slot", null)));
        }
        return content;
    };
    return FormErrors;
}());
FormErrors.style = formStylesCss;
export { FormErrors as tf_form_errors };
