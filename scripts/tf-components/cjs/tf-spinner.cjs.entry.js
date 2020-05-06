'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-17ea994a.js');

const spinnerCss = ".lds-ring{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:6px;border:6px solid #224595;border-radius:50%;-webkit-animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:#224595 transparent transparent transparent}.lds-ring div:nth-child(1){-webkit-animation-delay:-0.45s;animation-delay:-0.45s}.lds-ring div:nth-child(2){-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.lds-ring div:nth-child(3){-webkit-animation-delay:-0.15s;animation-delay:-0.15s}@-webkit-keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";

const Spinner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "lds-ring" }, index.h("div", null), index.h("div", null), index.h("div", null), index.h("div", null)));
    }
};
Spinner.style = spinnerCss;

exports.tf_spinner = Spinner;
