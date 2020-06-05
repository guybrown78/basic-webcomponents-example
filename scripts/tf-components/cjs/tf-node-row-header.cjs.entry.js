'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const nodeRowCss = "#node-row,#node-row-header{padding:.25rem .75rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1 1 0%;flex:1 1 0%}#node-row{margin-bottom:.5rem;background-color:#fff;border-radius:.25rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}#node-row-header{margin-bottom:.25rem;background-color:transparent}span{margin:0;padding:0 .5rem 0 0;font-size:1rem;line-height:1rem;font-family:Roboto Condensed,sans-serif}tf-node-row-cell-h5{display:none;position:absolute;top:0;left:0;z-index:10}.row-cell-header,h5{font-size:11px;line-height:11px;margin:.25rem 0;padding:0;font-family:Roboto Condensed,sans-serif;text-transform:uppercase;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#d0dfe3}.flex-cell{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:row;flex-direction:row;position:relative}@media (max-width:640px){#node-row.responsive{-ms-flex-wrap:wrap;flex-wrap:wrap}#node-row-header.responsive{display:none}.flex-cell.responsive{width:100%!important;padding-top:.5rem;padding-bottom:.5rem;border:solid #d0dfe3;border-width:0 0 1px}.flex-cell.responsive-header{padding-top:1.25rem}.flex-cell.responsive:last-of-type{border-bottom-width:0}.flex-cell.responsive-header ::slotted([slot=mobilecellheader]),.flex-cell.responsive-header tf-node-row-cell-h5{display:block}}";

const NodeRow = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.mobileHide = true;
        this.cells = [];
    }
    componentWillLoad() {
        const items = this.slotElement.getElementsByTagName('tf-node-row-cell');
        Array.from(items).forEach(cell => {
            this.cells.push({
                cWidth: cell.getAttribute('c-width'),
                layoutAlign: cell.getAttribute('layout-align') ? cell.getAttribute('layout-align') : "flex-start flex-start",
                body: cell.innerHTML
            });
        });
    }
    render() {
        return (index.h("div", { id: "node-row-header", class: `
					${this.mobileHide ? 'responsive' : ''} 
				` }, this.cells.map(cell => {
            let styles = {};
            if (cell.cWidth) {
                styles['flex'] = '0 1 auto';
                styles['width'] = cell.cWidth;
            }
            const axisLayout = cell.layoutAlign.split(" ");
            const mainAxis = axisLayout[0] ? axisLayout[0] : 'default';
            const crossAxis = axisLayout[1] ? axisLayout[1] : 'default';
            return (index.h("div", { style: styles, class: `
								flex-cell
								main-${mainAxis} 
								cross-${crossAxis} 
							`, innerHTML: cell.body }));
        })));
    }
    get slotElement() { return index.getElement(this); }
};
NodeRow.style = nodeRowCss;

exports.tf_node_row_header = NodeRow;
