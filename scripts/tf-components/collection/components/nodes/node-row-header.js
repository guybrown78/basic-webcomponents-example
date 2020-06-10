import { Component, h, Prop, Element } from '@stencil/core';
export class NodeRow {
    constructor() {
        this.mobileHide = true;
        this.cells = [];
    }
    componentWillLoad() {
        const items = this.slotElement.getElementsByTagName('tf-node-row-cell');
        Array.from(items).forEach(cell => {
            this.cells.push({
                cWidth: cell.getAttribute('c-width'),
                layoutAlign: cell.getAttribute('layout-align') ? cell.getAttribute('layout-align') : "flex-start flex-start",
                body: cell.innerHTML
            });
        });
    }
    render() {
        return (h("div", { id: "node-row-header", class: `
					${this.mobileHide ? 'responsive' : ''} 
				` }, this.cells.map(cell => {
            let styles = {};
            if (cell.cWidth) {
                styles['flex'] = '0 1 auto';
                styles['width'] = cell.cWidth;
            }
            const axisLayout = cell.layoutAlign.split(" ");
            const mainAxis = axisLayout[0] ? axisLayout[0] : 'default';
            const crossAxis = axisLayout[1] ? axisLayout[1] : 'default';
            return (h("div", { style: styles, class: `
								flex-cell
								main-${mainAxis} 
								cross-${crossAxis} 
							`, innerHTML: cell.body }));
        })));
    }
    static get is() { return "tf-node-row-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["node-row.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["node-row.css"]
    }; }
    static get properties() { return {
        "mobileHide": {
            "type": "boolean",
            "mutable": true,
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
            "attribute": "mobile-hide",
            "reflect": true,
            "defaultValue": "true"
        }
    }; }
    static get elementRef() { return "slotElement"; }
}
