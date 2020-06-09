import { r as registerInstance, h } from './index-67a2bf30.js';
var infoPanelCss = ".cards{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}@media (min-width:640px){.cards{-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}}";
var InfoPanel = /** @class */ (function () {
    function InfoPanel(hostRef) {
        registerInstance(this, hostRef);
        //
        this.colour = 'transparent';
        this.padding = 'none';
    }
    //
    InfoPanel.prototype.render = function () {
        return (h("tf-card", { colour: this.colour, padding: this.padding }, h("div", { class: "cards" }, h("slot", null))));
    };
    return InfoPanel;
}());
InfoPanel.style = infoPanelCss;
export { InfoPanel as tf_info_panel };
