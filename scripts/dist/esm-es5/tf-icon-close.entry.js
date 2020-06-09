import { r as registerInstance, h } from './index-67a2bf30.js';
var iconsCss = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";
var SVGIcon = /** @class */ (function () {
    function SVGIcon(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" })));
    };
    return SVGIcon;
}());
SVGIcon.style = iconsCss;
export { SVGIcon as tf_icon_close };
