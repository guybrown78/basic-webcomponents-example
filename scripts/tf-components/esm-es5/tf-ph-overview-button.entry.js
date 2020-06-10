import { r as registerInstance, c as createEvent, h } from './index-67a2bf30.js';
var overviewButtonCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}.card-container{min-width:100%;max-width:100%;min-height:210px;height:210px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;overflow:hidden;-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);border-radius:.5rem}.card-face,.card-over{height:175px;position:absolute;width:100%}.card-face{z-index:10;bottom:0}.card-over{height:177px;bottom:-177px;z-index:20;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.card-container:hover .card-over{bottom:-2px}.card-header{padding:.5rem .25rem 1.5rem;font-size:.875rem;line-height:1.25rem;text-transform:uppercase;font-weight:500;text-align:center;color:#363154;background-color:#32f7dc;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-top-left-radius:.5rem;border-top-right-radius:.5rem}.card-body{height:134px;background-color:#fff}.card-body,.card-over-body{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:.75rem .25rem;border-top-left-radius:.5rem;border-top-right-radius:.5rem}.card-over-body{background-color:#363154;height:100%}#product-title-span{width:80%}.product-cta{cursor:pointer}.card-footer{min-height:10px;padding:0 .25rem;border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;background-color:#fff}.footer-contents{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding-top:.5rem;padding-bottom:.5rem;border:solid #224595;border-width:1px 0 0}.over-text{width:60%}@media (min-width:640px){.card-container{min-width:195px;max-width:195px}.over-text{width:90%}}";
var StatDataCard = /** @class */ (function () {
    function StatDataCard(hostRef) {
        registerInstance(this, hostRef);
        this.cardTitle = 'Software Module';
        this.productTitle = '';
        this.productDescription = '';
        this.productCta = 'Find out more ask your Account Manager';
        this.productId = '';
        this.isActive = false;
        this.marketingCtaAsButton = false;
        this.tfPhOverviewButtonClicked = createEvent(this, "tfPhOverviewButtonClicked", 7);
        this.tfPhOverviewFindOutMoreClicked = createEvent(this, "tfPhOverviewFindOutMoreClicked", 7);
    }
    StatDataCard.prototype.onProductButtonClicked = function () {
        this.tfPhOverviewButtonClicked.emit({
            productId: this.productId,
            productTitle: this.productTitle,
            productInitials: this.productInitials,
            productCode: this.productCode
        });
    };
    StatDataCard.prototype.onProductFindOutMoreClicked = function () {
        this.tfPhOverviewFindOutMoreClicked.emit({
            productId: this.productId,
            productTitle: this.productTitle,
            productInitials: this.productInitials,
            productCode: this.productCode
        });
    };
    StatDataCard.prototype.componentWillLoad = function () {
        if (!this.productCode) {
            this.productCode = this.productInitials ? this.productInitials : null;
        }
    };
    StatDataCard.prototype.render = function () {
        var overContent = (h("div", { class: "card-over-body" }, h("tf-product-logo", { code: this.productCode, size: "xl" }), h("tf-button", { colour: "aqua", onClick: this.onProductButtonClicked.bind(this) }, "Open")));
        if (!this.isActive) {
            overContent = (h("div", { class: "card-over-body" }, h("tf-span-description", { class: "over-text", colour: "white", "text-align": "center" }, this.productDescription), h("tf-span-description", { class: "over-text " + (this.marketingCtaAsButton ? 'product-cta' : ''), colour: "aqua", "text-align": "center", onClick: this.onProductFindOutMoreClicked.bind(this) }, this.productCta)));
        }
        return [
            h("section", { class: "card-container" }, h("header", { class: "card-header" }, this.cardTitle), h("div", { class: "card-face" }, h("div", { class: "card-body" }, h("tf-product-logo", { colour: "blue", code: this.productCode }), h("tf-span-title", { id: "product-title-span", "text-align": "center", colour: "blue" }, this.productTitle)), h("div", { class: "card-footer" }, h("div", { class: "footer-contents" }, h("tf-status-beacon", { "traffic-light-colour": this.isActive ? "green" : "none" }), h("tf-span-description", { colour: "blue" }, this.isActive ? "ACTIVE" : "INACTIVE")))), h("div", { class: "card-over" }, overContent))
        ];
    };
    return StatDataCard;
}());
StatDataCard.style = overviewButtonCss;
export { StatDataCard as tf_ph_overview_button };
