import { h } from "@stencil/core";
export class ValuePair {
    render() {
        return (h("div", { class: "value-pair" },
            h("div", { class: 'dark' },
                h("slot", { name: "dark" })),
            h("div", { class: 'light' },
                h("slot", { name: "light" }))));
    }
    static get is() { return "tf-value-pair"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["value-pair.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["value-pair.css"]
    }; }
}
