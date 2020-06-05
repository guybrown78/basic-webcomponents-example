import { r as registerInstance, h } from './index-67a2bf30.js';
var infoCardCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}.card-container{min-width:100%;max-width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;position:relative;overflow:hidden;-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.card-header{padding:.5rem .25rem 1.5rem;font-size:.875rem;line-height:1.25rem;text-transform:uppercase;font-weight:500;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.card-body,.card-header{background-color:#d0dfe3;border-top-left-radius:.5rem;border-top-right-radius:.5rem}.card-body{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:.75rem .25rem;margin-top:-1rem}.card-footer{min-height:10px;padding:0 .25rem;border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;background-color:#d0dfe3}.footer-contents{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;vertical-align:middle;-ms-flex-align:center;align-items:center;padding-top:.5rem;padding-bottom:.5rem;border-style:solid;border-width:1px 0 0}@media (min-width:640px){.card-container{min-width:195px;max-width:195px}}";
var StatDataCard = /** @class */ (function () {
    function StatDataCard(hostRef) {
        registerInstance(this, hostRef);
        this.tabColour = 'default';
        this.colour = 'default';
        this.showFooter = false;
        this.footerBorder = 'none';
    }
    StatDataCard.prototype.render = function () {
        var footer = null;
        if (this.showFooter) {
            footer = (h("div", { class: "footer-contents colour-" + this.footerBorder }, h("slot", { name: "footer" })));
        }
        return [
            // <div class={`info-card-container tab-${this.tabColour}`}>
            // 	<div class="info-card">
            // 		<dl>
            // 			<dt class={`tab-${this.tabColour}`}>
            // 				<slot name="tab-title" />
            // 			</dt>
            // 			<dd class={`colour-${this.colour}`}>
            // 				<slot name="data" />
            // 			</dd>
            // 		</dl>
            // 		{ footer }
            // 	</div>
            // </div>,
            h("section", { class: "card-container" }, h("header", { class: "card-header tab-" + this.tabColour }, h("slot", { name: "tab-title" })), h("div", { class: "card-body colour-" + this.colour }, h("slot", { name: "data" })), h("footer", { class: "card-footer colour-" + this.colour }, footer))
        ];
    };
    return StatDataCard;
}());
StatDataCard.style = infoCardCss;
export { StatDataCard as tf_info_card };
