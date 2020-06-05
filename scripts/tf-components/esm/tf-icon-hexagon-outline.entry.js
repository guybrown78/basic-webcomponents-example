import { r as registerInstance, h } from './index-67a2bf30.js';

const iconsCss = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";

const SVGIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 44 50" }, h("path", { d: "M19.4548124,48.2577192 L3.4362384,38.8554344 C1.84150342,37.9827974 0.893114705,36.2416512 1.00963113,34.4004273 L1.00963113,15.597747 C0.893522734,13.7573554 1.84194971,12.0172467 3.4362384,11.1455747 L19.4548124,1.74328972 C21.0150616,0.752236759 22.9924778,0.752236759 24.5527269,1.74328972 L40.5731547,11.1455747 C42.0897179,12.0953495 43.0097568,13.7833739 43,15.597747 L43,34.4004273 C43.0096356,36.2155221 42.0897508,37.9043379 40.5731547,38.8554344 L24.5527269,48.2577192 C22.9921005,49.2474269 21.0154389,49.2474269 19.4548124,48.2577192", stroke: "currentColor", "stroke-width": "2", "fill-rule": "nonzero", fill: "#eeeeee", "fill-opacity": "0" })));
    }
};
SVGIcon.style = iconsCss;

export { SVGIcon as tf_icon_hexagon_outline };
