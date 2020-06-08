import { r as registerInstance, h } from './index-67a2bf30.js';

const appFooterCss = "footer{padding:0 1.375rem;margin-top:1.375rem;min-height:4.625rem;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.tagline{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400;color:#fff}";

const AppHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("footer", null, h("slot", { name: "tagline" })));
    }
};
AppHeader.style = appFooterCss;

export { AppHeader as tf_app_base_footer };
