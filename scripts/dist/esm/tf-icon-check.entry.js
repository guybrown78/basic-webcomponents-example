import { r as registerInstance, h } from './index-67a2bf30.js';

const iconsCss = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";

const SVGIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", d: "M0 11l2-2 5 5L18 3l2 2L7 18z" })));
    }
};
SVGIcon.style = iconsCss;

export { SVGIcon as tf_icon_check };
