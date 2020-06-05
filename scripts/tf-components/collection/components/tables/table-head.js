import { Component, h } from '@stencil/core';
export class TableHead {
    render() {
        return (h("slot", null));
    }
    static get is() { return "tf-table-head"; }
}
