'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const infoPanelCss = ".cards{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}@media (min-width:640px){.cards{-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}}";

const InfoPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        //
        this.colour = 'transparent';
        this.padding = 'none';
    }
    //
    render() {
        return (index.h("tf-card", { colour: this.colour, padding: this.padding }, index.h("div", { class: `cards` }, index.h("slot", null))));
    }
};
InfoPanel.style = infoPanelCss;

exports.tf_info_panel = InfoPanel;
