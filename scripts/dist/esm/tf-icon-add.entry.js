import { r as registerInstance, h } from './index-67a2bf30.js';

const iconsCss = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";

const SVGIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("polygon", { fill: "currentColor", "fill-rule": "nonzero", points: "11.6 8.4 18 8.4 18 11.6 11.6 11.6 11.6 18 8.4 18 8.4 11.6 2 11.6 2 8.4 8.4 8.4 8.4 2 11.6 2" })));
    }
};
SVGIcon.style = iconsCss;

export { SVGIcon as tf_icon_add };
