import { r as registerInstance, h } from './index-67a2bf30.js';
var infoCardCss = "*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}.card-container{min-width:100%;max-width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;position:relative;overflow:hidden;-webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)}.card-header{padding-left:0.25rem;padding-right:0.25rem;padding-top:0.5rem;padding-bottom:1.5rem;font-size:0.875rem;line-height:1.25rem;text-transform:uppercase;font-weight:500;text-align:center;background-color:#D0DFE3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-top-left-radius:0.5rem;border-top-right-radius:0.5rem}.card-header.tab-default,.card-header.tab-aqua,.card-header.tab-grey{color:#363154}.card-header.tab-blue,.card-header.tab-navy{color:#ffffff}.card-body{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding-left:0.25rem;padding-right:0.25rem;padding-top:0.75rem;padding-bottom:0.75rem;margin-top:-1rem;background-color:#D0DFE3;border-top-left-radius:0.5rem;border-top-right-radius:0.5rem}.card-body.colour-default,.card-body.colour-white{background-color:#ffffff}.card-body.colour-navy{background-color:#363154}.card-body.colour-blue{background-color:#224595}.card-body.colour-grey{background-color:#D0DFE3}.card-footer{min-height:10px;padding-left:0.25rem;padding-right:0.25rem;padding-top:0;padding-bottom:0;border-bottom-right-radius:0.5rem;border-bottom-left-radius:0.5rem;background-color:#D0DFE3}.tab-default,.tab-aqua{background-color:#32F7DC}.tab-grey{background-color:#D0DFE3}.tab-blue{background-color:#224595}.tab-navy{background-color:#224595}footer.colour-default,footer.colour-white{background-color:#ffffff}footer.colour-navy{background-color:#363154}footer.colour-blue{background-color:#224595}footer.colour-grey{background-color:#D0DFE3}.footer-contents{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;vertical-align:middle;-ms-flex-align:center;align-items:center;padding-top:0.5rem;padding-bottom:0.5rem;border-style:solid;border-top-width:1px;border-bottom-width:0;border-left-width:0;border-right-width:0}.footer-contents.colour-default,.footer-contents.colour-none{border-color:transparent}.footer-contents.colour-blue{border-color:#224595}.footer-contents.colour-navy{border-color:#363154}.footer-contents.colour-aqua{border-color:#32F7DC}.footer-contents.colour-grey{border-color:#D0DFE3}@media (min-width: 640px){.card-container{min-width:195px;max-width:195px}}";
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
