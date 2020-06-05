import { Component, h, Element } from '@stencil/core';
export class ListWrappingItem {
    getCellStyle(contentAlign) {
        return {
            display: 'flex',
            flex: '1',
            justifyContent: contentAlign,
        };
    }
    render() {
        return (h("li", null,
            h("slot", null)));
    }
    static get is() { return "tf-list-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["list-wrapping-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["list-wrapping-item.css"]
    }; }
    static get elementRef() { return "slotElement"; }
}
