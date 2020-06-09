'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');
const utils = require('./utils-087faf22.js');

const statusCss = "span{padding-left:.75rem;padding-right:.75rem;display:-ms-inline-flexbox;display:inline-flex;font-size:.75rem;line-height:1.25rem;font-weight:600;border-radius:9999px}.beacon{display:block;height:8px;width:8px;border-radius:4px;margin:0 3px}.beacon.colour-default{background-color:#ecf2f3}";

const Status = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.trafficLightColour = 'none';
    }
    render() {
        return (index.h("span", { class: `
				${utils.getTrafficLightColourClassname(this.trafficLightColour)}
			` }, index.h("slot", null)));
    }
};
Status.style = statusCss;

exports.tf_status = Status;
