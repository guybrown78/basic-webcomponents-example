import { r as registerInstance, h } from './index-67a2bf30.js';
var modalTestCss = ".modal-wrapper{border:1px solid #ff0;position:absolute;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;height:100vh;-ms-flex-align:center;align-items:center;bottom:0;right:0;left:0;padding-left:1rem;padding-right:1rem;padding-bottom:1.5rem;z-index:50}.modal-wrapper.show{pointer-events:auto}.modal-wrapper.hide{pointer-events:none}.backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background-color:#363154;z-index:10}.backdrop.hide{opacity:0;pointer-events:none}.backdrop.show{opacity:.75;pointer-events:auto}.barry{border:1px solid #00f;display:-ms-flexbox;display:flex;position:relative;background-color:#fff;border-radius:.5rem;padding:1.25rem 1rem 1rem;overflow:hidden;-webkit-box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);z-index:20}";
var ModalTest = /** @class */ (function () {
    function ModalTest(hostRef) {
        registerInstance(this, hostRef);
        this.cancelText = "Cancel";
    }
    ModalTest.prototype.render = function () {
        return (h("div", { class: "modal-wrapper show" }, h("div", { class: "\n\t\t\t\t\tbackdrop\n\t\t\t\t\tshow\n\t\t\t\t" }), h("div", { class: "barry show" }, h("tf-h2", null, this.displayTitle))));
    };
    return ModalTest;
}());
ModalTest.style = modalTestCss;
export { ModalTest as tf_modal_test };
