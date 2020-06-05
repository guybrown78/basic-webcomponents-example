'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const hexagonSvgCss = ":host{display:-ms-flexbox;display:flex}";

const HexagonSVG = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.color = "accent";
        //
        this.width = 45;
        this.height = 51;
        //
        this.size = "standard";
    }
    render() {
        return (index.h("svg", { "aria-hidden": "true", focusable: "false", class: "svg-inline hexagon w-50", role: "img", xmlns: "http://www.w3.org/2000/svg", width: this.width, height: this.height, viewBox: "0 0 377 428" }, index.h("path", { d: "M164.775417,419.412258 L21.752169,335.96698 C7.51343737,328.222327 -0.954334761,312.769654 0.0859924054,296.428792 L0.0859924054,129.555005 C-0.950691643,113.221529 7.51742213,97.7780649 21.752169,90.0419756 L164.775417,6.5966963 C178.706239,-2.19889877 196.361774,-2.19889877 210.292595,6.5966963 L353.332395,90.0419756 C366.873163,98.4712265 375.087811,113.452443 375,129.555005 L375,296.428792 C375.086729,312.537759 366.873457,327.525999 353.332395,335.96698 L210.292595,419.412258 C196.358405,428.195914 178.709608,428.195914 164.775417,419.412258", id: "hexagon-svg", fill: "#FFFFFF", "fill-rule": "nonzero", stroke: "#363154", "stroke-width": "5" }, " "))
        // <svg 
        // 	aria-hidden="true" 
        // 	focusable="false" 
        // 	class="svg-inline hexagon w-50" 
        // 	role="img" 
        // 	xmlns="http://www.w3.org/2000/svg" 
        // 	width={`${this.width}px`} 
        // 	height={`${this.height}px`} 
        // 	viewBox={`0 0 ${this.width} ${this.height}`}
        // >
        // 	<path 
        // 		d="M19.7730133,50.2113267 L2.61025543,40.221399 C0.901610809,39.2942222 -0.114519958,37.4442544 0.0103190695,35.487954 L0.0103190695,15.5101062 C-0.114082785,13.5546901 0.902088979,11.7058247 2.61025543,10.7796731 L19.7730133,0.789745332 C21.4447088,-0.263248444 23.5633691,-0.263248444 25.2350645,0.789745332 L42.3998086,10.7796731 C44.0246977,11.7888088 45.0104537,13.5823347 45,15.5101062 L45,35.487954 C45.0103238,37.4164923 44.024733,39.210859 42.3998086,40.221399 L25.2350645,50.2113267 C23.5629648,51.2628911 21.4451131,51.2628911 19.7730133,50.2113267" 
        // 		id="hexagon-svg"
        // 		fill="#FFFFFF" 
        // 		fill-rule="nonzero" 
        // 		stroke="#363154" 
        // 		stroke-width="1"
        // 	></path>
        // </svg>
        );
    }
};
HexagonSVG.style = hexagonSvgCss;

exports.tf_hexagon_svg = HexagonSVG;
