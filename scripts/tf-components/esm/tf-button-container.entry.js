import { r as registerInstance, h } from './core-61a8ff81.js';

const Button = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.size = 'default'; //SizeEnums.default;
    }
    render() {
        return (h("span", null, h("slot", null)));
    }
    static get style() { return "span{display:-ms-inline-flexbox;display:inline-flex;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);padding-left:1rem;padding-right:1rem}"; }
};

export { Button as tf_button_container };
