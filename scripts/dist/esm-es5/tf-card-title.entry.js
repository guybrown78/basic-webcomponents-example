import { r as registerInstance, h } from './index-67a2bf30.js';
var cardTitleCss = "h2{-webkit-margin-before:20px;margin-block-start:20px;-webkit-margin-after:15px;margin-block-end:15px;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;margin-left:0;margin-right:0;font-family:Roboto Condensed,sans-serif;font-size:22px;line-height:22px;font-weight:700;display:block}h2.blue,h2.default{color:#224595}h2.white{color:#fff}";
var CardTitle = /** @class */ (function () {
    function CardTitle(hostRef) {
        registerInstance(this, hostRef);
        this.colour = "blue";
    }
    CardTitle.prototype.render = function () {
        return (h("h2", { class: this.colour }, h("slot", null)));
    };
    return CardTitle;
}());
CardTitle.style = cardTitleCss;
export { CardTitle as tf_card_title };
