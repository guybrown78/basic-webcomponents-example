import { Component, h } from '@stencil/core';
export class DropdownOption {
    render() {
        return (h("slot", null));
    }
    static get is() { return "tf-dropdown-option"; }
}
