'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const userCss = ".flex-row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.avatar{height:2.5rem;width:2.5rem;border-radius:9999px}.details{margin-left:1rem}";

const User = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "flex-row" }, index.h("div", { class: "avater-container" }, index.h("img", { class: "avatar", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "" })), index.h("div", { class: "details" }, index.h("tf-value-pair", null, index.h("span", { slot: "dark" }, "Bernard Lane"), index.h("span", { slot: "light" }, "bernardlane@example.com")))));
    }
};
User.style = userCss;

exports.tf_user = User;
