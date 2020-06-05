'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const flexCss = ".tf-flex{display:-ms-flexbox;display:flex}.tf-flex.default,.tf-flex.row{-ms-flex-direction:row;flex-direction:row;border-color:#50f8e1}.tf-flex.row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.tf-flex.column{-ms-flex-direction:column;flex-direction:column}.tf-flex.column-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.tf-flex.fill-height{height:100%}";

const Flex = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.layout = 'row';
        /*
            Layout
            (default)	flex-direction: row
            row	flex-direction: row
            row-reverse	flex-direction: row-reverse
            column	flex-direction: column
            column-reverse	flex-direction: column-reverse
        */
        //
        this.fx = 'default';
        //
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
        return (index.h("div", { class: `
				tf-flex 
				fx-${this.fx} 
				${this.layout} 
				main-${mainAxis} 
				cross-${crossAxis} 
				${this.fillHeight ? 'fill-height' : ''}
				${this.fillWidth ? 'fill-width' : ''}
			` }, index.h("slot", null)));
    }
};
Flex.style = flexCss;

exports.tf_flex = Flex;
