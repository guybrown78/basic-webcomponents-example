import { h } from "@stencil/core";
export class User {
    render() {
        return (h("div", { class: "flex-row" },
            h("div", { class: "avater-container" },
                h("img", { class: "avatar", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "" })),
            h("div", { class: "details" },
                h("tf-value-pair", null,
                    h("span", { slot: "dark" }, "Bernard Lane"),
                    h("span", { slot: "light" }, "bernardlane@example.com")))));
    }
    static get is() { return "tf-user"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["user.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["user.css"]
    }; }
}
