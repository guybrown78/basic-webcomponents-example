'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const modalCss = ".modal-wrapper{position:fixed;bottom:0;right:0;left:0;padding-left:1rem;padding-right:1rem;padding-bottom:1.5rem;z-index:50}.modal-wrapper.show{pointer-events:auto}.modal-wrapper.hide{pointer-events:none}.backdrop-container{position:fixed;top:0;right:0;bottom:0;left:0;-webkit-transition-property:opacity;transition-property:opacity}.backdrop{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#868398;opacity:.75}.backdrop.hide{pointer-events:none;opacity:0;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:.2s;transition-duration:.2s}.backdrop.show{pointer-events:auto;opacity:.75;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.modal{background-color:#fff;border-radius:.5rem;padding:1.25rem 1rem 1rem;overflow:hidden;-webkit-box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;-webkit-transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));-webkit-transition-property:all;transition-property:all}.modal.show{pointer-events:auto;opacity:1;--transform-translate-y:0;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.modal.hide{pointer-events:none;opacity:0;--transform-translate-y:1rem;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:.2s;transition-duration:.2s}.modal-header{display:-ms-flexbox;display:flex}.title{-ms-flex:1 1 0%;flex:1 1 0%;font-weight:800;color:#363154}.close-button{margin-left:10px}#app-logo-initials{color:#363154;text-align:center}tf-icon-close{height:16px;width:16px}.modal-body{margin-top:.5rem;margin-bottom:.5rem}.modal-footer{margin-top:1.25rem}.cancel-wrapper,.confirm-wrapper{display:-ms-flexbox;display:flex;width:100%;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.cancel-wrapper{margin-top:.75rem}tf-button{width:100%}@media (min-width:640px){.modal-wrapper{top:0;right:0;bottom:0;left:0;padding:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.modal{max-width:32rem;width:100%;padding:1.5rem}.modal.show{--transform-scale-x:1;--transform-scale-y:1}.modal.hide,.modal.show{--transform-translate-y:0}.modal.hide{--transform-scale-x:.95;--transform-scale-y:.95}.modal-footer{margin-top:1.5rem;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-gap:.75rem;gap:.75rem;grid-auto-flow:row dense}.confirm-wrapper{grid-column-start:2}.cancel-wrapper{margin-top:0;grid-column-start:1}}";

const Modal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isOpen = false;
        this.headerStyle = "modal";
        this.showCancel = true;
        this.showConfirm = true;
        this.showClose = true;
        this.cancelText = "Cancel";
        this.confirmText = "Confirm";
        this.cancelColour = "grey";
        this.confirmColour = "aqua";
        this.tfModalClosed = index.createEvent(this, "tfModalClosed", 7);
        this.tfModalConfirmed = index.createEvent(this, "tfModalConfirmed", 7);
    }
    async open() {
        this.opened = true;
    }
    openedPropChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            // can do something here, set timers etc
            this.isOpen = newValue;
        }
    }
    onClose() {
        this.opened = false;
        this.tfModalClosed.emit();
    }
    onConfirm() {
        this.opened = false;
        this.tfModalConfirmed.emit();
    }
    render() {
        return (index.h("div", { class: `modal-wrapper ${this.isOpen ? 'show' : 'hide'}` }, index.h("div", { class: "backdrop-container" }, index.h("div", { class: `
					backdrop
					${this.isOpen ? 'show' : 'hide'}
				` })), index.h("div", { class: `
				modal
				${this.isOpen ? 'show' : 'hide'}
			` }, index.h("header", { class: `modal-header header-style-${this.headerStyle}` }, index.h("h2", { class: `title header-style-${this.headerStyle}` }, this.displayTitle), this.showClose &&
            index.h("div", { class: "close-button" }, index.h("tf-icon-button", { onClick: this.onClose.bind(this), colour: "grey", icon: "close" }))), index.h("section", { class: "modal-body" }, index.h("slot", null)), index.h("footer", { class: "modal-footer" }, this.showConfirm &&
            index.h("span", { class: "confirm-wrapper" }, index.h("tf-button", { onClick: this.onConfirm.bind(this), colour: this.confirmColour }, this.confirmText)), this.showCancel &&
            index.h("span", { class: "cancel-wrapper" }, index.h("tf-button", { onClick: this.onClose.bind(this), colour: this.cancelColour }, this.cancelText))))));
    }
    static get watchers() { return {
        "opened": ["openedPropChanged"]
    }; }
};
Modal.style = modalCss;

exports.tf_modal = Modal;
