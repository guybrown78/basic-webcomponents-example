import { Component, h, Prop } from '@stencil/core';
export class StatDataCard {
    constructor() {
        this.tabColour = 'default';
        this.colour = 'default';
        this.showFooter = false;
        this.footerBorder = 'none';
    }
    render() {
        let footer = null;
        if (this.showFooter) {
            footer = (h("div", { class: `footer-contents colour-${this.footerBorder}` },
                h("slot", { name: "footer" })));
        }
        return [
            // <div class={`info-card-container tab-${this.tabColour}`}>
            // 	<div class="info-card">
            // 		<dl>
            // 			<dt class={`tab-${this.tabColour}`}>
            // 				<slot name="tab-title" />
            // 			</dt>
            // 			<dd class={`colour-${this.colour}`}>
            // 				<slot name="data" />
            // 			</dd>
            // 		</dl>
            // 		{ footer }
            // 	</div>
            // </div>,
            h("section", { class: `card-container` },
                h("header", { class: `card-header tab-${this.tabColour}` },
                    h("slot", { name: "tab-title" })),
                h("div", { class: `card-body colour-${this.colour}` },
                    h("slot", { name: "data" })),
                h("footer", { class: `card-footer colour-${this.colour}` }, footer))
        ];
    }
    static get is() { return "tf-info-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["info-card.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["info-card.css"]
    }; }
    static get properties() { return {
        "tabColour": {
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
            "attribute": "tab-colour",
            "reflect": true,
            "defaultValue": "'default'"
        },
        "colour": {
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
            "attribute": "colour",
            "reflect": true,
            "defaultValue": "'default'"
        },
        "showFooter": {
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
            "attribute": "show-footer",
            "reflect": true,
            "defaultValue": "false"
        },
        "footerBorder": {
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
            "attribute": "footer-border",
            "reflect": true,
            "defaultValue": "'none'"
        }
    }; }
}
