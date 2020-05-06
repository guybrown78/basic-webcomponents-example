import { Component, h } from '@stencil/core';
export class Divider {
    render() {
        return (h("div", { class: "wrapper" },
            h("div", { class: "divvy" })));
    }
    static get is() { return "tf-divider"; }
    static get encapsulation() { return "shadow"; }
    static get styles() { return ".wrapper{\n\t\t\tmargin-top: 1.5rem;\n\t\t\tmargin-bottom: 1.5rem;\n\t\t\tmargin-right: auto;\n\t\t\tmargin-left: auto;\n\t\t\twidth: 100%;\n\t\t}\n\t\t.divvy{\n\t\t\tdisplay:flex;\n\t\t\twidth: 100%;\n\t\t\theight:1px;\n\t\t\tbackground-color:#cbd5e0;\n\t\t}"; }
}
