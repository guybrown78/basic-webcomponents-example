import { h } from "@stencil/core";
export class HexagonButton {
    constructor() {
        this.color = "accent";
    }
    onButtonClickHandler(event) {
        // pauses the native event from being dispatched to allow the 'click' effect on the button
        event.preventDefault();
        event.stopPropagation();
        setTimeout(() => {
            this.el.dispatchEvent(event);
        }, 500);
    }
    render() {
        return (h("button", { tabindex: "0", role: "button", "aria-pressed": "false", class: `sass-hex ${this.color}`, onClick: this.onButtonClickHandler.bind(this) },
            h("slot", null)));
    }
    static get is() { return "tf-hexagon-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["hexagon-button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["hexagon-button.css"]
    }; }
    static get properties() { return {
        "color": {
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
            "attribute": "color",
            "reflect": true,
            "defaultValue": "\"accent\""
        }
    }; }
    static get elementRef() { return "el"; }
}
