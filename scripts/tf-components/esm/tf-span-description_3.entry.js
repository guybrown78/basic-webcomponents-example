import { r as registerInstance, h } from './index-67a2bf30.js';
import { a as getColourClassname, b as getTextAlignClassname } from './utils-b80ebc56.js';

const elementsCss = "dd,dl,h1,h2,h5,p{margin:0}h1,h2,h5{font-size:inherit;font-weight:inherit}.colour-default,.colour-navy{color:#363154}.colour-white{color:#fff}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.text-align-left{text-align:left}.text-align-center{text-align:center}.text-align-right{text-align:right}.text-align-justify{text-align:justify}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{background-color:transparent;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-a.colour-white:hover{color:#e7eff1}.tag-a.colour-blue:hover{color:#7a8fbf}.tag-a.colour-aqua:hover{color:#2ad2bb}.tag-a.colour-grey:hover{color:#9ba7aa}.tag-a.colour-default:hover,.tag-a.colour-navy:hover{color:#868398}.tag-h1{font-family:Roboto Condensed,sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{background-color:transparent;font-size:1.5rem;line-height:1.75rem}.span-title,.tag-h2{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.5rem;margin-bottom:.5rem;font-weight:800}.span-title{font-size:1.125rem;line-height:1.5rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold,.span-description{font-family:Roboto Condensed,sans-serif}.span-bold{font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";

const ParaTag = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
    }
    render() {
        return (h("span", { class: `
				span-description 
				${getColourClassname(this.colour)}
				${getTextAlignClassname(this.textAlign)}
			` }, h("slot", null)));
    }
};
ParaTag.style = elementsCss;

const elementsCss$1 = "dd,dl,h1,h2,h5,p{margin:0}h1,h2,h5{font-size:inherit;font-weight:inherit}.colour-default,.colour-navy{color:#363154}.colour-white{color:#fff}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.text-align-left{text-align:left}.text-align-center{text-align:center}.text-align-right{text-align:right}.text-align-justify{text-align:justify}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{background-color:transparent;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-a.colour-white:hover{color:#e7eff1}.tag-a.colour-blue:hover{color:#7a8fbf}.tag-a.colour-aqua:hover{color:#2ad2bb}.tag-a.colour-grey:hover{color:#9ba7aa}.tag-a.colour-default:hover,.tag-a.colour-navy:hover{color:#868398}.tag-h1{font-family:Roboto Condensed,sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{background-color:transparent;font-size:1.5rem;line-height:1.75rem}.span-title,.tag-h2{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.5rem;margin-bottom:.5rem;font-weight:800}.span-title{font-size:1.125rem;line-height:1.5rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold,.span-description{font-family:Roboto Condensed,sans-serif}.span-bold{font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";

const ParaTag$1 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
    }
    render() {
        const textAlign = this.textAlign;
        const colour = this.colour;
        return (h("span", { class: `
				span-title 
				${colour === "white" ? "colour-white"
                : colour === "blue" ? "colour-blue"
                    : colour === "aqua" ? "colour-aqua"
                        : colour === "grey" ? "colour-grey"
                            : colour === "navy" ? "colour-navy"
                                : "colour-default"}
				${textAlign === "right" ? "text-align-right"
                : textAlign === "center" ? "text-align-center"
                    : textAlign === "justify" ? "text-align-justify"
                        : textAlign === "left" ? "text-align-left"
                            : "text-align-left"}
			` }, h("slot", null)));
    }
};
ParaTag$1.style = elementsCss$1;

const statusCss = "span{padding-left:.75rem;padding-right:.75rem;display:-ms-inline-flexbox;display:inline-flex;font-size:.75rem;line-height:1.25rem;font-weight:600;border-radius:9999px}span.colour-none{background-color:#ecf2f3;color:#9ba7aa}span.colour-red{background-color:#b92950;color:#ecf2f3}span.colour-amber{background-color:#b97129;color:#ecf2f3}span.colour-green{background-color:#40c7a3;color:#ecf2f3}.beacon{display:block;height:8px;width:8px;border-radius:4px;margin:0 3px}.beacon.colour-default,.beacon.colour-none{background-color:#ecf2f3}.beacon.colour-red{background-color:#b92950}.beacon.colour-amber{background-color:#b97129}.beacon.colour-green{background-color:#40c7a3}";

const Status = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.trafficLightColour = 'none';
    }
    render() {
        const colour = this.trafficLightColour;
        return (h("div", { class: `
				beacon 
				${colour === "red" ? "colour-red"
                : colour === "orange" || colour === "amber" ? "colour-amber"
                    : colour === "green" ? "colour-green"
                        : colour === "grey" || colour === "none" ? "colour-none"
                            : "colour-default"}
			` }));
    }
};
Status.style = statusCss;

export { ParaTag as tf_span_description, ParaTag$1 as tf_span_title, Status as tf_status_beacon };
