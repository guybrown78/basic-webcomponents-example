import { r as registerInstance, h } from './index-67a2bf30.js';

const formStylesCss = ".form-card,.form-card-wrapper{position:relative}.form-card{margin:auto;padding:3rem 1.25rem;min-height:100%;background-color:#fff;border-radius:.25rem;display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.top{z-index:50}.form-title{margin:1rem 0;padding-bottom:.5rem;width:100%;color:#363154;border:solid #32f7dc;border-width:0 0 4px}.form-wrapper{margin-top:2rem;width:100%}.colour-navy{background-color:#363154}.colour-default,.colour-white{background-color:#fff}.colour-blue{background-color:#224595}.colour-aqua{background-color:#32f7dc}.colour-grey{background-color:#d0dfe3}.form-card-errors{margin-top:-5px;z-index:10}.form-errors{background-color:#b92950;color:#fff;padding-top:.75rem;padding-bottom:.75rem}.form-errors-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.form-errors-icon{width:30px;height:35px;padding-right:.75rem;color:#b92950}.form-errors-icon-spacer{display:block;display:block;height:.25rem}.error-message-title{font-family:Roboto Condensed,sans-serif;color:#fff;font-weight:700}.form-errors-items{list-style-type:none;margin:0;padding:0}.hex-exclamation-icon{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.hexagon-svg{height:35px;color:#fff}.hex-fill,.hex-outline{fill:currentColor}.exclamation-icon{height:18px;width:18px;position:absolute;z-index:50;color:#b92950}.form-error-list-item{display:block}@media (min-width:640px){.form-card{width:40%;padding-left:1.5rem;padding-right:1.5rem}}";

const FormErrors = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("li", { class: "form-error-list-item" }, h("tf-span", { colour: "white" }, h("slot", null))));
    }
};
FormErrors.style = formStylesCss;

export { FormErrors as tf_form_error_item };
