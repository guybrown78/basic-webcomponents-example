'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const alertCss = ".alerts-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:fixed;bottom:0;right:0;left:0;padding-left:1rem;padding-right:1rem;padding-bottom:1.5rem;z-index:50;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none}.alert-wrapper{margin-top:0.5rem}.alert-wrapper.show{pointer-events:auto}.alert-wrapper.hide{pointer-events:none}.alert{background-color:#ffffff;border-radius:9999px;padding:0.75rem;overflow:hidden;-webkit-box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;-webkit-transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));-webkit-transition-property:all;transition-property:all}.alert.show{pointer-events:auto;opacity:1;--transform-translate-y:0;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-timing-function:cubic-bezier(0, 0, 0.2, 1);-webkit-transition-duration:300ms;transition-duration:300ms}.alert.hide{pointer-events:none;opacity:0;--transform-translate-y:0;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 1, 1);transition-timing-function:cubic-bezier(0.4, 0, 1, 1);-webkit-transition-duration:700ms;transition-duration:700ms}.alert.initial{pointer-events:none;opacity:0;--transform-translate-y:1rem}.alert-container{display:-ms-flexbox;display:flex}.alert-left{-ms-flex-negative:0;flex-shrink:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.alert-body{margin-left:0.75rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.icon-container{width:25px;height:25px;border-radius:9999px;background-color:#224595;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative}.icon-container.red{background-color:#b92950}.icon-container.green{background-color:#40c7a3}.icon{width:13px;height:13px;position:absolute;top:2px;left:6px;color:#ffffff}.message{font-family:\"Roboto Condensed\", sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:500;color:#224595;margin:0}.message.red{color:#b92950}.message.green{color:#40c7a3}.alert-right{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-left:auto;padding-left:0.75rem;padding-right:0.75rem}@media (min-width: 640px){.alert{max-width:32rem;padding:1rem}.alert.show{--transform-scale-x:1;--transform-scale-y:1}.alert.initial{--transform-scale-x:.95;--transform-scale-y:.95}}";

const Alerts = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.list = [];
        this.increment = 0;
    }
    onHandleShowAlert(event) {
        event.preventDefault();
        event.stopPropagation();
        const alertObj = Object.assign({ index: this.increment, alertId: `${this.increment}-${String(Math.floor(Math.random() * 99999))}`, hasBeen: false }, event.detail);
        this.list = [...this.list, alertObj];
        this.increment++;
    }
    onHandleCloseDropdown(event) {
        event.preventDefault();
        event.stopPropagation();
        const updatedList = this.list.filter(item => item.alertId !== event.detail.alertId);
        this.list = [...updatedList];
    }
    getAlert(alert) {
        return (index.h("tf-alert", { message: alert.message, "show-duration": alert.showDuration, "show-button": alert.showButton, colour: alert.colour, icon: alert.icon, "auto-open": "true", "alert-id": alert.alertId, id: alert.alertId, key: alert.alertId }));
    }
    render() {
        return (index.h("div", { class: "alerts-container" }, this.list.map(alert => {
            return this.getAlert(alert);
        })));
    }
};
Alerts.style = alertCss;

exports.tf_alerts = Alerts;
