import { Component, h, Prop } from '@stencil/core';
export class NodeRowCell {
    constructor() {
        this.cWidth = null;
        this.layoutAlign = 'flex-start flex-start';
    }
    render() {
        let styles = {};
        if (this.cWidth === "flex") {
            styles['flex'] = '1 1 0';
        }
        else if (this.cWidth) {
            styles['flex'] = '0 1 auto';
            styles['width'] = this.cWidth;
        }
        // if(this.cWidth){
        // 	styles['flex'] = '0 1 auto';
        // 	styles['width'] = this.cWidth;
        // 	styles['border'] = 'solid 1px black';
        // }
        const axisLayout = this.layoutAlign.split(" ");
        const mainAxis = axisLayout[0] ? axisLayout[0] : 'default';
        const crossAxis = axisLayout[1] ? axisLayout[1] : 'default';
        return (h("div", { style: styles, class: `
					flex-cell
					main-${mainAxis} 
					cross-${crossAxis} 
				` },
            h("slot", { name: "mobilecellheader" }),
            h("slot", null)));
    }
    static get is() { return "tf-node-row-cell"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["node-row.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["node-row.css"]
    }; }
    static get properties() { return {
        "cWidth": {
            "type": "string",
            "mutable": true,
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
            "attribute": "c-width",
            "reflect": true,
            "defaultValue": "null"
        },
        "layoutAlign": {
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
            "attribute": "layout-align",
            "reflect": true,
            "defaultValue": "'flex-start flex-start'"
        }
    }; }
}
