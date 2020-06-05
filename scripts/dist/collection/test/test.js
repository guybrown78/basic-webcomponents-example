import { Component, h } from '@stencil/core';
import { svgData } from './data';
export class SVGIcon {
    createLetter(x1, x2) {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `${x1} 0 ${x2} 17` },
            h("path", { fill: "currentColor", d: svgData })));
    }
    render() {
        const a = this.createLetter(0, 16);
        const b = this.createLetter(16, 18);
        const c = this.createLetter(26, 24);
        return (h("div", { class: "initials" },
            a,
            b,
            c));
    }
    static get is() { return "tf-test"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["test.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["test.css"]
    }; }
}
