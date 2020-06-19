import { Component, h, State, Element } from '@stencil/core';
export class StatsPanel {
    constructor() {
        this.cardCount = 3;
        this.maxCardCount = 6;
    }
    componentWillLoad() {
        console.log(this.slotElement.children);
        //
        // const cardEls:HTMLCollectionOf<HTMLTfStatDataCardElement> = this.slotElement.getElementsByTagName('tf-stat-data-card');
        //
        this.cardCount = this.slotElement.children.length > this.maxCardCount ? this.maxCardCount : this.slotElement.children.length;
        //
        // Array.from(this.slotElement.children).forEach(n => {
        // 	// this.cardItems.push({
        // 	// 	html:n.innerHTML
        // 	// })
        // })
    }
    render() {
        return (h("tf-card", { colour: "navy" },
            h("div", { class: `
					stats-flex-box 
				` },
                h("slot", null))));
    }
    static get is() { return "tf-stats-panel"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["stats-panel.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["stats-panel.css"]
    }; }
    static get states() { return {
        "cardCount": {}
    }; }
    static get elementRef() { return "slotElement"; }
}
