import { r as registerInstance, h } from './index-67a2bf30.js';
import { d as getTrafficLightColourClassname } from './utils-b80ebc56.js';
var statusCss = "span{padding-left:.75rem;padding-right:.75rem;display:-ms-inline-flexbox;display:inline-flex;font-size:.75rem;line-height:1.25rem;font-weight:600;border-radius:9999px}span.colour-none{background-color:#ecf2f3;color:#9ba7aa}span.colour-red{background-color:#b92950;color:#ecf2f3}span.colour-amber{background-color:#b97129;color:#ecf2f3}span.colour-green{background-color:#40c7a3;color:#ecf2f3}.beacon{display:block;height:8px;width:8px;border-radius:4px;margin:0 3px}.beacon.colour-default,.beacon.colour-none{background-color:#ecf2f3}.beacon.colour-red{background-color:#b92950}.beacon.colour-amber{background-color:#b97129}.beacon.colour-green{background-color:#40c7a3}";
var Status = /** @class */ (function () {
    function Status(hostRef) {
        registerInstance(this, hostRef);
        this.trafficLightColour = 'none';
    }
    Status.prototype.render = function () {
        return (h("span", { class: "\n\t\t\t\t" + getTrafficLightColourClassname(this.trafficLightColour) + "\n\t\t\t" }, h("slot", null)));
    };
    return Status;
}());
Status.style = statusCss;
export { Status as tf_status };
