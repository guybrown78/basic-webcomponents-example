import { h } from "@stencil/core";
export class Hexagon {
    constructor() {
        this.color = "accent";
    }
    /*onHexagonClicked(event){
        const el = this.el.shadowRoot.querySelector('#hexagon-container') as HTMLElement;
        event = event.touches ? event.touches[0] : event;
        
        const r = el.getBoundingClientRect(), d = Math.sqrt(Math.pow(r.width,2)+Math.pow(r.height,2)) * 2;
        el.style.cssText = `--s: 0; --o: 1;`;  el.offsetTop;
        el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${event.clientX - r.left}; --y:${event.clientY - r.top};`
    }*/
    render() {
        // const width = 45.302
        // const height = 50.803
        return (h("div", { 
            // tabindex="0" 
            // role="button"
            // aria-pressed="false"
            class: `
						sass-hex 
						${this.color} 
						${this.asButton ? 'as-button' : ''}
					` },
            h("slot", null)));
        /*return (
            <div
                id="hexagon-container"
                //onClick={this.onHexagonClicked.bind(this)}
            >
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={`${width}px`}
                    height={`${height}px`}
                    viewBox={`0 0 ${width} ${height}`}
                    class={ `${this.color} ${this.asButton ? 'as-button' : ''}` }
                >
                    <path id="hexagon" d="M383.419 472.007l-17.282-9.951a4.987 4.987 0 0 1-2.618-4.715v-19.9a4.984 4.984 0 0 1 2.618-4.712l17.282-9.951a5.2 5.2 0 0 1 5.5 0l17.284 9.951a5.494 5.494 0 0 1 2.618 4.712v19.9a5.5 5.5 0 0 1-2.618 4.715l-17.284 9.951a5.206 5.206 0 0 1-5.5 0" transform="translate(-363.519 -421.989)" />
                </svg>
                <slot />
                <div
                    class={ `sass-hex ${this.color} ${this.asButton ? 'as-button' : ''}` }
                >
                    
                </div>
            </div>
            

        );*/
    }
    static get is() { return "tf-hexagon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["hexagon.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["hexagon.css"]
    }; }
    static get properties() { return {
        "color": {
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
            "attribute": "color",
            "reflect": true,
            "defaultValue": "\"accent\""
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
            "reflect": true
        }
    }; }
    static get elementRef() { return "el"; }
}
