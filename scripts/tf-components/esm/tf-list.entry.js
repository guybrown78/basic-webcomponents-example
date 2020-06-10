import { r as registerInstance, h } from './index-67a2bf30.js';

const listCss = ".list-container{overflow:hidden}ul{list-style-type:none;margin:0;padding:0}@media (min-width:640px){.list-container{border-radius:.25rem}}";

const List = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "list-container" }, h("ul", null, h("slot", null))));
    }
};
List.style = listCss;

export { List as tf_list };
