import { r as registerInstance, h } from './index-67a2bf30.js';

const elementsCss = ".underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-h1{margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem}.tag-h1,.tag-h2{font-family:Roboto Condensed,sans-serif;font-weight:800}.tag-h2{margin-top:1rem;font-size:1.5rem;line-height:1.75rem}.span-title{margin-top:.5rem;margin-bottom:.5rem;font-size:1.125rem;line-height:1.5rem;font-weight:800;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description,.span-title{display:block;font-family:Roboto Condensed,sans-serif}.span-description{margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold{font-family:Roboto Condensed,sans-serif;font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";

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
