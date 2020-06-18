import { Component, h, Prop } from '@stencil/core';
function getIconColourFromBG(colour) {
    switch (colour.toLowerCase()) {
        case 'navy':
        case 'blue':
        case 'gradient':
            return "white";
        case 'default':
        case 'white':
        case 'grey':
        case 'aqua':
        default:
            return "navy";
    }
}
export class IconButton {
    constructor() {
        this.buttonId = null;
        this.size = 'default';
        this.colour = 'default';
        this.outlineColour = null;
        this.icon = null;
        this.asButton = true;
        //
        this.buttonType = 'button';
        this.disabled = false;
    }
    render() {
        const size = this.size;
        const oColour = !this.outlineColour ? this.colour : this.outlineColour;
        const colour = this.colour;
        const iColour = !this.iconColour ? getIconColourFromBG(colour) : this.iconColour;
        //
        const IconTag = `tf-icon-${this.icon}`;
        const icon = h(IconTag, { class: "icon-svg" });
        return (h("div", { class: `
					hex-container
					${size === "xl" || size === "extra-large" ? "icon-btn-size-xl"
                : size === "l" || size === "large" ? "icon-btn-size-l"
                    : size === "m" || size === "medium" ? "icon-btn-size-m"
                        : size === "s" || size === "small" ? "icon-btn-size-s"
                            : size === "xs" || size === "extra-small" ? "icon-btn-size-xs"
                                : "icon-btn-size-default"}
					${this.asButton ? 'button' : 'non-button'}
					${this.disabled ? 'disabled' : ''}
				`, role: `button`, id: this.buttonId },
            h("div", { class: `
						hexagon
						${size === "xl" || size === "extra-large" ? "icon-btn-size-xl"
                    : size === "l" || size === "large" ? "icon-btn-size-l"
                        : size === "m" || size === "medium" ? "icon-btn-size-m"
                            : size === "s" || size === "small" ? "icon-btn-size-s"
                                : size === "xs" || size === "extra-small" ? "icon-btn-size-xs"
                                    : "icon-btn-size-default"}
					` },
                h("svg", { class: "hexagon-svg", viewBox: "0 0 44 50", xmlns: "http://www.w3.org/2000/svg" },
                    h("g", { stroke: "none", "stroke-width": "0", fill: "none", "fill-rule": "evenodd" },
                        h("path", { class: `
									hex-outline 
									${oColour === "white" ? "svg-colour-white"
                                : oColour === "blue" ? "svg-colour-blue"
                                    : oColour === "aqua" ? "svg-colour-aqua"
                                        : oColour === "grey" ? "svg-colour-grey"
                                            : oColour === "navy" ? "svg-colour-navy"
                                                : "svg-colour-default"}
								`, d: "M22.0051334,50 C20.9875773,50 19.94393,49.7081067 19.0307386,49.12432 L2.85420568,39.6510548 C1.00173174,38.642696 -0.12018909,36.5994427 0.0102668206,34.4500464 L0.0102668206,15.5300517 C-0.12018909,13.3806554 1.00173174,11.3374021 2.88029686,10.3025076 L19.0307386,0.855778161 C20.8310302,-0.285259387 23.1792366,-0.285259387 24.9795282,0.855778161 L41.1560611,10.3290434 C42.9302615,11.4435452 44,13.4071912 44,15.503516 L44,34.4765822 C44,36.572907 42.9302615,38.5630888 41.1821523,39.6510548 L24.9795282,49.1508558 C24.0663368,49.7081067 23.0487807,50 22.0051334,50 Z" }),
                        h("path", { class: `
									hex-fill 
									${colour === "white" ? "svg-colour-white"
                                : colour === "blue" ? "svg-colour-blue"
                                    : colour === "aqua" ? "svg-colour-aqua"
                                        : colour === "grey" ? "svg-colour-grey"
                                            : colour === "navy" ? "svg-colour-navy"
                                                : "svg-colour-default"}
								`, d: "M21.991651,2 C21.2515462,2 20.5114415,2.20861678 19.8734201,2.62585034 L19.8478993,2.65192744 L4.0249702,11.9353741 C2.69788582,12.6655329 1.90673937,14.0997732 2.00882278,15.6122449 L2.00882278,15.6643991 L2.00882278,34.361678 C1.90673937,35.8741497 2.69788582,37.30839 3.99944934,38.0385488 L19.8734201,47.3741497 C21.1749837,48.2086168 22.8083183,48.2086168 24.1098818,47.3741497 L24.1354026,47.3480726 L39.9838526,38.0385488 C41.2343744,37.2562358 42,35.8219955 42,34.3095238 L42,15.6904762 C42,14.1780045 41.2343744,12.7437642 39.9583317,11.9353741 L24.1098818,2.59977324 C23.4718605,2.20861678 22.7317557,2 21.991651,2 Z" })))),
            h("div", { class: `
					icon
					${iColour === "white" ? "svg-colour-white"
                    : iColour === "blue" ? "svg-colour-blue"
                        : iColour === "aqua" ? "svg-colour-aqua"
                            : iColour === "grey" ? "svg-colour-grey"
                                : iColour === "navy" ? "svg-colour-navy"
                                    : "svg-colour-default"}
					${size === "xl" || size === "extra-large" ? "icon-size-xl"
                    : size === "l" || size === "large" ? "icon-size-l"
                        : size === "m" || size === "medium" ? "icon-size-m"
                            : size === "s" || size === "small" ? "icon-size-s"
                                : size === "xs" || size === "extra-small" ? "icon-size-xs"
                                    : "icon-size-default"}
				` }, icon)));
    }
    static get is() { return "tf-icon-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./icon-button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["icon-button.css"]
    }; }
    static get properties() { return {
        "buttonId": {
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
            "attribute": "button-id",
            "reflect": true,
            "defaultValue": "null"
        },
        "size": {
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
            "attribute": "size",
            "reflect": true,
            "defaultValue": "'default'"
        },
        "colour": {
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
            "attribute": "colour",
            "reflect": true,
            "defaultValue": "'default'"
        },
        "outlineColour": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "outline-colour",
            "reflect": true,
            "defaultValue": "null"
        },
        "icon": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "icon",
            "reflect": true,
            "defaultValue": "null"
        },
        "asButton": {
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
            "attribute": "as-button",
            "reflect": false,
            "defaultValue": "true"
        },
        "iconColour": {
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
            "attribute": "icon-colour",
            "reflect": false
        },
        "buttonType": {
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
            "attribute": "button-type",
            "reflect": true,
            "defaultValue": "'button'"
        },
        "disabled": {
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
            "attribute": "disabled",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
}
