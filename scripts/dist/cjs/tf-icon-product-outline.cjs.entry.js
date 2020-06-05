'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const productCss = ".product-icon,.product-logo{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.product-logo{-webkit-transform:scale(1.185);transform:scale(1.185)}.product-logo svg{width:100%;height:100%;fill:transparent}.initials{display:-ms-flexbox;display:flex;position:absolute;z-index:5;text-transform:uppercase;font-weight:400;text-align:center}";

const ProductOutline = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.colour = 'default';
        this.size = 'default';
    }
    render() {
        return (index.h("div", { class: `product-icon colour-${this.colour} size-${this.size}` }, index.h("div", { class: "initials" }, this.initials), index.h("tf-icon-hexagon-outline", null)));
    }
};
ProductOutline.style = productCss;

exports.tf_icon_product_outline = ProductOutline;
