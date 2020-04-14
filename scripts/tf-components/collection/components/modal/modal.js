import { h } from "@stencil/core";
export class Modal {
    render() {
        return [
            h("div", { id: "backdrop" }),
            h("div", { id: "modal" },
                h("header", null,
                    h("slot", { name: "title" }, this.displayTitle)),
                h("section", { id: "main" },
                    h("slot", null)),
                h("section", { id: "actions" },
                    h("button", { id: "cancel-btn" }, "Cancel"),
                    h("button", { id: "confirm-btn" }, "OK")))
        ];
    }
    static get is() { return "tf-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./modal.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["modal.css"]
    }; }
    static get properties() { return {
        "displayTitle": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "display-title",
            "reflect": true
        }
    }; }
}
