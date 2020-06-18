'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');
const utils = require('./utils-087faf22.js');

const iconHexagonCss = ".size-s{padding:.5rem .75rem;line-height:1rem}.size-default,.size-m,.size-s{font-size:.875rem;border-radius:.375rem}.size-default,.size-m{padding:.5rem 1rem;line-height:1.25rem}.size-l{padding:.5rem 1rem}.size-l,.size-xl{font-size:1rem;line-height:1.5rem;border-radius:.375rem}.size-xl{padding:.75rem 1.5rem}.colour-blue,.colour-default{background-color:#224595}.colour-aqua{background-color:#32f7dc}.colour-navy{background-color:#363154}.colour-grey{background-color:#d0dfe3}.colour-white{background-color:#fff}.icon-xs-l{margin-left:-.125rem;margin-right:.5rem}.icon-xs-l,.icon-xs-r{height:.75rem;width:.75rem}.icon-xs-r{margin-left:.5rem;margin-right:-.125rem}.icon-s-l{margin-left:-.125rem;margin-right:.5rem}.icon-s-l,.icon-s-r{height:1.25rem;width:1.25rem}.icon-s-r{margin-left:.5rem;margin-right:-.125rem}.icon-default-l,.icon-m-l{margin-left:-.25rem;margin-right:.5rem;height:1.25rem;width:1.25rem}.icon-default-r,.icon-m-r{margin-left:.5rem;margin-right:-.25rem;height:1.25rem;width:1.25rem}.icon-l-l{margin-left:-.25rem;margin-right:.75rem}.icon-l-l,.icon-l-r{height:1.25rem;width:1.25rem}.icon-l-r{margin-left:.75rem;margin-right:-.25rem}.icon-xl-l{margin-left:-.25rem;margin-right:.75rem}.icon-xl-l,.icon-xl-r{height:1.25rem;width:1.25rem}.icon-xl-r{margin-left:.75rem;margin-right:-.25rem}.hex-container{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.icon-btn-size-xs{width:30px;height:34px}.icon-btn-size-s{width:35px;height:40px}.icon-btn-size-default,.icon-btn-size-m{width:40px;height:46px}.icon-btn-size-l{width:45px;height:52px}.icon-btn-size-xl{width:50px;height:58px}.central-icon{display:-ms-flexbox;display:flex;position:absolute;z-index:50;pointer-events:none}.icon-size-xs{width:16px;height:16px}.icon-size-s{width:17px;height:17px}.icon-size-default,.icon-size-l,.icon-size-m{width:18px;height:18px}.icon-size-xl{width:20px;height:20px}.hex-btn{padding:0;display:-ms-flexbox;display:flex;position:relative;width:100%;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.hex-fill,.hex-outline{fill:currentColor}.svg-colour-white{color:#fff}.svg-colour-aqua{color:#32f7dc}.svg-colour-blue,.svg-colour-default{color:#224595}.svg-colour-navy{color:#363154}.svg-colour-grey{color:#d0dfe3}.hexagon{display:-ms-flexbox;display:flex;width:100%;height:100%}.hexagon-svg{fill:rgba(255,255,0,0)}";

const Button = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.size = 'default';
        this.colour = 'default';
        this.outlineColour = null;
        this.icon = null;
    }
    //
    render() {
        return (index.h("div", { class: `
				hex-container 
				${utils.getIconBtnSizeClassname(this.size)}
			` }, index.h("div", { class: "hexagon" }, index.h("svg", { class: `
						 	hexagon-svg
							${utils.getIconBtnSizeClassname(this.size)}
						`, viewBox: "0 0 44 50", xmlns: "http://www.w3.org/2000/svg" }, index.h("g", { stroke: "none", "stroke-width": "0", fill: "none", "fill-rule": "evenodd" }, index.h("path", { class: `
										hex-outline 
										${utils.getSVGColourClassname(!this.outlineColour ? this.colour : this.outlineColour)}
									`, d: "M22.0051334,50 C20.9875773,50 19.94393,49.7081067 19.0307386,49.12432 L2.85420568,39.6510548 C1.00173174,38.642696 -0.12018909,36.5994427 0.0102668206,34.4500464 L0.0102668206,15.5300517 C-0.12018909,13.3806554 1.00173174,11.3374021 2.88029686,10.3025076 L19.0307386,0.855778161 C20.8310302,-0.285259387 23.1792366,-0.285259387 24.9795282,0.855778161 L41.1560611,10.3290434 C42.9302615,11.4435452 44,13.4071912 44,15.503516 L44,34.4765822 C44,36.572907 42.9302615,38.5630888 41.1821523,39.6510548 L24.9795282,49.1508558 C24.0663368,49.7081067 23.0487807,50 22.0051334,50 Z" }), index.h("path", { class: `
										hex-fill 
										${utils.getSVGColourClassname(this.colour)}
									`, d: "M21.991651,2 C21.2515462,2 20.5114415,2.20861678 19.8734201,2.62585034 L19.8478993,2.65192744 L4.0249702,11.9353741 C2.69788582,12.6655329 1.90673937,14.0997732 2.00882278,15.6122449 L2.00882278,15.6643991 L2.00882278,34.361678 C1.90673937,35.8741497 2.69788582,37.30839 3.99944934,38.0385488 L19.8734201,47.3741497 C21.1749837,48.2086168 22.8083183,48.2086168 24.1098818,47.3741497 L24.1354026,47.3480726 L39.9838526,38.0385488 C41.2343744,37.2562358 42,35.8219955 42,34.3095238 L42,15.6904762 C42,14.1780045 41.2343744,12.7437642 39.9583317,11.9353741 L24.1098818,2.59977324 C23.4718605,2.20861678 22.7317557,2 21.991651,2 Z" }))))));
    }
};
Button.style = iconHexagonCss;

exports.tf_icon_hexagon = Button;
