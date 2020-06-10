import { r as registerInstance, h } from './index-67a2bf30.js';
import { h as getTrafficLightColourClassname } from './utils-3b3848ae.js';
var statusCss = "span{padding-left:.75rem;padding-right:.75rem;display:-ms-inline-flexbox;display:inline-flex;font-size:.75rem;line-height:1.25rem;font-weight:600;border-radius:9999px}.beacon{display:block;height:8px;width:8px;border-radius:4px;margin:0 3px}.beacon.colour-default{background-color:#ecf2f3}";
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
