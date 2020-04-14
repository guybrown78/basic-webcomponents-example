import { h } from "@stencil/core";
export class NodeStatusBookend {
    constructor() {
        this.color = "grey";
    }
    render() {
        return (h("div", { id: "delegate-status", class: `
					${this.color} 
					${this.showTooltip ? 'show-tooltip' : ''}
				` }));
    }
    static get is() { return "tf-node-status-bookend"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["node-status-bookend.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["node-status-bookend.css"]
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
            "defaultValue": "\"grey\""
        },
        "showTooltip": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "show-tooltip",
            "reflect": true
        }
    }; }
}
