import { h } from "@stencil/core";
export class ListWrappingItem {
    constructor() {
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
        return (h("li", null,
            h("a", { href: "#" },
                h("div", { class: "list-item-container" },
                    h("div", { class: "list-item" }, this.itemData.map((item, i) => (h("tf-list-wrapping-cell", { order: i, style: this.getCellStyle(item.contentAlign), innerHTML: item.body })))),
                    h("div", { class: "chevron-container" },
                        h("svg", { class: "chevron-svg", fill: "currentColor", viewBox: "0 0 20 20" },
                            h("path", { "fill-rule": "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", "clip-rule": "evenodd" })))))));
    }
    static get is() { return "tf-list-wrapping-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["list-wrapping-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["list-wrapping-item.css"]
    }; }
    static get elementRef() { return "slotElement"; }
}
