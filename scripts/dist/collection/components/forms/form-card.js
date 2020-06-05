import { Component, h } from '@stencil/core';
export class FormCard {
    render() {
        return (h("div", { class: "form-card" },
            h("slot", null)));
    }
    static get is() { return "tf-form-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["form-styles.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["form-styles.css"]
    }; }
}
