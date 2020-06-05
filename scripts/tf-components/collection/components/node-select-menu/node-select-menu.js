import { Component, h, State, Listen } from '@stencil/core';
export class NodeSelectMenu {
    constructor() {
        // @Element() el: HTMLElement;
        this.isOpen = false;
        this.isOpenDelayed = false;
    }
    handleClick(event) {
        if (this.isOpen) {
            const target = event.composedPath()[0];
            if (!target.matches('.dropdown-item-btn') && !target.matches('#dropdown-content')) {
                this.isOpen = this.isOpenDelayed = false;
            }
        }
    }
    /*
131 856
581 913
*/
    onMenuClicked() {
        if (this.isOpen) {
            this.isOpen = this.isOpenDelayed = false;
        }
        else {
            this.isOpen = true;
            setTimeout(() => {
                this.isOpenDelayed = true;
            }, 400);
        }
    }
    render() {
        return (h("div", { id: "dropdown" },
            h("button", { onClick: this.onMenuClicked.bind(this), id: "dropdown-btn", tabindex: "0", class: this.isOpenDelayed ? 'active' : '' },
                h("span", { id: "title" }, "Actions"),
                h("span", { id: "icon" },
                    h("tf-icon-chevron-down", { class: "svg-icon" }))),
            h("div", { id: "dropdown-content", class: this.isOpen ? 'show' : '' },
                h("button", { class: "dropdown-item-btn", id: "" },
                    h("span", { id: "title" }, "View")),
                h("button", { class: "dropdown-item-btn", id: "" },
                    h("span", { id: "title" }, "Assign to Course")),
                h("button", { class: "dropdown-item-btn", id: "" },
                    h("span", { id: "title" }, "Assign to Cattegory")),
                h("button", { class: "dropdown-item-btn", id: "" },
                    h("span", { id: "title" }, "Remove")))));
    }
    static get is() { return "tf-node-select-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["node-select-menu.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["node-select-menu.css"]
    }; }
    static get states() { return {
        "isOpen": {},
        "isOpenDelayed": {}
    }; }
    static get listeners() { return [{
            "name": "click",
            "method": "handleClick",
            "target": "window",
            "capture": true,
            "passive": false
        }]; }
}
