import { r as registerInstance, h } from './index-67a2bf30.js';

const infoPanelCss = ".cards{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}@media (min-width:640px){.cards{-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}}";

const InfoPanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //
        this.colour = 'transparent';
        this.padding = 'none';
    }
    //
    render() {
        return (h("tf-card", { colour: this.colour, padding: this.padding }, h("div", { class: `cards` }, h("slot", null))));
    }
};
InfoPanel.style = infoPanelCss;

export { InfoPanel as tf_info_panel };
