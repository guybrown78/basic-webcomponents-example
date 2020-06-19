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
import { r as registerInstance, h, c as createEvent, g as getElement } from './index-67a2bf30.js';
import { a as getColourClassname, b as getTextAlignClassname } from './utils-b80ebc56.js';
var AnchorTag = /** @class */ (function () {
    function AnchorTag(hostRef) {
        registerInstance(this, hostRef);
        this.url = null;
        this.tagTitle = null;
    }
    AnchorTag.prototype.render = function () {
        return (h("a", { href: this.url, title: this.tagTitle }, h("slot", null)));
    };
    return AnchorTag;
}());
AnchorTag.style = "a{\n\t\t\t@apply font-medium text-blue-600 transition ease-in-out duration-150;\n\t\t}\n\t\ta:hover{\n\t\t\t@apply text-blue-500;\n\t\t}\n\t\ta:focus{\n\t\t\t@apply outline-none underline;\n\t\t}";
var formStylesCss = ".form-card,.form-card-wrapper{position:relative}.form-card{margin:auto;padding:3rem 1.25rem;min-height:100%;background-color:#fff;border-radius:.25rem;display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.top{z-index:50}.form-title{margin:1rem 0;padding-bottom:.5rem;width:100%;color:#363154;border:solid #32f7dc;border-width:0 0 4px}.form-wrapper{margin-top:2rem;width:100%}.colour-navy{background-color:#363154}.colour-default,.colour-white{background-color:#fff}.colour-blue{background-color:#224595}.colour-aqua{background-color:#32f7dc}.colour-grey{background-color:#d0dfe3}.form-card-errors{margin-top:-5px;z-index:10}.form-errors{background-color:#b92950;color:#fff;padding-top:.75rem;padding-bottom:.75rem}.form-errors-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.form-errors-icon{width:30px;height:35px;padding-right:.75rem;color:#b92950}.form-errors-icon-spacer{display:block;display:block;height:.25rem}.error-message-title{font-family:Roboto Condensed,sans-serif;color:#fff;font-weight:700}.form-errors-items{list-style-type:none;margin:0;padding:0}.hex-exclamation-icon{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.hexagon-svg{height:35px;color:#fff}.hex-fill,.hex-outline{fill:currentColor}.exclamation-icon{height:18px;width:18px;position:absolute;z-index:50;color:#b92950}.form-error-list-item{display:block}@media (min-width:640px){.form-card{width:40%;padding-left:1.5rem;padding-right:1.5rem}}";
var FormCard = /** @class */ (function () {
    function FormCard(hostRef) {
        registerInstance(this, hostRef);
    }
    FormCard.prototype.render = function () {
        return (h("div", { class: "form-card-wrapper" }, h("div", { class: "form-card top" }, h("slot", null)), h("div", { class: "form-card-errors" }, h("slot", { name: "formerrors" }))));
    };
    return FormCard;
}());
FormCard.style = formStylesCss;
var formStylesCss$1 = ".form-card,.form-card-wrapper{position:relative}.form-card{margin:auto;padding:3rem 1.25rem;min-height:100%;background-color:#fff;border-radius:.25rem;display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.top{z-index:50}.form-title{margin:1rem 0;padding-bottom:.5rem;width:100%;color:#363154;border:solid #32f7dc;border-width:0 0 4px}.form-wrapper{margin-top:2rem;width:100%}.colour-navy{background-color:#363154}.colour-default,.colour-white{background-color:#fff}.colour-blue{background-color:#224595}.colour-aqua{background-color:#32f7dc}.colour-grey{background-color:#d0dfe3}.form-card-errors{margin-top:-5px;z-index:10}.form-errors{background-color:#b92950;color:#fff;padding-top:.75rem;padding-bottom:.75rem}.form-errors-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.form-errors-icon{width:30px;height:35px;padding-right:.75rem;color:#b92950}.form-errors-icon-spacer{display:block;display:block;height:.25rem}.error-message-title{font-family:Roboto Condensed,sans-serif;color:#fff;font-weight:700}.form-errors-items{list-style-type:none;margin:0;padding:0}.hex-exclamation-icon{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.hexagon-svg{height:35px;color:#fff}.hex-fill,.hex-outline{fill:currentColor}.exclamation-icon{height:18px;width:18px;position:absolute;z-index:50;color:#b92950}.form-error-list-item{display:block}@media (min-width:640px){.form-card{width:40%;padding-left:1.5rem;padding-right:1.5rem}}";
var FormTitle = /** @class */ (function () {
    function FormTitle(hostRef) {
        registerInstance(this, hostRef);
    }
    FormTitle.prototype.render = function () {
        return (h("div", { class: "form-title" }, h("slot", null)));
    };
    return FormTitle;
}());
FormTitle.style = formStylesCss$1;
var formStylesCss$2 = ".form-card,.form-card-wrapper{position:relative}.form-card{margin:auto;padding:3rem 1.25rem;min-height:100%;background-color:#fff;border-radius:.25rem;display:-ms-flexbox;display:flex;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.top{z-index:50}.form-title{margin:1rem 0;padding-bottom:.5rem;width:100%;color:#363154;border:solid #32f7dc;border-width:0 0 4px}.form-wrapper{margin-top:2rem;width:100%}.colour-navy{background-color:#363154}.colour-default,.colour-white{background-color:#fff}.colour-blue{background-color:#224595}.colour-aqua{background-color:#32f7dc}.colour-grey{background-color:#d0dfe3}.form-card-errors{margin-top:-5px;z-index:10}.form-errors{background-color:#b92950;color:#fff;padding-top:.75rem;padding-bottom:.75rem}.form-errors-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.form-errors-icon{width:30px;height:35px;padding-right:.75rem;color:#b92950}.form-errors-icon-spacer{display:block;display:block;height:.25rem}.error-message-title{font-family:Roboto Condensed,sans-serif;color:#fff;font-weight:700}.form-errors-items{list-style-type:none;margin:0;padding:0}.hex-exclamation-icon{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.hexagon-svg{height:35px;color:#fff}.hex-fill,.hex-outline{fill:currentColor}.exclamation-icon{height:18px;width:18px;position:absolute;z-index:50;color:#b92950}.form-error-list-item{display:block}@media (min-width:640px){.form-card{width:40%;padding-left:1.5rem;padding-right:1.5rem}}";
var FormTitle$1 = /** @class */ (function () {
    function FormTitle$1(hostRef) {
        registerInstance(this, hostRef);
    }
    FormTitle$1.prototype.render = function () {
        return (h("div", { class: "form-wrapper" }, h("slot", null)));
    };
    return FormTitle$1;
}());
FormTitle$1.style = formStylesCss$2;
var elementsCss = "dd,dl,h1,h2,h5,p{margin:0}h1,h2,h5{font-size:inherit;font-weight:inherit}.colour-default,.colour-navy{color:#363154}.colour-white{color:#fff}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.text-align-left{text-align:left}.text-align-center{text-align:center}.text-align-right{text-align:right}.text-align-justify{text-align:justify}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{background-color:transparent;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-a.colour-white:hover{color:#e7eff1}.tag-a.colour-blue:hover{color:#7a8fbf}.tag-a.colour-aqua:hover{color:#2ad2bb}.tag-a.colour-grey:hover{color:#9ba7aa}.tag-a.colour-default:hover,.tag-a.colour-navy:hover{color:#868398}.tag-h1{font-family:Roboto Condensed,sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{background-color:transparent;font-size:1.5rem;line-height:1.75rem}.span-title,.tag-h2{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.5rem;margin-bottom:.5rem;font-weight:800}.span-title{font-size:1.125rem;line-height:1.5rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold,.span-description{font-family:Roboto Condensed,sans-serif}.span-bold{font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";
var HOneTag = /** @class */ (function () {
    function HOneTag(hostRef) {
        registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
    }
    HOneTag.prototype.render = function () {
        return (h("h2", { class: "\n\t\t\t\ttag-h1 \n\t\t\t\t" + getColourClassname(this.colour) + "\n\t\t\t\t" + getTextAlignClassname(this.textAlign) + "\n\t\t\t" }, h("slot", null)));
    };
    return HOneTag;
}());
HOneTag.style = elementsCss;
var inputCss = ".form-label{display:block;font-size:.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}*,input,input[type=password],input[type=text]{-webkit-box-sizing:border-box;box-sizing:border-box}*{border:0 solid #d2d6dc}.label-input-container{margin-bottom:1rem}.input-container{display:-ms-flexbox;display:flex;margin-top:.25rem;position:relative;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.form-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#d0dfe3;border-width:1px;border-radius:.375rem;padding:.5rem .75rem;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.form-input::-webkit-input-placeholder{color:#d7e3e7;opacity:1}.form-input:-ms-input-placeholder{color:#d7e3e7;opacity:1}.form-input::-ms-input-placeholder{color:#d7e3e7;opacity:1}.form-input:-ms-input-placeholder,.form-input::-moz-placeholder,.form-input::-ms-input-placeholder,.form-input::-webkit-input-placeholder,.form-input::placeholder{color:#d7e3e7;opacity:1}.form-input.form-input-error::-webkit-input-placeholder{color:#f8b4b4;opacity:1}.form-input.form-input-error:-ms-input-placeholder{color:#f8b4b4;opacity:1}.form-input.form-input-error::-ms-input-placeholder{color:#f8b4b4;opacity:1}.form-input.form-input-error:-ms-input-placeholder,.form-input.form-input-error::-moz-placeholder,.form-input.form-input-error::-ms-input-placeholder,.form-input.form-input-error::-webkit-input-placeholder,.form-input.form-input-error::placeholder{color:#f8b4b4;opacity:1}.form-input:focus{outline:0;border-color:#8598c4;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.form-input-styled{display:block;width:100%}.form-input-error{color:#771d1d;border-color:#f8b4b4}.form-input-error:focus{border-color:#f8b4b4;-webkit-box-shadow:0 0 0 3px rgba(248,180,180,.45);box-shadow:0 0 0 3px rgba(248,180,180,.45)}.form-input-leading-icon{padding-left:2.5rem}.form-input-trailing-icon{padding-right:2.5rem}.hint{color:#d0dfe3}.error,.hint{margin-top:.5rem;font-size:.875rem}.error{color:#e02424}.svg-container{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:none}.svg-leading{top:0;bottom:0;left:0;padding-left:.75rem}.svg-trailing{top:0;bottom:0;right:0;padding-right:.75rem}.svg-icon{color:#9fa6b2}.svg-error-icon,.svg-icon{height:1.25rem;width:1.25rem}.svg-error-icon{color:#f98080}@media (min-width:640px){.form-input-styled{font-size:.875rem;line-height:1.25rem}}";
var List = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        //
        this.showHint = false;
        this.showError = false;
        this.showLabel = true;
        this.showLeadingIcon = false;
        this.showTrailingIcon = false;
        this.showErrorIcon = false;
        //
        this.name = null;
        this.label = null;
        this.hint = null;
        this.placeholder = '';
        this.required = false;
        this.autoComplete = 'on';
        this.inputType = 'text';
        this.errorMessage = null;
        this.error = false;
        this.hideLabel = false;
        this.icon = null;
        this.iconPosition = null;
        this.tfOnInput = createEvent(this, "tfOnInput", 7);
    }
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
    class_1.prototype.componentWillLoad = function () {
        if (this.hint) {
            this.showHint = true;
        }
        this.setError();
        if (this.hideLabel) {
            this.showLabel = false;
        }
        if (this.icon && this.iconPosition) {
            if (this.iconPosition == 'left' || this.iconPosition == 'leading') {
                this.showLeadingIcon = true;
            }
            if (this.iconPosition == 'right' || this.iconPosition == 'trailing') {
                this.showTrailingIcon = true;
            }
        }
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
    class_1.prototype.setError = function () {
        if (!this.errorMessage) {
            this.errorMessage = 'Error with the input field';
        }
        this.showErrorIcon = this.showError = this.error;
    };
    class_1.prototype.render = function () {
        var _this = this;
        var bottomText = null;
        if (this.showHint) {
            bottomText = h("p", { class: "hint" }, this.hint);
        }
        if (this.showError) {
            bottomText = h("p", { class: "error" }, this.errorMessage);
        }
        //
        var leadingSVG = null;
        var trailingSVG = null;
        var IconTag = null;
        //
        if (this.showLeadingIcon || this.showTrailingIcon) {
            IconTag = "tf-icon-" + this.icon;
        }
        if (this.showLeadingIcon) {
            leadingSVG = (h("div", { class: "svg-container svg-leading" }, h(IconTag, { class: "svg-icon" })));
        }
        //
        if (this.showTrailingIcon) {
            trailingSVG = (h("div", { class: "svg-container svg-trailing" }, h(IconTag, { class: "svg-icon" })));
        }
        else if (this.showErrorIcon) {
            trailingSVG = (h("div", { class: "svg-container svg-trailing" }, h("tf-icon-exclamation", { class: "svg-error-icon" })));
        }
        //
        return (h("div", { class: "label-input-container" }, h("label", { class: "" + (this.showLabel ? 'form-label' : 'form-label-sr-only'), htmlFor: this.name }, this.label), h("div", { class: "input-container" }, leadingSVG, h("input", { id: this.name, name: this.name, ref: function (el) { return _this.itemRef = el; }, class: "\n\t\t\t\t\t\t\tform-input \n\t\t\t\t\t\t\tform-input-styled \n\t\t\t\t\t\t\t" + (this.showError ? 'form-input-error' : '') + " \n\t\t\t\t\t\t\t" + (this.showLeadingIcon ? 'form-input-leading-icon' : '') + " \n\t\t\t\t\t\t\t" + (this.showTrailingIcon || this.showErrorIcon ? 'form-input-trailing-icon' : '') + "\n\t\t\t\t\t\t", placeholder: this.placeholder, required: this.required, type: this.inputType, value: this.value, autoComplete: this.autoComplete, onInput: this.onUserInput.bind(this) }), trailingSVG), bottomText));
    };
    Object.defineProperty(class_1.prototype, "el", {
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
List.style = inputCss;
var nodeFlexCss = "#node-container,.node-container{margin-bottom:.5rem;background-color:#fff;border-radius:.25rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);padding:.25rem .75rem}#base-node,#node-container,.base-node,.node-container{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center}#fxl,.fxl{display:-ms-flexbox;display:flex;margin-right:1rem}#flex,.flex{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%}#fxr,.fxr{display:-ms-flexbox;display:flex;margin-left:1rem}";
var Node = /** @class */ (function () {
    function Node(hostRef) {
        registerInstance(this, hostRef);
        this.rWidth = null;
    }
    Node.prototype.render = function () {
        var stylesR = {};
        if (this.rWidth) {
            stylesR['width'] = this.rWidth;
        }
        return (h("div", { id: "base-node", class: "base-node" }, h("div", { id: "flex", class: "flex" }, h("slot", { name: "flex" })), h("div", { id: "fxr", class: "fxr", style: stylesR }, h("slot", { name: "fxr" }))));
    };
    return Node;
}());
Node.style = nodeFlexCss;
export { AnchorTag as tf_a_tag, FormCard as tf_form_card, FormTitle as tf_form_title, FormTitle$1 as tf_form_wrapper, HOneTag as tf_h1, List as tf_input, Node as tf_node_flex_fxr };
