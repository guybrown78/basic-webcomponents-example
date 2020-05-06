import { r as registerInstance, h } from './index-0c8d3d54.js';

const flexCss = ".tf-flex{display:-ms-flexbox;display:flex}.tf-flex.row,.tf-flex.default{-ms-flex-direction:row;flex-direction:row;border-color:#50F8E1}.tf-flex.row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.tf-flex.column{-ms-flex-direction:column;flex-direction:column}.tf-flex.column-reverse{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.tf-flex.main-flex-start,.tf-flex.main-start,.tf-flex.main-default{-ms-flex-pack:start;justify-content:flex-start}.tf-flex.main-center{-ms-flex-pack:center;justify-content:center}.tf-flex.main-flex-end,.tf-flex.main-end{-ms-flex-pack:end;justify-content:flex-end}.tf-flex.main-space-around,.tf-flex.main-around{-ms-flex-pack:distribute;justify-content:space-around}.tf-flex.main-space-between,.tf-flex.main-between{-ms-flex-pack:justify;justify-content:space-between}.tf-flex.main-space-evenly,.tf-flex.main-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.tf-flex.cross-flex-start,.tf-flex.cross-start,.tf-flex.cross-default{-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:start;align-content:flex-start}.tf-flex.cross-center{-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.tf-flex.cross-flex-end,.tf-flex.cross-end{-ms-flex-align:end;align-items:flex-end;-ms-flex-line-pack:end;align-content:flex-end}.tf-flex.cross-space-around,.tf-flex.cross-around{-ms-flex-align:space-around;align-items:space-around;-ms-flex-line-pack:distribute;align-content:space-around}.tf-flex.cross-space-between,.tf-flex.cross-between{-ms-flex-align:space-between;align-items:space-between;-ms-flex-line-pack:justify;align-content:space-between}.tf-flex.cross-stretch{-ms-flex-align:stretch;align-items:stretch}.tf-flex.cross-baseline{-ms-flex-align:baseline;align-items:baseline}.tf-flex.fill-height{height:100%}";

const Flex = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
			` }, h("slot", null)));
    }
};
Flex.style = flexCss;

export { Flex as tf_flex };
