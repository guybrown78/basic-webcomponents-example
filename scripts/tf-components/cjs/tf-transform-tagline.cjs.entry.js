'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const appFooterCss = "footer{padding:0 1.375rem;margin-top:1.375rem;min-height:4.625rem;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.tagline{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400;color:#fff}";

const AppHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("span", { class: "tagline" }, "Transform, part of the 3T Energy Group. Together\u00A0we\u00A0are\u00A0Transforming\u00A0Training\u00A0with\u00A0Technology."));
    }
};
AppHeader.style = appFooterCss;

exports.tf_transform_tagline = AppHeader;
