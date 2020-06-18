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
var searchCss = ".form-label{display:block;font-size:.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}*,input,input[type=password],input[type=text]{-webkit-box-sizing:border-box;box-sizing:border-box}*{border:0 solid #d2d6dc}.label-input-container{margin-bottom:1rem}.input-container{display:-ms-flexbox;display:flex;margin-top:.25rem;position:relative;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.form-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#d0dfe3;border-width:1px;border-radius:.375rem;padding:.5rem .75rem;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.form-input::-webkit-input-placeholder{color:#d7e3e7}.form-input:-ms-input-placeholder{color:#d7e3e7}.form-input::-ms-input-placeholder{color:#d7e3e7}.form-input:-ms-input-placeholder,.form-input::-moz-placeholder,.form-input::-ms-input-placeholder,.form-input::-webkit-input-placeholder,.form-input::placeholder{color:#d7e3e7}.form-input.form-input-error::-webkit-input-placeholder{color:#f8b4b4;opacity:1}.form-input.form-input-error:-ms-input-placeholder{color:#f8b4b4;opacity:1}.form-input.form-input-error::-ms-input-placeholder{color:#f8b4b4;opacity:1}.form-input.form-input-error:-ms-input-placeholder,.form-input.form-input-error::-moz-placeholder,.form-input.form-input-error::-ms-input-placeholder,.form-input.form-input-error::-webkit-input-placeholder,.form-input.form-input-error::placeholder{color:#f8b4b4;opacity:1}.form-input:focus{outline:0;border-color:#8598c4;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.form-input-styled{display:block;width:100%}.form-input-error{color:#771d1d;border-color:#f8b4b4}.form-input-error:focus{border-color:#f8b4b4;-webkit-box-shadow:0 0 0 3px rgba(248,180,180,.45);box-shadow:0 0 0 3px rgba(248,180,180,.45)}.form-input-leading-icon{padding-left:2.5rem}.form-input-trailing-icon{padding-right:2.5rem}.hint{color:#d0dfe3}.error,.hint{margin-top:.5rem;font-size:.875rem}.error{color:#e02424}.svg-container{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:none}.svg-leading{top:0;bottom:0;left:0;padding-left:.75rem}.svg-trailing{top:0;bottom:0;right:0;padding-right:.75rem}.svg-icon{color:#9fa6b2}.svg-error-icon,.svg-icon{height:1.25rem;width:1.25rem}.svg-error-icon{color:#f98080}@media (min-width:640px){.form-input-styled{font-size:.875rem;line-height:1.25rem}}.form-input,.search-container{border-radius:9999px}.form-input{background-color:hsla(0,0%,100%,.25);padding-top:.75rem;padding-bottom:.75rem;border-style:none;color:#fff}.form-input:focus{background-color:#fff;color:#224595;border-color:#224595;-webkit-box-shadow:none;box-shadow:none}.form-input::-webkit-input-placeholder{color:#fff;opacity:1;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.form-input:-ms-input-placeholder{color:#fff;opacity:1;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;-moz-transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;-ms-transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.form-input::-ms-input-placeholder{color:#fff;opacity:1;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;-moz-transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;-ms-transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.form-input:-ms-input-placeholder,.form-input::-moz-placeholder,.form-input::-ms-input-placeholder,.form-input::-webkit-input-placeholder,.form-input::placeholder{color:#fff;opacity:1;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;-moz-transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;-ms-transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.form-input:focus::-webkit-input-placeholder{color:#224595;opacity:1}.form-input:focus:-ms-input-placeholder{color:#224595;opacity:1}.form-input:focus::-ms-input-placeholder{color:#224595;opacity:1}.form-input:focus:-ms-input-placeholder,.form-input:focus::-moz-placeholder,.form-input:focus::-ms-input-placeholder,.form-input:focus::-webkit-input-placeholder,.form-input:focus::placeholder{color:#224595;opacity:1}.form-input-leading-icon{padding-left:3rem}.svg-icon{color:#fff;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.svg-icon.is-focused{color:#224595}.label-input-container{position:relative;display:inline-block;width:100%}.search-results-panel{position:absolute;margin-top:.5rem;margin-bottom:.5rem;padding:.25rem;border-radius:.125rem;background-color:#fff;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);z-index:50;width:100%}";
var List = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        //
        this.isFocused = false;
        //
        this.name = null;
        this.placeholder = '';
        this.autoComplete = 'on';
        this.inputType = 'text';
        this.observer = null;
        this.tfOnInput = createEvent(this, "tfOnInput", 7);
        this.tfOnSearch = createEvent(this, "tfOnSearch", 7);
    }
    class_1.prototype.getValue = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.itemRef.value];
                }
                catch (e) {
                    throw "Can't find itemRef.value for " + this.name + " tf-input. More details: " + e;
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
                    throw "Can't find itemRef for " + this.name + " tf-input. More details: " + e;
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.onHandleOptionClicked = function (event) {
        console.log("...", event.detail.value);
        this.value = event.detail.value;
        this.emitSearchValue();
        // if(this.isOpen && event.detail.parent === this.generatedId){
        // 	event.preventDefault();
        // 	event.stopPropagation();
        // 	const dropdownId = this.dropdownId;
        // 	this.tfDropdownSelected.emit({
        // 		...event.detail,
        // 		dropdownId,
        // 	});
        // 	//
        // 	this.isOpen = false;
        // }
    };
    class_1.prototype.onUserInput = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getValue()];
                    case 1:
                        _a.value = _b.sent();
                        this.tfOnInput.emit({
                            id: this.name,
                            value: this.value,
                            proxyEvent: Object.assign({}, event)
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.onInputFocus = function () {
        this.isFocused = true;
    };
    class_1.prototype.onInputBlur = function () {
        this.isFocused = false;
    };
    class_1.prototype.onKeyPress = function (event) {
        if (!event)
            return null;
        var keyCode = event.keyCode || event.which;
        if (keyCode === 13) {
            // Enter pressed
            this.emitSearchValue();
        }
    };
    class_1.prototype.emitSearchValue = function () {
        console.log(this.name, this.value);
        this.tfOnSearch.emit({
            id: this.name,
            value: this.value,
        });
    };
    class_1.prototype.componentWillLoad = function () {
        this.initiateObserverMutation();
    };
    class_1.prototype.initiateObserverMutation = function () {
        // Options for the observer (which mutations to observe)
        var config = { attributes: true, childList: true, subtree: true };
        //
        var that = this;
        // Callback function to execute when mutations are observed
        var callback = function (mutationsList) {
            if (mutationsList.length) {
                that.updatedChildItems();
            }
        };
        // Create an observer instance linked to the callback function
        this.observer = new MutationObserver(callback);
        // Start observing the target node for configured mutations
        this.observer.observe(this.slotElement, config);
        // Disconnect the observing as componetnet is removed from DOM
    };
    class_1.prototype.disconnectedCallback = function () {
        // Stop observing the slotElement change
        this.observer.disconnect();
    };
    class_1.prototype.updatedChildItems = function () {
        var optionsEls = this.slotElement.getElementsByTagName('tf-dropdown-option');
        var items = [];
        Array.from(optionsEls).forEach(function (opt) {
            var label = opt.innerHTML.replace(/<\!--.*?-->/g, "");
            items.push({
                value: opt.getAttribute('value'),
                label: label,
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        //
        return (h("div", { class: "label-input-container" }, h("div", { class: "search-container input-container" }, h("div", { class: "svg-container svg-leading" }, h("tf-icon-search", { class: "\n\t\t\t\t\t\t\tsvg-icon\n\t\t\t\t\t\t\t" + (this.isFocused ? "is-focused" : "") + "\n\t\t\t\t\t\t" })), h("input", { id: this.name,
            // ref={el => this.itemRef = el}
            ref: function (el) { return _this.itemRef = el; }, class: "\n\t\t\t\t\t\t\tform-input \n\t\t\t\t\t\t\tform-input-styled \n\t\t\t\t\t\t\tform-input-leading-icon\n\t\t\t\t\t\t", placeholder: this.placeholder, type: this.inputType, value: this.value, autoComplete: "off", onInput: this.onUserInput.bind(this), onFocus: this.onInputFocus.bind(this), onBlur: this.onInputBlur.bind(this), onKeyPress: this.onKeyPress.bind(this) })), h("div", { class: "search-results-panel" }, h("slot", null))));
    };
    Object.defineProperty(class_1.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
List.style = searchCss;
export { List as tf_search };
