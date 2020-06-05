import { r as registerInstance, h, g as getElement } from './index-67a2bf30.js';
var nodeRowCss = "#node-row,#node-row-header{padding:.25rem .75rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1 1 0%;flex:1 1 0%}#node-row{margin-bottom:.5rem;background-color:#fff;border-radius:.25rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}#node-row-header{margin-bottom:.25rem;background-color:transparent}span{margin:0;padding:0 .5rem 0 0;font-size:1rem;line-height:1rem;font-family:Roboto Condensed,sans-serif}tf-node-row-cell-h5{display:none;position:absolute;top:0;left:0;z-index:10}.row-cell-header,h5{font-size:11px;line-height:11px;margin:.25rem 0;padding:0;font-family:Roboto Condensed,sans-serif;text-transform:uppercase;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#d0dfe3}.flex-cell{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:row;flex-direction:row;position:relative}@media (max-width:640px){#node-row.responsive{-ms-flex-wrap:wrap;flex-wrap:wrap}#node-row-header.responsive{display:none}.flex-cell.responsive{width:100%!important;padding-top:.5rem;padding-bottom:.5rem;border:solid #d0dfe3;border-width:0 0 1px}.flex-cell.responsive-header{padding-top:1.25rem}.flex-cell.responsive:last-of-type{border-bottom-width:0}.flex-cell.responsive-header ::slotted([slot=mobilecellheader]),.flex-cell.responsive-header tf-node-row-cell-h5{display:block}}";
var NodeRow = /** @class */ (function () {
    function NodeRow(hostRef) {
        registerInstance(this, hostRef);
        this.mobileWrap = true;
        this.cells = [];
    }
    NodeRow.prototype.onPageResize = function (event) {
        this.checkScreenWidth(event.target.innerWidth);
    };
    NodeRow.prototype.checkScreenWidth = function (screenWidth) {
        this.isMobile = screenWidth <= 640 ? true : false;
    };
    NodeRow.prototype.componentWillLoad = function () {
        var _this = this;
        var items = this.slotElement.getElementsByTagName('tf-node-row-cell');
        Array.from(items).forEach(function (cell) {
            var lAlign = cell.getAttribute('layout-align');
            var mAlign = cell.getAttribute('mobile-layout-align');
            var layoutAlign = lAlign ? lAlign : "flex-start flex-start";
            //
            var al = layoutAlign.split(" ");
            var mainAxis = al[0] ? al[0] : 'default';
            var crossAxis = al[1] ? al[1] : 'default';
            //
            var mal = mAlign ? mAlign.split(" ") : layoutAlign.split(" ");
            var mobileMainAxis = mal[0] ? mal[0] : 'default';
            var mobileCrossAxis = mal[1] ? mal[1] : 'default';
            //
            var hasMobileHeader = !_this.mobileWrap ? false : cell.innerHTML.includes("tf-node-row-cell-h5");
            _this.cells.push({
                cWidth: cell.getAttribute('c-width'),
                mainAxis: mainAxis,
                crossAxis: crossAxis,
                mobileMainAxis: mobileMainAxis,
                mobileCrossAxis: mobileCrossAxis,
                hasMobileHeader: hasMobileHeader,
                body: cell.innerHTML
            });
        });
        this.checkScreenWidth(window.innerWidth);
    };
    NodeRow.prototype.render = function () {
        var _this = this;
        return (h("div", { id: "node-row", class: "\n\t\t\t\t\t" + (this.mobileWrap ? 'responsive' : '') + " \n\t\t\t\t" }, this.cells.map(function (cell) {
            var styles = {};
            if (cell.cWidth === "flex") {
                styles['flex'] = '1 1 0';
            }
            else if (cell.cWidth) {
                styles['flex'] = '0 1 auto';
                styles['width'] = cell.cWidth;
            }
            return (h("div", { style: styles, class: "\n\t\t\t\t\t\t\t\tflex-cell\n\n\t\t\t\t\t\t\t\t" + (_this.mobileWrap ? 'responsive' : '') + " \n\t\t\t\t\t\t\t\t" + (cell.hasMobileHeader ? 'responsive-header' : '') + "\n\t\t\t\t\t\t\t\tmain-" + (_this.isMobile ? cell.mobileMainAxis : cell.mainAxis) + " \n\t\t\t\t\t\t\t\tcross-" + (_this.isMobile ? cell.mobileCrossAxis : cell.crossAxis) + " \n\t\t\t\t\t\t\t", innerHTML: cell.body }));
        })));
    };
    Object.defineProperty(NodeRow.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return NodeRow;
}());
NodeRow.style = nodeRowCss;
export { NodeRow as tf_node_row };
