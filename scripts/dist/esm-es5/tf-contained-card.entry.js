import { r as registerInstance, h } from './index-67a2bf30.js';
var cardContainerCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}#card-container{display:-ms-flexbox;display:flex;margin-bottom:1.375rem}@media only screen and (max-width:640px){#card-container{-ms-flex-direction:column;flex-direction:column;margin-bottom:0}}#contained-card{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex:1;flex:1;padding:.9375rem 1.375rem;margin-bottom:1.375rem;border-radius:.75rem;-webkit-box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);min-height:100%;height:inherit}#contained-card.default,#contained-card.grey{background-color:#d0dfe3}#contained-card.navy{background-color:#363154}#contained-card-slot-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}";
var ContainedCard = /** @class */ (function () {
    function ContainedCard(hostRef) {
        registerInstance(this, hostRef);
        this.colour = 'default';
    }
    ContainedCard.prototype.render = function () {
        return (h("div", { id: "contained-card", class: this.colour }, h("div", { id: "contained-card-slot-wrapper" }, h("slot", null))));
    };
    return ContainedCard;
}());
ContainedCard.style = cardContainerCss;
export { ContainedCard as tf_contained_card };
