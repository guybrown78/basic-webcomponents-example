import { r as registerInstance, h } from './index-67a2bf30.js';
import { e as getTrafficLightColourClassname } from './utils-f127cc8f.js';

const statusCss = "span{padding-left:.75rem;padding-right:.75rem;display:-ms-inline-flexbox;display:inline-flex;font-size:.75rem;line-height:1.25rem;font-weight:600;border-radius:9999px}.beacon{display:block;height:8px;width:8px;border-radius:4px;margin:0 3px}.beacon.colour-default{background-color:#ecf2f3}";

const Status = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.trafficLightColour = 'none';
    }
    render() {
        return (h("span", { class: `
				${getTrafficLightColourClassname(this.trafficLightColour)}
			` }, h("slot", null)));
    }
};
Status.style = statusCss;

export { Status as tf_status };
