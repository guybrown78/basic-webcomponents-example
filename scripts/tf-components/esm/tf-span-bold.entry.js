import { r as registerInstance, h } from './index-67a2bf30.js';

const elementsCss = ".color-navy,.color-default{color:#363154}.color-white{color:#ffffff}.color-blue{color:#224595}.color-aqua{color:#32F7DC}.color-grey{color:#D0DFE3}.text-align-left{text-align:left}.text-align-center{text-align:center}.text-align-right{text-align:right}.text-align-justify{text-align:justify}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{display:block;font-family:\"Roboto Condensed\", sans-serif;margin-top:1rem;margin-bottom:1rem;margin-left:0;margin-right:0;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{display:block;cursor:pointer;font-family:\"Roboto Condensed\", sans-serif;font-size:1rem;line-height:1.5;font-weight:400;-webkit-transition-property:background-color, border-color, color, fill, stroke;transition-property:background-color, border-color, color, fill, stroke;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:300ms;transition-duration:300ms}.tag-a.color-white:hover{color:#E7EFF1}.tag-a.color-blue:hover{color:#7A8FBF}.tag-a.color-aqua:hover{color:#2AD2BB}.tag-a.color-grey:hover{color:#9BA7AA}.tag-a.color-navy:hover,.tag-a.color-default:hover{color:#868398}.tag-h1{font-family:\"Roboto Condensed\", sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{font-family:\"Roboto Condensed\", sans-serif;margin-top:1rem;font-size:1.5rem;line-height:1.75rem;font-weight:800}.span-title{display:block;font-family:\"Roboto Condensed\", sans-serif;margin-top:0.5rem;margin-bottom:0.5rem;font-size:1.125rem;line-height:1.5rem;font-weight:800;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;font-family:\"Roboto Condensed\", sans-serif;margin-top:0.25rem;margin-bottom:0.25rem;font-size:0.75rem;line-height:1.375;font-weight:400}.span-bold{font-family:\"Roboto Condensed\", sans-serif;font-weight:700}.span-italic{font-family:\"Roboto Condensed\", sans-serif;font-weight:400;font-style:italic}.span-italic-bold{font-family:\"Roboto Condensed\", sans-serif;font-weight:700;font-style:italic}.span-normal{font-family:\"Roboto Condensed\", sans-serif;font-weight:400}.divider-wrapper{margin-top:1.5rem;margin-bottom:1.5rem;margin-left:auto;margin-right:auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:0.25rem;background-color:#D0DFE3}";

const SpanBold = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
    }
    render() {
        return (h("span", { class: `span-bold color-${this.colour} text-align-${this.textAlign}` }, h("slot", null)));
    }
};
SpanBold.style = elementsCss;

export { SpanBold as tf_span_bold };
