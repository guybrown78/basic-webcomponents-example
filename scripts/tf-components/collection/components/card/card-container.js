import { Component, h, Prop, Element } from '@stencil/core';
export class CardContainer {
    constructor() {
        this.colour = 'default';
        this.cardItems = [];
    }
    componentWillLoad() {
        const nodeEls = this.slotElement.getElementsByTagName('tf-contained-card');
        //
        this.totalCards = Array.from(nodeEls).length;
        // Array.from(nodeEls).forEach(n => {
        // 	this.cardItems.push({
        // 		html:n.innerHTML
        // 	})
        // 	n.innerHTML = ""
        // 	n = null;
        // })
    }
    render() {
        const slots = Array.apply(null, { length: this.totalCards })
            .map((n, i) => {
            n = i + 1;
            const slotName = `slot${n}`;
            return (h("div", { class: "parent-card-slot-wrapper" },
                h("slot", { name: slotName })));
        });
        // const slots = this.cardItems.map((item,i) => {
        // 		const slotName = `slot${i + 1}`
        // 		return (
        // 			<div class="parent-card-slot-wrapper">
        // 				<tf-contained-card innerHTML={item.html} />
        // 				<div class="hidden-slot"><slot name={slotName} /></div>
        // 			</div>
        // 		)
        // 	})
        return (h("div", { id: "card-container" }, slots));
    }
    static get is() { return "tf-card-container"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["card-container.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["card-container.css"]
    }; }
    static get properties() { return {
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
        }
    }; }
    static get elementRef() { return "slotElement"; }
}
