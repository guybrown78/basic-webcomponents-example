import { h } from "@stencil/core";
export class Node {
    render() {
        return (h("div", { id: "node-container" },
            h("slot", null)));
    }
    static get is() { return "tf-node"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["node.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["node.css"]
    }; }
}
