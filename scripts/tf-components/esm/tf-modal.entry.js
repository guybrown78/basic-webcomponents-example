import { r as registerInstance, h } from './core-4955d2b1.js';

const Modal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("div", { id: "backdrop" }),
            h("div", { id: "modal" }, h("header", null, h("slot", { name: "title" }, this.displayTitle)), h("section", { id: "main" }, h("slot", null)), h("section", { id: "actions" }, h("button", { id: "cancel-btn" }, "Cancel"), h("button", { id: "confirm-btn" }, "OK")))
        ];
    }
    static get style() { return "#backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0,0,0,.25);z-index:10;opacity:0;pointer-events:none;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}:host([opened]) #backdrop,:host([opened]) #modal{opacity:1;pointer-events:all}:host([opened]) #modal{top:15vh}#modal{position:fixed;top:10vh;left:25%;width:50%;z-index:100;background:#fff;border-radius:3px;-webkit-box-shadow:0 2px 8px rgba(0,0,0,.26);box-shadow:0 2px 8px rgba(0,0,0,.26);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;opacity:0;pointer-events:none;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}header{padding:.625rem;border-bottom:1px solid #ccc}::slotted(h1){font-size:.78rem;margin:0}#actions,#main{padding:.625rem}#actions{border-top:1px solid #ccc;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}#actions button{margin:0 .16rem}"; }
};

export { Modal as tf_modal };
