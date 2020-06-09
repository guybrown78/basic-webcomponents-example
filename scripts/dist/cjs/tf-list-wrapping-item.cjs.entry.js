'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const listWrappingItemCss = "li{margin-bottom:.5rem;padding:.25rem .75rem;border-radius:.25rem}.list-container,li{background-color:#fff;-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);overflow:hidden}a{display:block;text-decoration:none;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}a:hover{background-color:#fafbfc}a:focus{outline:0;background-color:#f9fafb}.list-item-container{padding:.5rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.list-item{min-width:0;-ms-flex:1 1 0%;flex:1 1 0%}.chevron-container{margin-left:1.25rem;-ms-flex-negative:0;flex-shrink:0}.chevron-svg{height:1.25rem;width:1.25rem;color:#d0dfe3}@media (min-width:640px){.list-container{border-radius:.25rem}.list-item-container{padding-left:1.5rem;padding-right:1.5rem}.list-item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}}";

const ListWrappingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.itemData = [];
    }
    componentWillLoad() {
        // parse items
        //tf-list-wrapping-cell
        const items = this.slotElement.getElementsByTagName('tf-list-wrapping-cell');
        Array.from(items).forEach(cell => {
            this.itemData.push({
                contentAlign: cell.getAttribute('content-align'),
                body: cell.innerHTML
            });
        });
    }
    getCellStyle(contentAlign) {
        // let style = {
        // 	display: 'flex',
        // }
        //
        return {
            display: 'flex',
            flex: '1',
            justifyContent: contentAlign,
        };
    }
    render() {
        return (index.h("li", null, index.h("a", { href: "#" }, index.h("div", { class: "list-item-container" }, index.h("div", { class: "list-item" }, this.itemData.map((item, i) => (index.h("tf-list-wrapping-cell", { order: i, style: this.getCellStyle(item.contentAlign), innerHTML: item.body })))), index.h("div", { class: "chevron-container" }, index.h("svg", { class: "chevron-svg", fill: "currentColor", viewBox: "0 0 20 20" }, index.h("path", { "fill-rule": "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", "clip-rule": "evenodd" })))))));
    }
    get slotElement() { return index.getElement(this); }
};
ListWrappingItem.style = listWrappingItemCss;

exports.tf_list_wrapping_item = ListWrappingItem;
