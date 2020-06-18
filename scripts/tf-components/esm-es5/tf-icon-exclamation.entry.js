import { r as registerInstance, h } from './index-67a2bf30.js';
var iconsCss = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";
var SVGIcon = /** @class */ (function () {
    function SVGIcon(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("g", { transform: "translate(8.000000, 2.000000)" }, h("polygon", { fill: "currentColor", "fill-rule": "nonzero", points: "0 0 4 0 4 10 0 10" }), h("polygon", { fill: "currentColor", "fill-rule": "nonzero", points: "0 12 4 12 4 16 0 16" }))));
    };
    return SVGIcon;
}());
SVGIcon.style = iconsCss;
export { SVGIcon as tf_icon_exclamation };
