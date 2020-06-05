import { r as registerInstance, c as createEvent, h } from './index-67a2bf30.js';

const alertCss = ".alerts-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:fixed;bottom:0;right:0;left:0;padding-left:1rem;padding-right:1rem;padding-bottom:1.5rem;z-index:50;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none}.alert-wrapper{margin-top:0.5rem}.alert-wrapper.show{pointer-events:auto}.alert-wrapper.hide{pointer-events:none}.alert{background-color:#ffffff;border-radius:9999px;padding:0.75rem;overflow:hidden;-webkit-box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;-webkit-transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));-webkit-transition-property:all;transition-property:all}.alert.show{pointer-events:auto;opacity:1;--transform-translate-y:0;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-timing-function:cubic-bezier(0, 0, 0.2, 1);-webkit-transition-duration:300ms;transition-duration:300ms}.alert.hide{pointer-events:none;opacity:0;--transform-translate-y:0;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 1, 1);transition-timing-function:cubic-bezier(0.4, 0, 1, 1);-webkit-transition-duration:700ms;transition-duration:700ms}.alert.initial{pointer-events:none;opacity:0;--transform-translate-y:1rem}.alert-container{display:-ms-flexbox;display:flex}.alert-left{-ms-flex-negative:0;flex-shrink:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.alert-body{margin-left:0.75rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.icon-container{width:25px;height:25px;border-radius:9999px;background-color:#224595;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative}.icon-container.red{background-color:#b92950}.icon-container.green{background-color:#40c7a3}.icon{width:13px;height:13px;position:absolute;top:2px;left:6px;color:#ffffff}.message{font-family:\"Roboto Condensed\", sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:500;color:#224595;margin:0}.message.red{color:#b92950}.message.green{color:#40c7a3}.alert-right{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-left:auto;padding-left:0.75rem;padding-right:0.75rem}@media (min-width: 640px){.alert{max-width:32rem;padding:1rem}.alert.show{--transform-scale-x:1;--transform-scale-y:1}.alert.initial{--transform-scale-x:.95;--transform-scale-y:.95}}";

const Modal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isOpen = false;
        this.hasShownOnce = false;
        this.autoOpen = false;
        this.autoOpenDelay = 100;
        this.showDuration = 3000;
        this.alertId = null;
        this.icon = 'notification';
        this.colour = "blue";
        this.message = "";
        this.showButton = false;
        this.buttonTitle = "View";
        this.buttonColour = "grey";
        this.buttonSize = "xs";
        this.tfAlertTransitionedOut = createEvent(this, "tfAlertTransitionedOut", 3);
    }
    // clonedAlertId:string = null;
    async open() {
        this.opened = true;
    }
    openedPropChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.isOpen = newValue;
            // can do something here, set timers etc
            if (this.isOpen) {
                setTimeout(() => {
                    this.onClose();
                    if (!this.hasShownOnce) {
                        this.hasShownOnce = true;
                    }
                }, this.showDuration);
            }
        }
    }
    onClose() {
        this.alertRef.addEventListener('transitionend', this.onTransitionEnd.bind(this));
        this.opened = false;
    }
    onTransitionEnd(event) {
        this.alertRef.removeEventListener('transitionend', this.onTransitionEnd.bind(this));
        event.preventDefault();
        event.stopPropagation();
        this.tfAlertTransitionedOut.emit({
            alertId: this.alertId
        });
    }
    componentWillLoad() {
        // this.clonedAlertId = String(this.alertId);
        if (this.autoOpen) {
            this.autoOpenDelay = this.autoOpenDelay < 100 ? 100 : this.autoOpenDelay;
            setTimeout(() => {
                this.open();
            }, this.autoOpenDelay);
        }
    }
    render() {
        let icon = null;
        if (this.icon) {
            const IconTag = `tf-icon-${this.icon}`;
            icon = h(IconTag, { class: `icon` });
        }
        let buttonContainer = null;
        if (this.showButton) {
            buttonContainer = (h("div", { class: "alert-right" }, h("tf-button", { size: this.buttonSize, colour: this.buttonColour }, this.buttonTitle)));
        }
        return (h("div", { class: `alert-wrapper ${this.isOpen ? 'show' : 'hide'}` }, h("div", { class: `
					alert
					${this.isOpen ? 'show' : this.hasShownOnce ? 'hide' : 'initial'}
				`, id: this.alertId, ref: el => this.alertRef = el }, h("div", { class: "alert-container" }, h("div", { class: `alert-left` }, h("div", { class: `icon-container ${this.colour}` }, icon)), h("div", { class: "alert-body" }, h("p", { class: `message ${this.colour}` }, this.message)), buttonContainer))));
    }
    static get watchers() { return {
        "opened": ["openedPropChanged"]
    }; }
};
Modal.style = alertCss;

export { Modal as tf_alert };
