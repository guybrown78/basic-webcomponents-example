import { h } from "@stencil/core";
export class NodeList {
    render() {
        return (h("ul", { id: "node-list" },
            h("slot", null)));
    }
    static get is() { return "tf-node-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["node-list.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["node-list.css"]
    }; }
}
