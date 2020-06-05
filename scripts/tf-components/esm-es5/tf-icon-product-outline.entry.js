import { r as registerInstance, h } from './index-67a2bf30.js';
var productCss = ".product-icon{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.product-logo{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-transform:scale(1.185);transform:scale(1.185)}.product-logo svg{width:100%;height:100%;fill:transparent}.colour-default,.colour-white{color:#ffffff}.colour-navy{color:#363154}.colour-blue{color:#224595}.colour-aqua{color:#32F7DC}.colour-grey{color:#D0DFE3}.size-xs,.size-extra-small{width:30px;height:34px;line-height:16px;font-size:16px}.size-s,.size-small{width:35px;height:40px;line-height:18px;font-size:18px}.size-m,.size-medium,.size-default{width:40px;height:46px;line-height:20px;font-size:20px}.size-l,.size-large{width:45px;height:52px;line-height:21px;font-size:21px}.size-xl,.size-extra-large{width:50px;height:58px;line-height:23px;font-size:23px}.initials{display:-ms-flexbox;display:flex;position:absolute;z-index:5;text-transform:uppercase;font-weight:400;text-align:center}";
var ProductOutline = /** @class */ (function () {
    function ProductOutline(hostRef) {
        registerInstance(this, hostRef);
        this.colour = 'default';
        this.size = 'default';
    }
    ProductOutline.prototype.render = function () {
        return (h("div", { class: "product-icon colour-" + this.colour + " size-" + this.size }, h("div", { class: "initials" }, this.initials), h("tf-icon-hexagon-outline", null)));
    };
    return ProductOutline;
}());
ProductOutline.style = productCss;
export { ProductOutline as tf_icon_product_outline };
