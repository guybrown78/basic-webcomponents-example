import { Component, h } from '@stencil/core';
export class DropdownOptions {
    render() {
        return (h("slot", null));
    }
    static get is() { return "tf-dropdown-options"; }
}
