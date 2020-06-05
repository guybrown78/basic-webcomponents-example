import { r as registerInstance, h, g as getElement } from './index-67a2bf30.js';
var nodeRowCss = "#node-row,#node-row-header{padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.75rem;padding-right:0.75rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1 1 0%;flex:1 1 0%}#node-row{margin-bottom:0.5rem;background-color:#ffffff;border-radius:0.25rem;-webkit-box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05)}#node-row-header{margin-bottom:0.25rem;background-color:transparent}::slotted(*){display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto}::slotted(span),span{margin:0;padding:0;padding-right:0.5rem;font-size:1rem;line-height:1rem;font-family:\"Roboto Condensed\", sans-serif}::slotted(h3),h3{margin-top:0.25rem;margin-bottom:0.25rem;margin-left:0;margin-right:0;padding:0;padding-right:0.5rem;font-size:0.75rem;line-height:1.25;font-weight:400;font-family:\"Roboto Condensed\", sans-serif;text-transform:uppercase;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}tf-node-row-cell-h5,::slotted([slot=mobilecellheader]){display:none;position:absolute;top:0px;left:0px;z-index:10}.row-cell-header,::slotted(h5),h5{font-size:11px;line-height:11px;margin-top:0.25rem;margin-bottom:0.25rem;margin-left:0;margin-right:0;padding:0;font-family:\"Roboto Condensed\", sans-serif;text-transform:uppercase;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#D0DFE3}.flex-cell{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:row;flex-direction:row;position:relative}.flex-cell.main-flex-start,.flex-cell.main-start,.flex-cell.main-default{-ms-flex-pack:start;justify-content:flex-start}.flex-cell.main-center{-ms-flex-pack:center;justify-content:center}.flex-cell.main-flex-end,.flex-cell.main-end{-ms-flex-pack:end;justify-content:flex-end}.flex-cell.main-space-around,.flex-cell.main-around{-ms-flex-pack:distribute;justify-content:space-around}.flex-cell.main-space-between,.flex-cell.main-between{-ms-flex-pack:justify;justify-content:space-between}.flex-cell.main-space-evenly,.flex-cell.main-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.flex-cell.cross-flex-start,.flex-cell.cross-start,.flex-cell.cross-default{-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:start;align-content:flex-start}.flex-cell.cross-center{-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.flex-cell.cross-flex-end,.flex-cell.cross-end{-ms-flex-align:end;align-items:flex-end;-ms-flex-line-pack:end;align-content:flex-end}.flex-cell.cross-space-around,.flex-cell.cross-around{-ms-flex-align:space-around;align-items:space-around;-ms-flex-line-pack:distribute;align-content:space-around}.flex-cell.cross-space-between,.flex-cell.cross-between{-ms-flex-align:space-between;align-items:space-between;-ms-flex-line-pack:justify;align-content:space-between}.flex-cell.cross-stretch{-ms-flex-align:stretch;align-items:stretch}.flex-cell.cross-baseline{-ms-flex-align:baseline;align-items:baseline}@media (max-width: 640px){#node-row.responsive{-ms-flex-wrap:wrap;flex-wrap:wrap}#node-row-header.responsive{display:none}.flex-cell.responsive{width:100% !important;padding-top:0.5rem;padding-bottom:0.5rem;border-color:#D0DFE3;border-style:solid;border-top-width:0;border-left-width:0;border-right-width:0;border-bottom-width:1px}.flex-cell.responsive-header{padding-top:1.25rem}.flex-cell.responsive:last-of-type{border-bottom-width:0}.flex-cell.responsive-header tf-node-row-cell-h5,.flex-cell.responsive-header ::slotted([slot=mobilecellheader]){display:block}}";
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
