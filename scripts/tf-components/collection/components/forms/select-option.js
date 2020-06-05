import { Component, h } from '@stencil/core';
export class SelectOption {
    render() {
        return (h("slot", null));
    }
    static get is() { return "tf-select-option"; }
    static get encapsulation() { return "shadow"; }
    static get styles() { return "::slotted(*){\n\t\t\tcolor: red;\n\t\t}"; }
}
