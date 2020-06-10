import { Component, h } from '@stencil/core';
export class FormTitle {
    render() {
        return (h("div", { class: "form-title" },
            h("slot", null)));
    }
    static get is() { return "tf-form-title"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["form-styles.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["form-styles.css"]
    }; }
}
