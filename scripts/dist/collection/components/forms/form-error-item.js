import { Component, h } from '@stencil/core';
export class FormErrors {
    render() {
        return (h("li", { class: "form-error-list-item" },
            h("tf-span", { colour: "white" },
                h("slot", null))));
    }
    static get is() { return "tf-form-error-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["form-styles.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["form-styles.css"]
    }; }
}
