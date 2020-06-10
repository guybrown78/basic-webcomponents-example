import { r as registerInstance, h } from './index-67a2bf30.js';
var userCss = ".flex-row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.avatar{height:2.5rem;width:2.5rem;border-radius:9999px}.details{margin-left:1rem}";
var User = /** @class */ (function () {
    function User(hostRef) {
        registerInstance(this, hostRef);
    }
    User.prototype.render = function () {
        return (h("div", { class: "flex-row" }, h("div", { class: "avater-container" }, h("img", { class: "avatar", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "" })), h("div", { class: "details" }, h("tf-value-pair", null, h("span", { slot: "dark" }, "Bernard Lane"), h("span", { slot: "light" }, "bernardlane@example.com")))));
    };
    return User;
}());
User.style = userCss;
export { User as tf_user };
