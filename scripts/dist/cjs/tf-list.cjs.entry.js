'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const listCss = ".list-container{overflow:hidden}ul{list-style-type:none;margin:0;padding:0}@media (min-width:640px){.list-container{border-radius:.25rem}}";

const List = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "list-container" }, index.h("ul", null, index.h("slot", null))));
    }
};
List.style = listCss;

exports.tf_list = List;
