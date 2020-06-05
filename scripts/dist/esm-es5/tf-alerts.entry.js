var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, h } from './index-67a2bf30.js';
var alertCss = ".alerts-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:fixed;bottom:0;right:0;left:0;padding-left:1rem;padding-right:1rem;padding-bottom:1.5rem;z-index:50;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none}.alert-wrapper{margin-top:.5rem}.alert-wrapper.show{pointer-events:auto}.alert-wrapper.hide{pointer-events:none}.alert{background-color:#fff;border-radius:9999px;padding:.75rem;overflow:hidden;-webkit-box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;-webkit-transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));-webkit-transition-property:all;transition-property:all}.alert.show{pointer-events:auto;opacity:1;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.alert.hide,.alert.show{--transform-translate-y:0}.alert.hide{-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:.7s;transition-duration:.7s}.alert.hide,.alert.initial{pointer-events:none;opacity:0}.alert.initial{--transform-translate-y:1rem}.alert-container{display:-ms-flexbox;display:flex}.alert-left{-ms-flex-negative:0;flex-shrink:0}.alert-body,.alert-left{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.alert-body{margin-left:.75rem;-ms-flex-pack:center;justify-content:center}.icon-container{width:25px;height:25px;border-radius:9999px;background-color:#224595;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative}.icon-container.red{background-color:#b92950}.icon-container.green{background-color:#40c7a3}.icon{width:13px;height:13px;position:absolute;top:2px;left:6px;color:#fff}.message{font-family:Roboto Condensed,sans-serif;font-size:.875rem;line-height:1.25rem;font-weight:500;color:#224595;margin:0}.message.red{color:#b92950}.message.green{color:#40c7a3}.alert-right{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-left:auto;padding-left:.75rem;padding-right:.75rem}@media (min-width:640px){.alert{max-width:32rem;padding:1rem}.alert.show{--transform-scale-x:1;--transform-scale-y:1}.alert.initial{--transform-scale-x:.95;--transform-scale-y:.95}}";
var Alerts = /** @class */ (function () {
    function Alerts(hostRef) {
        registerInstance(this, hostRef);
        this.list = [];
        this.increment = 0;
    }
    Alerts.prototype.onHandleShowAlert = function (event) {
        event.preventDefault();
        event.stopPropagation();
        var alertObj = Object.assign({ index: this.increment, alertId: this.increment + "-" + String(Math.floor(Math.random() * 99999)), hasBeen: false }, event.detail);
        this.list = __spreadArrays(this.list, [alertObj]);
        this.increment++;
    };
    Alerts.prototype.onHandleCloseDropdown = function (event) {
        event.preventDefault();
        event.stopPropagation();
        var updatedList = this.list.filter(function (item) { return item.alertId !== event.detail.alertId; });
        this.list = __spreadArrays(updatedList);
    };
    Alerts.prototype.getAlert = function (alert) {
        return (h("tf-alert", { message: alert.message, "show-duration": alert.showDuration, "show-button": alert.showButton, colour: alert.colour, icon: alert.icon, "auto-open": "true", "alert-id": alert.alertId, id: alert.alertId, key: alert.alertId }));
    };
    Alerts.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "alerts-container" }, this.list.map(function (alert) {
            return _this.getAlert(alert);
        })));
    };
    return Alerts;
}());
Alerts.style = alertCss;
export { Alerts as tf_alerts };
