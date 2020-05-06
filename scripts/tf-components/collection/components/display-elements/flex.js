import { Component, h, Prop } from '@stencil/core';
export class Flex {
    constructor() {
        this.layout = 'row';
        /*
            Layout
            (default)	flex-direction: row
            row	flex-direction: row
            row-reverse	flex-direction: row-reverse
            column	flex-direction: column
            column-reverse	flex-direction: column-reverse
        */
        this.layoutAlign = 'flex-start flex-start';
        /*
            Layout align - Main axis
            (default)	justify-content: flex-start
            start or flex-start	justify-content: flex-start
            center	justify-content: center
            end or flex-end	justify-content: flex-end
            space-around or around	justify-content: space-around
            space-between or between	justify-content: space-between
            space-evenly or evenly	justify-content: space-evenly
    
            Layout align - Cross axis
            (default)	align-items: stretch; align-content: stretch
            start or flex-start	align-items: flex-start; align-content: flex-start
            center	align-items: center; align-content: center
            end or flex-end	align-items: flex-end; align-content: flex-end
            space-around	align-items: space-around; align-content: space-around
            space-between	align-items: space-between; align-content: space-between
            stretch	max-width: 100% if flex-direction: column; else max-height: 100%
            baseline	align-items: baseline; align-content: stretch
        */
        this.fillHeight = false;
        this.fillWidth = false;
    }
    //
    render() {
        const axisLayout = this.layoutAlign.split(" ");
        const mainAxis = axisLayout[0] ? axisLayout[0] : 'default';
        const crossAxis = axisLayout[1] ? axisLayout[1] : 'default';
        return (h("div", { class: `
				tf-flex 
				${this.layout} 
				main-${mainAxis} 
				cross-${crossAxis} 
				${this.fillHeight ? 'fill-height' : ''}
				${this.fillWidth ? 'fill-width' : ''}
			` },
            h("slot", null)));
    }
    static get is() { return "tf-flex"; }
    static get originalStyleUrls() { return {
        "$": ["flex.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["flex.css"]
    }; }
    static get properties() { return {
        "layout": {
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
            "attribute": "layout",
            "reflect": true,
            "defaultValue": "'row'"
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
        },
        "fillHeight": {
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
            "attribute": "fill-height",
            "reflect": true,
            "defaultValue": "false"
        },
        "fillWidth": {
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
            "attribute": "fill-width",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
}
