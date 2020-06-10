import { r as registerInstance, h } from './index-67a2bf30.js';

const NodeText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.justify = "flex-start";
    }
    render() {
        const styles = {
            justifyContent: this.justify,
        };
        return (h("span", { id: "node-text-span", style: styles }, h("slot", null)));
    }
};
NodeText.style = "#node-text-span{\n\t\t\tmargin:0;\n\t\t\tpadding:0;\n\t\t\tfont-family: 'Roboto Condensed', sans-serif;\n\t\t\tfont-size: 15px;\n\t\t\tline-height: 20px;\n\t\t\tdisplay:flex;\n\t\t\tflex:1;\n\t\t}";

export { NodeText as tf_node_text };
