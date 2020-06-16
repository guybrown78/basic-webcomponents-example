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
import { r as registerInstance, c as createEvent, h, g as getElement } from './index-67a2bf30.js';
var selectCss = ".form-label{display:block;font-size:.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}select{padding:0;line-height:inherit;color:inherit;text-transform:none;margin:0}*,select{-webkit-box-sizing:border-box;box-sizing:border-box}*{border:0 solid #d2d6dc}.label-select-container{margin-bottom:1rem}.input-container{display:-ms-flexbox;display:flex;margin-top:.25rem;position:relative;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.form-select{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M7 7l3-3 3 3m0 6l-3 3-3-3' stroke='%239fa6b2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");-webkit-print-color-adjust:exact;color-adjust:exact;background-repeat:no-repeat;background-position:right .5rem center;background-size:1.5em 1.5em;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#d0dfe3;border-width:1px;border-radius:.375rem;padding:.5rem 2.5rem .5rem .75rem;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.form-select::-ms-expand{color:#9fa6b2;border:none}@media not print{.form-select::-ms-expand{display:none}}@media print and (-ms-high-contrast:active),print and (-ms-high-contrast:none){.form-select{padding-right:.75rem}}.form-select:focus{outline:0;border-color:#8598c4;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.form-select-styled{display:block;width:100%}.form-select-error{color:#771d1d;border-color:#f8b4b4}.form-select-error:focus{border-color:#f8b4b4;-webkit-box-shadow:0 0 0 3px rgba(248,180,180,.45);box-shadow:0 0 0 3px rgba(248,180,180,.45)}.form-select option:disabled{color:#d7e3e7;opacity:1}.hint{color:#d0dfe3}.error,.hint{margin-top:.5rem;font-size:.875rem}.error{color:#e02424}tf-select-option{display:none}@media (min-width:640px){.form-select-styled{font-size:.875rem;line-height:1.25rem}}";
var List = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        //
        this.showHint = false;
        this.showError = false;
        this.showLabel = true;
        this.showErrorIcon = false;
        //
        this.name = null;
        this.label = null;
        this.hint = null;
        this.placeholder = '';
        this.required = false;
        this.errorMessage = null;
        this.error = false;
        this.hideLabel = false;
        this.icon = null;
        this.iconPosition = null;
        //
        this.parsedOptions = [];
        this.tfOnSelect = createEvent(this, "tfOnSelect", 7);
    }
    //
    class_1.prototype.errorChanged = function (newValue, oldValue) {
        if (newValue !== oldValue) {
            this.error = newValue;
            this.setError();
        }
    };
    class_1.prototype.getValue = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.itemRef.value];
                }
                catch (e) {
                    throw "Can't find itemRef.value for " + this.name + " tf-select. More details: " + e;
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.getItemRef = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.itemRef];
                }
                catch (e) {
                    throw "Can't find itemRef for " + this.name + " tf-select. More details: " + e;
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.componentWillLoad = function () {
        var _this = this;
        if (this.hint) {
            this.showHint = true;
        }
        this.setError();
        if (this.hideLabel) {
            this.showLabel = false;
        }
        // parse options
        var optionsEls = this.slotElement.getElementsByTagName('tf-select-option');
        // 
        Array.from(optionsEls).forEach(function (opt) {
            var title = (' ' + opt.innerHTML).slice(1);
            title = title.replace(/<\!--.*?-->/g, "");
            var value = (' ' + opt.getAttribute('value')).slice(1);
            var selected = opt.getAttribute('selected') !== null;
            var disabled = opt.getAttribute('disabled') !== null;
            _this.parsedOptions.push({
                value: value,
                title: title,
                selected: selected,
                disabled: disabled
            });
            opt.innerHTML = "";
            opt = null;
        });
        this.slotElement.innerHTML = "";
    };
    class_1.prototype.onUserInteraction = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getValue()];
                    case 1:
                        _a.value = _b.sent();
                        this.tfOnSelect.emit({
                            id: this.name,
                            value: this.value,
                            proxyEvent: Object.assign({}, event)
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.setError = function () {
        if (!this.errorMessage) {
            this.errorMessage = 'Error with the selection';
        }
        this.showErrorIcon = this.showError = this.error;
    };
    class_1.prototype.render = function () {
        var _this = this;
        var options = null;
        if (this.parsedOptions.length) {
            options = this.parsedOptions.map(function (opt) {
                if (opt.value === _this.value || opt.selected) {
                    return (h("option", { value: opt.value, selected: true }, opt.title));
                }
                else {
                    return (h("option", { value: opt.value, disabled: opt.disabled }, opt.title));
                }
            });
        }
        var bottomText = null;
        if (this.showHint) {
            bottomText = h("p", { class: "hint" }, this.hint);
        }
        if (this.showError) {
            bottomText = h("p", { class: "error" }, this.errorMessage);
        }
        return (h("div", { class: "label-select-container" }, h("label", {
            // for="country" 
            htmlFor: this.name, class: "" + (this.showLabel ? 'form-label' : 'form-label-sr-only')
        }, this.label), h("div", { class: "input-container" }, h("select", { id: this.name, name: this.name, ref: function (el) { return _this.itemRef = el; }, class: "\n\t\t\t\t\t\t\tform-select \n\t\t\t\t\t\t\tform-select-styled \n\t\t\t\t\t\t\t" + (this.showError ? 'form-select-error' : '') + " \n\t\t\t\t\t\t", required: this.required, onInput: this.onUserInteraction.bind(this) }, options)), bottomText));
    };
    Object.defineProperty(class_1.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "error": ["errorChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
List.style = selectCss;
export { List as tf_select };
