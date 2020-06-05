var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h } from './index-67a2bf30.js';
var alertCss = ".alerts-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:fixed;bottom:0;right:0;left:0;padding-left:1rem;padding-right:1rem;padding-bottom:1.5rem;z-index:50;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none}.alert-wrapper{margin-top:0.5rem}.alert-wrapper.show{pointer-events:auto}.alert-wrapper.hide{pointer-events:none}.alert{background-color:#ffffff;border-radius:9999px;padding:0.75rem;overflow:hidden;-webkit-box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;-webkit-transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));-webkit-transition-property:all;transition-property:all}.alert.show{pointer-events:auto;opacity:1;--transform-translate-y:0;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-timing-function:cubic-bezier(0, 0, 0.2, 1);-webkit-transition-duration:300ms;transition-duration:300ms}.alert.hide{pointer-events:none;opacity:0;--transform-translate-y:0;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 1, 1);transition-timing-function:cubic-bezier(0.4, 0, 1, 1);-webkit-transition-duration:700ms;transition-duration:700ms}.alert.initial{pointer-events:none;opacity:0;--transform-translate-y:1rem}.alert-container{display:-ms-flexbox;display:flex}.alert-left{-ms-flex-negative:0;flex-shrink:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.alert-body{margin-left:0.75rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.icon-container{width:25px;height:25px;border-radius:9999px;background-color:#224595;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative}.icon-container.red{background-color:#b92950}.icon-container.green{background-color:#40c7a3}.icon{width:13px;height:13px;position:absolute;top:2px;left:6px;color:#ffffff}.message{font-family:\"Roboto Condensed\", sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:500;color:#224595;margin:0}.message.red{color:#b92950}.message.green{color:#40c7a3}.alert-right{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-left:auto;padding-left:0.75rem;padding-right:0.75rem}@media (min-width: 640px){.alert{max-width:32rem;padding:1rem}.alert.show{--transform-scale-x:1;--transform-scale-y:1}.alert.initial{--transform-scale-x:.95;--transform-scale-y:.95}}";
var Modal = /** @class */ (function () {
    function class_1(hostRef) {
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
    class_1.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.opened = true;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.openedPropChanged = function (newValue, oldValue) {
        var _this = this;
        if (newValue !== oldValue) {
            this.isOpen = newValue;
            // can do something here, set timers etc
            if (this.isOpen) {
                setTimeout(function () {
                    _this.onClose();
                    if (!_this.hasShownOnce) {
                        _this.hasShownOnce = true;
                    }
                }, this.showDuration);
            }
        }
    };
    class_1.prototype.onClose = function () {
        this.alertRef.addEventListener('transitionend', this.onTransitionEnd.bind(this));
        this.opened = false;
    };
    class_1.prototype.onTransitionEnd = function (event) {
        this.alertRef.removeEventListener('transitionend', this.onTransitionEnd.bind(this));
        event.preventDefault();
        event.stopPropagation();
        this.tfAlertTransitionedOut.emit({
            alertId: this.alertId
        });
    };
    class_1.prototype.componentWillLoad = function () {
        var _this = this;
        // this.clonedAlertId = String(this.alertId);
        if (this.autoOpen) {
            this.autoOpenDelay = this.autoOpenDelay < 100 ? 100 : this.autoOpenDelay;
            setTimeout(function () {
                _this.open();
            }, this.autoOpenDelay);
        }
    };
    class_1.prototype.render = function () {
        var _this = this;
        var icon = null;
        if (this.icon) {
            var IconTag = "tf-icon-" + this.icon;
            icon = h(IconTag, { class: "icon" });
        }
        var buttonContainer = null;
        if (this.showButton) {
            buttonContainer = (h("div", { class: "alert-right" }, h("tf-button", { size: this.buttonSize, colour: this.buttonColour }, this.buttonTitle)));
        }
        return (h("div", { class: "alert-wrapper " + (this.isOpen ? 'show' : 'hide') }, h("div", { class: "\n\t\t\t\t\talert\n\t\t\t\t\t" + (this.isOpen ? 'show' : this.hasShownOnce ? 'hide' : 'initial') + "\n\t\t\t\t", id: this.alertId, ref: function (el) { return _this.alertRef = el; } }, h("div", { class: "alert-container" }, h("div", { class: "alert-left" }, h("div", { class: "icon-container " + this.colour }, icon)), h("div", { class: "alert-body" }, h("p", { class: "message " + this.colour }, this.message)), buttonContainer))));
    };
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "opened": ["openedPropChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
Modal.style = alertCss;
export { Modal as tf_alert };
