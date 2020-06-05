import { Component, h, State, Prop, Element, Listen } from '@stencil/core';
export class NodeRow {
    constructor() {
        this.mobileWrap = true;
        this.cells = [];
    }
    onPageResize(event) {
        this.checkScreenWidth(event.target.innerWidth);
    }
    checkScreenWidth(screenWidth) {
        this.isMobile = screenWidth <= 640 ? true : false;
    }
    componentWillLoad() {
        const items = this.slotElement.getElementsByTagName('tf-node-row-cell');
        Array.from(items).forEach(cell => {
            const lAlign = cell.getAttribute('layout-align');
            const mAlign = cell.getAttribute('mobile-layout-align');
            const layoutAlign = lAlign ? lAlign : "flex-start flex-start";
            //
            const al = layoutAlign.split(" ");
            const mainAxis = al[0] ? al[0] : 'default';
            const crossAxis = al[1] ? al[1] : 'default';
            //
            const mal = mAlign ? mAlign.split(" ") : layoutAlign.split(" ");
            const mobileMainAxis = mal[0] ? mal[0] : 'default';
            const mobileCrossAxis = mal[1] ? mal[1] : 'default';
            //
            const hasMobileHeader = !this.mobileWrap ? false : cell.innerHTML.includes("tf-node-row-cell-h5");
            this.cells.push({
                cWidth: cell.getAttribute('c-width'),
                mainAxis,
                crossAxis,
                mobileMainAxis,
                mobileCrossAxis,
                hasMobileHeader,
                body: cell.innerHTML
            });
        });
        this.checkScreenWidth(window.innerWidth);
    }
    render() {
        return (h("div", { id: "node-row", class: `
					${this.mobileWrap ? 'responsive' : ''} 
				` }, this.cells.map(cell => {
            let styles = {};
            if (cell.cWidth === "flex") {
                styles['flex'] = '1 1 0';
            }
            else if (cell.cWidth) {
                styles['flex'] = '0 1 auto';
                styles['width'] = cell.cWidth;
            }
            return (h("div", { style: styles, class: `
								flex-cell

								${this.mobileWrap ? 'responsive' : ''} 
								${cell.hasMobileHeader ? 'responsive-header' : ''}
								main-${this.isMobile ? cell.mobileMainAxis : cell.mainAxis} 
								cross-${this.isMobile ? cell.mobileCrossAxis : cell.crossAxis} 
							`, innerHTML: cell.body }));
        })));
    }
    static get is() { return "tf-node-row"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["node-row.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["node-row.css"]
    }; }
    static get properties() { return {
        "mobileWrap": {
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
            "attribute": "mobile-wrap",
            "reflect": true,
            "defaultValue": "true"
        }
    }; }
    static get states() { return {
        "isMobile": {}
    }; }
    static get elementRef() { return "slotElement"; }
    static get listeners() { return [{
            "name": "resize",
            "method": "onPageResize",
            "target": "window",
            "capture": true,
            "passive": true
        }]; }
}
