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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, c as createEvent, h, g as getElement } from './index-67a2bf30.js';
import { g as getSizeClassname, a as getColourClassname, b as getPaddingClassname, c as getSVGColourClassname, d as getTextAlignClassname, e as getTrafficLightColourClassname } from './utils-1247f068.js';
var appHeaderCss = "header{padding:0 1.375rem;margin-bottom:1.375rem;height:4.625rem;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.app-logo-container{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end}.app-logo{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.app-logo-icon{color:#224595}.app-logo-icon.clickable{cursor:pointer}.app-logo-initials{color:#fff;text-transform:uppercase;font-weight:400;font-size:1.25rem;text-align:center}.app-logo-initials::-moz-selection{color:none;background:none}.app-logo-initials::selection{color:none;background:none}.app-logo-initials::-moz-selection{color:none;background:none}h1{margin:0 0 0 .75rem;color:#fff;font-size:1.5rem;font-family:Roboto Condensed,sans-serif;line-height:1.5;font-weight:400}@media only screen and (max-width:640px){#app-logo-title{display:none}}#central-contailer{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;padding:0 3.125rem;-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:end;justify-content:flex-end}@media only screen and (max-width:640px){#central-contailer{display:none}}#quick-link-icon{color:#363154;font-size:1.25rem;text-align:center}#quick-link-icon::-moz-selection{color:none;background:none}#quick-link-icon::selection{color:none;background:none}#quick-link-icon::-moz-selection{color:none;background:none}#client-logo-container{justify-self:flex-end}#client-logo{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:112px;height:59px}#client-logo img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;overflow:hidden}#account-navigation-container{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:40px;height:59px}@media only screen and (max-width:640px){#account-navigation-container{display:none}}";
var AppHeader = /** @class */ (function () {
    function AppHeader(hostRef) {
        registerInstance(this, hostRef);
        this.appTitle = null;
        this.appInitials = null;
        this.showAppLogo = true;
        this.isLogoClickable = true;
        this.showClientLogo = false;
        this.showUserAccount = false;
        this.clientLogoSource = null;
        this.tfAppLogoClicked = createEvent(this, "tfAppLogoClicked", 7);
    }
    AppHeader.prototype.onButtonClickHandler = function (event) {
        if (this.isLogoClickable) {
            event.preventDefault();
            this.tfAppLogoClicked.emit();
        }
    };
    AppHeader.prototype.componentWillLoad = function () {
        this.hasQuickLinksSlot = !!this.hostElement.querySelector('[slot="quicklinks"]');
        this.hasClientLogoSlot = !!this.hostElement.querySelector('[slot="clientlogo"]');
        //
        if (!this.hasClientLogoSlot && (this.showClientLogo || this.userAccountMenuItems || this.clientLogoSource)) {
            console.log("Client logo set in the App Header with parameters has depreciated. It is encouraged that the Client Logo and User Account navigation elements (tf-app-client-logo) are set in the slot slot=\"clientlogo\". See https://tf-web-components-angular.netlify.app/header for more information and examples");
        }
    };
    AppHeader.prototype.render = function () {
        var clientLogo = null;
        if (this.hasClientLogoSlot) {
            clientLogo = h("slot", { name: "clientlogo" });
        }
        else if (this.clientLogoSource && (this.clientLogoSource && this.showClientLogo)) {
            clientLogo = (h("div", { id: "client-logo-container" }, h("tf-client-logo", { "show-client-logo": this.showClientLogo, "client-logo-source": this.clientLogoSource, "show-user-account": this.showUserAccount, "user-account-menu-items": this.userAccountMenuItems })));
        }
        var appLogo = null;
        if (this.showAppLogo) {
            appLogo = (h("div", { class: "app-logo-container" }, h("div", { class: "app-logo" }, h("tf-product-logo", { class: "app-logo-icon " + (this.isLogoClickable ? "clickable" : ""), code: this.appInitials, colour: this.isLogoClickable ? "gradient" : "white", "initials-colour": this.isLogoClickable ? "white" : "blue", size: "large", "as-outline": "false", onClick: this.onButtonClickHandler.bind(this) }), h("h1", { class: "app-logo-title" }, this.appTitle))));
        }
        return (h("header", null, appLogo, h("div", { id: "central-contailer" }, h("slot", { name: "quicklinks" })), clientLogo));
    };
    Object.defineProperty(AppHeader.prototype, "hostElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return AppHeader;
}());
AppHeader.style = appHeaderCss;
var clientLogoCss = ".outer-container{max-height:4.625rem;position:relative;height:100%;display:-ms-flexbox;display:flex}.client-logo-container{padding-left:.25rem;padding-right:.25rem;border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);background-color:#fff;height:100%;z-index:50}.client-logo,.client-logo-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.client-logo{width:112px;height:59px}.client-logo-image{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;overflow:hidden}.account-navigation-container{width:40px;height:59px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.dd-panel{position:absolute;width:100%;margin-top:.5rem;border-radius:.375rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);z-index:40}.dd-panel.show{top:58px;pointer-events:auto;opacity:1;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.2s;transition-duration:.2s}.dd-panel.hide{top:-30px;pointer-events:none;opacity:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:.1s;transition-duration:.1s}.dd-panel-container{border-bottom-right-radius:.375rem;border-bottom-left-radius:.375rem;background-color:#d0dfe3;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.05);box-shadow:0 0 0 1px rgba(0,0,0,.05)}.dd-panel-bg{padding:.75rem .25rem .25rem}.show-dividing-border{display:block;border:solid #363154;border-width:0 0 1px}";
var AppHeader$1 = /** @class */ (function () {
    function AppHeader$1(hostRef) {
        registerInstance(this, hostRef);
        this.clientLogoSource = null;
        this.showUserAccount = false;
        // @Prop() userAccountMenuItems:any;
        this.isOpen = false;
        this.dropdownItems = [];
        this.parsedOptions = [];
        this.dropdownIdentifier = "user-account-dd-nav";
        this.observer = null;
        this.tfUserAccountDropdownSelected = createEvent(this, "tfUserAccountDropdownSelected", 7);
    }
    AppHeader$1.prototype.handleClick = function (event) {
        if (this.isOpen) {
            var target = event.composedPath()[0];
            if (!target.matches('.dd-panel') &&
                !target.matches('.dd-panel-container') &&
                !target.matches('.dd-panel-bg') &&
                !target.matches('.dd-link') &&
                !target.matches('slot')) {
                event.preventDefault();
                event.stopPropagation();
                this.isOpen = false;
            }
        }
    };
    AppHeader$1.prototype.onHandleOptionClicked = function (event) {
        if (this.isOpen && event.detail.parent === this.dropdownIdentifier) {
            event.preventDefault();
            event.stopPropagation();
            this.tfUserAccountDropdownSelected.emit(Object.assign({}, event.detail));
            this.isOpen = false;
        }
    };
    //
    AppHeader$1.prototype.onToggle = function () {
        this.isOpen = !this.isOpen;
    };
    AppHeader$1.prototype.componentWillLoad = function () {
        this.parseDropdownItems();
        this.initiateObserverMutation();
    };
    AppHeader$1.prototype.initiateObserverMutation = function () {
        // Options for the observer (which mutations to observe)
        var config = { attributes: true, childList: true, subtree: true };
        //
        var that = this;
        // Callback function to execute when mutations are observed
        var callback = function (mutationsList) {
            if (mutationsList.length) {
                that.parseDropdownItems();
            }
            // Use traditional 'for loops' for IE 11
            // for(let mutation of mutationsList) {
            // 		if (mutation.type === 'childList') {
            // 		}
            // }
        };
        // Create an observer instance linked to the callback function
        this.observer = new MutationObserver(callback);
        // Start observing the target node for configured mutations
        this.observer.observe(this.slotElement, config);
        // Disconnect the observing as componetnet is removed from DOM
    };
    AppHeader$1.prototype.disconnectedCallback = function () {
        // Stop observing the slotElement change
        this.observer.disconnect();
    };
    AppHeader$1.prototype.parseDropdownItems = function () {
        var optionsEls = this.slotElement.getElementsByTagName('tf-dropdown-option');
        var items = [];
        Array.from(optionsEls).forEach(function (opt) {
            var label = opt.innerHTML.replace(/<\!--.*?-->/g, "");
            items.push({
                value: opt.getAttribute('value'),
                label: label,
            });
        });
        if (items.length) {
            this.dropdownItems = __spreadArrays(items);
        }
    };
    AppHeader$1.prototype.render = function () {
        var _this = this;
        var userAccount = null;
        var userAccountDropdown = null;
        if (this.showUserAccount) {
            userAccount = (h("div", { class: "account-navigation-container" }, h("tf-icon-button", { icon: this.isOpen ? 'close' : 'user', size: "xs", colour: this.isOpen ? 'navy' : 'white', "outline-colour": "navy", onClick: this.onToggle.bind(this) })));
            //
            userAccountDropdown = (h("div", { class: "\n\t\t\t\t\tdd-panel \n\t\t\t\t\t" + (this.isOpen ? 'show' : 'hide') + "\n\t\t\t\t" }, h("div", { class: "dd-panel-container dd-panel-grey" }, h("div", { class: "dd-panel-bg" }, this.dropdownItems.map(function (item, index) {
                return (h("tf-dropdown-rendered-option", { class: index + 1 < _this.dropdownItems.length ? "show-dividing-border" : "", value: item.value, "element-title": item.label, colour: "grey", parent: _this.dropdownIdentifier }, item.label));
            })))));
        }
        //
        return (h("div", { class: "outer-container" }, h("div", { class: "client-logo-container" }, h("div", { class: "client-logo" }, h("img", { class: "client-logo-image", src: this.clientLogoSource })), userAccount), userAccountDropdown));
    };
    Object.defineProperty(AppHeader$1.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return AppHeader$1;
}());
AppHeader$1.style = clientLogoCss;
var buttonCss = "#button-containing-span{display:-ms-inline-flexbox;display:inline-flex;width:100%;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.tw-btn{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;width:100%;-ms-flex-align:center;align-items:center;border-width:1px;border-color:transparent;text-align:center;font-family:Roboto Condensed,sans-serif;font-weight:500;text-transform:uppercase;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.size-s{padding:.5rem .75rem;line-height:1rem}.size-default,.size-m,.size-s{font-size:.875rem;border-radius:.375rem}.size-default,.size-m{padding:.5rem 1rem;line-height:1.25rem}.size-l{padding:.5rem 1rem}.size-l,.size-xl{font-size:1rem;line-height:1.5rem;border-radius:.375rem}.size-xl{padding:.75rem 1.5rem}.colour-blue,.colour-default{color:#fff;background-color:#224595}.colour-blue:hover,.colour-default:hover{background-color:#4260a4}.colour-blue:active,.colour-default:active{outline:0;border-color:#32f7dc;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45);background-color:#1e3d85}.colour-blue:focus,.colour-default:focus{outline:0;border-color:#1e3d85;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-aqua{outline:0;color:#122551;background-color:#32f7dc}.colour-aqua:hover{outline:0;background-color:#84faea}.colour-aqua:active{outline:0;border-color:transparent;background-color:#2ad2bb}.colour-aqua:focus{outline:0;border-color:#2ad2bb;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-navy{color:#fff;background-color:#363154}.colour-navy:hover{background-color:#534f6d}.colour-navy:active{border-color:#363154;background-color:#25223a}.colour-navy:active,.colour-navy:focus{outline:0;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-navy:focus{border-color:#25223a}.colour-grey{color:#122551;background-color:#d0dfe3}.colour-grey:hover{background-color:#d7e3e7}.colour-grey:active{border-color:#d0dfe3;background-color:#b1bdc1}.colour-grey:active,.colour-grey:focus{outline:0;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-grey:focus{border-color:#b1bdc1}.colour-white{color:#122551;background-color:#fff}.colour-white:hover{background-color:#ecf2f3}.colour-white:active{border-color:#ecf2f3;background-color:#e7eff1}.colour-white:active,.colour-white:focus{outline:0;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-white:focus{border-color:#e7eff1}.disabled,.disabled:hover{color:#b1bdc1;background-color:#e7eff1}.icon-xs-l{margin-left:-.125rem;margin-right:.5rem}.icon-xs-l,.icon-xs-r{height:1rem;width:1rem}.icon-xs-r{margin-left:.5rem;margin-right:-.125rem}.icon-s-l{margin-left:-.125rem;margin-right:.5rem}.icon-s-l,.icon-s-r{height:1rem;width:1rem}.icon-s-r{margin-left:.5rem;margin-right:-.125rem}.icon-default-l,.icon-m-l{margin-left:-.25rem;margin-right:.5rem;height:1.25rem;width:1.25rem}.icon-default-r,.icon-m-r{margin-left:.5rem;margin-right:-.25rem;height:1.25rem;width:1.25rem}.icon-l-l{margin-left:-.25rem;margin-right:.75rem}.icon-l-l,.icon-l-r{height:1.25rem;width:1.25rem}.icon-l-r{margin-left:.75rem;margin-right:-.25rem}.icon-xl-l{margin-left:-.25rem;margin-right:.75rem}.icon-xl-l,.icon-xl-r{height:1.25rem;width:1.25rem}.icon-xl-r{margin-left:.75rem;margin-right:-.25rem}.hex-container{display:-ms-flexbox;display:flex;position:relative}.central-icon{position:absolute;z-index:50;pointer-events:none}.hex-btn{padding:0;display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;width:100%;-ms-flex-align:center;align-items:center;border:1px transparent;text-align:center;font-family:Roboto Condensed,sans-serif;font-weight:500;text-transform:uppercase;cursor:pointer;background-color:transparent}.hex-btn,.hex-fill,.hex-outline{-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.hex-fill,.hex-outline{fill:currentColor}.hex-btn:hover{border-style:none;background-color:transparent}.hex-btn:active,.hex-btn:focus{border-style:none;-webkit-box-shadow:none;box-shadow:none;background-color:transparent}.hexagon{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;z-index:40}.hexagon-svg{fill:rgba(255,255,0,0);width:100%;height:100%}";
var Button = /** @class */ (function () {
    function Button(hostRef) {
        registerInstance(this, hostRef);
        this.size = 'default';
        this.colour = 'default';
        this.icon = null;
        this.iconPosition = 'default';
        this.buttonId = null;
        this.buttonType = 'button';
        this.disabled = false;
    }
    Button.prototype.getIconClassname = function (s, p) {
        var className = s === "xl" || s === "extra-large" ?
            p === "right" ? "icon-xl-r" : "icon-xl-l"
            : s === "l" || s === "large" ?
                p === "right" ? "icon-l-r" : "icon-l-l"
                : s === "m" || s === "medium" ?
                    p === "right" ? "icon-m-r" : "icon-m-l"
                    : s === "s" || s === "small" ?
                        p === "right" ? "icon-s-r" : "icon-s-l"
                        : s === "xs" || s === "extra-small" ?
                            p === "right" ? "icon-xs-r" : "icon-xs-l"
                            : p === "right" ? "icon-default-r" : "icon-default-l";
        return className;
    };
    Button.prototype.render = function () {
        var icon = null;
        if (this.icon) {
            var IconTag = "tf-icon-" + this.icon;
            // icon = <IconTag class={`icon-${this.size}-${this.iconPosition === 'right' ? 'r' : 'l'}`}></IconTag>;
            icon = h(IconTag, { class: this.getIconClassname(this.size, this.iconPosition) });
        }
        return (h("span", { id: "button-containing-span" }, h("button", { class: "\n\t\t\t\t\t\ttw-btn \n\t\t\t\t\t\t" + getSizeClassname(this.size) + "\n\t\t\t\t\t\t" + getColourClassname(this.colour) + "\n\t\t\t\t\t\t" + (this.disabled ? 'disabled' : '') + "\n\t\t\t\t\t", type: this.buttonType, id: this.buttonId, disabled: this.disabled }, (icon && (this.iconPosition == 'left' || this.iconPosition == 'default')) &&
            icon, h("slot", null), (icon && this.iconPosition == 'right') &&
            icon)));
    };
    return Button;
}());
Button.style = buttonCss;
var buttonContainerCss = "#button-containing-span{display:-ms-inline-flexbox;display:inline-flex;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}";
var Button$1 = /** @class */ (function () {
    function Button$1(hostRef) {
        registerInstance(this, hostRef);
        this.size = 'default'; //SizeEnums.default;
    }
    Button$1.prototype.render = function () {
        return (h("span", { id: "button-containing-span" }, h("slot", null)));
    };
    return Button$1;
}());
Button$1.style = buttonContainerCss;
var cardCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}section{padding:.9375rem 1.375rem;margin-bottom:1.375rem;border-radius:.75rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}section.default,section.grey{background-color:#d0dfe3}section.white{background-color:#fff}section.navy{background-color:#363154}section.blue{background-color:#224595}section.aqua{background-color:#32f7dc}section.transparent{background-color:transparent;-webkit-box-shadow:none;box-shadow:none}#card-content-container{margin-bottom:.3125rem;background-color:#fff;border-radius:.4375rem;-webkit-box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);padding:.25rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1;flex:1}";
var Card = /** @class */ (function () {
    function Card(hostRef) {
        registerInstance(this, hostRef);
        this.colour = 'default';
        this.padding = 'default';
    }
    Card.prototype.render = function () {
        return (h("section", { class: "\n\t\t\t\t" + this.colour + " \n\t\t\t\t" + getPaddingClassname(this.padding) + "\n\t\t\t" }, h("slot", null)));
    };
    return Card;
}());
Card.style = cardCss;
var cardContainerCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}#card-container{display:-ms-flexbox;display:flex;margin-bottom:1.375rem}@media only screen and (max-width:640px){#card-container{-ms-flex-direction:column;flex-direction:column;margin-bottom:0}}#contained-card{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex:1;flex:1;padding:.9375rem 1.375rem;margin-bottom:1.375rem;border-radius:.75rem;-webkit-box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);min-height:100%;height:inherit}#contained-card.default,#contained-card.grey{background-color:#d0dfe3}#contained-card.navy{background-color:#363154}#contained-card-slot-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}";
var CardContainer = /** @class */ (function () {
    function CardContainer(hostRef) {
        registerInstance(this, hostRef);
        this.colour = 'default';
    }
    CardContainer.prototype.render = function () {
        return (h("div", { id: "card-container" }, h("slot", null)));
    };
    return CardContainer;
}());
CardContainer.style = cardContainerCss;
var cardCss$1 = "*{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}section{padding:.9375rem 1.375rem;margin-bottom:1.375rem;border-radius:.75rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}section.default,section.grey{background-color:#d0dfe3}section.white{background-color:#fff}section.navy{background-color:#363154}section.blue{background-color:#224595}section.aqua{background-color:#32f7dc}section.transparent{background-color:transparent;-webkit-box-shadow:none;box-shadow:none}#card-content-container{margin-bottom:.3125rem;background-color:#fff;border-radius:.4375rem;-webkit-box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);padding:.25rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1;flex:1}";
var Node = /** @class */ (function () {
    function Node(hostRef) {
        registerInstance(this, hostRef);
    }
    Node.prototype.render = function () {
        return (h("div", { id: "card-content-container" }, h("slot", null)));
    };
    return Node;
}());
Node.style = cardCss$1;
var cardTitleCss = "h2{-webkit-margin-before:20px;margin-block-start:20px;-webkit-margin-after:15px;margin-block-end:15px;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;margin-left:0;margin-right:0;font-family:Roboto Condensed,sans-serif;font-size:22px;line-height:22px;font-weight:700;display:block}h2.blue,h2.default{color:#224595}h2.white{color:#fff}";
var CardTitle = /** @class */ (function () {
    function CardTitle(hostRef) {
        registerInstance(this, hostRef);
        this.colour = "blue";
    }
    CardTitle.prototype.render = function () {
        return (h("h2", { class: this.colour }, h("slot", null)));
    };
    return CardTitle;
}());
CardTitle.style = cardTitleCss;
var checkboxCss = ".checkbox-wrapper{-ms-flex-direction:column;flex-direction:column;margin-top:1rem}.form-label{display:block;font-size:.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.input-label-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.checkbox-container{width:30px;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start}*,input,input[type=checkbox]{-webkit-box-sizing:border-box;box-sizing:border-box}*{border:0 solid #d2d6dc}.form-checkbox{-webkit-print-color-adjust:exact;color-adjust:exact;background-origin:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;vertical-align:middle;-ms-flex-negative:0;flex-shrink:0;width:1.5rem;height:1.5rem;color:#224595;border-color:#d0dfe3;border-width:1px;border-radius:.25rem}.form-checkbox:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293z'/%3E%3C/svg%3E\");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:50%;background-repeat:no-repeat}@media not print{.form-checkbox::-ms-check{border-width:1px;color:transparent;background:inherit;border-color:inherit;border-radius:inherit}}.form-checkbox:focus{outline:0;border-color:#8598c4;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.form-checkbox:checked:focus{border-color:transparent}.form-checkbox-styled{height:1rem;width:1rem;color:#224595;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.form-checkbox-error{color:#771d1d;border-color:#f8b4b4}.form-checkbox-error:focus{border-color:#f8b4b4;-webkit-box-shadow:0 0 0 3px rgba(248,180,180,.45);box-shadow:0 0 0 3px rgba(248,180,180,.45)}.bottom-text{margin-left:30px;margin-top:2px;font-size:.875rem}.bottom-text.hide{visibility:hidden}.bottom-text.error{color:#e02424}.bottom-text.hint{color:#d0dfe3}";
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
        this.checked = false;
        this.required = false;
        this.errorMessage = null;
        this.error = false;
        this.hideLabel = false;
        this.tfOnChecked = createEvent(this, "tfOnChecked", 7);
    }
    //
    class_1.prototype.errorChanged = function (newValue, oldValue) {
        if (newValue !== oldValue) {
            this.error = newValue;
            this.setError();
        }
    };
    class_1.prototype.getChecked = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.itemRef.checked];
                }
                catch (e) {
                    throw "Can't find itemRef.checked for " + this.name + " tf-checkbox. More details: " + e;
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.getValue = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.itemRef.value];
                }
                catch (e) {
                    throw "Can't find itemRef.value for " + this.name + " tf-checkbox. More details: " + e;
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
                    throw "Can't find itemRef for " + this.name + " tf-checkbox. More details: " + e;
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
    };
    class_1.prototype.onUserInteraction = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var checked;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getChecked()];
                    case 1:
                        checked = _a.sent();
                        this.checked = checked;
                        this.tfOnChecked.emit({
                            id: this.name,
                            checked: checked,
                            value: checked,
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
        var bottomText = h("p", { class: "bottom-text hide" }, "\u00A0");
        if (this.showHint) {
            bottomText = h("p", { class: "bottom-text hint" }, this.hint);
        }
        if (this.showError) {
            bottomText = h("p", { class: "bottom-text error" }, this.errorMessage);
        }
        return (h("div", { class: "checkbox-wrapper" }, h("div", { class: "input-label-container" }, h("div", { class: "checkbox-container" }, h("input", { id: this.name, ref: function (el) { return _this.itemRef = el; }, type: "checkbox", class: "\n\t\t\t\t\t\t\t\tform-checkbox \n\t\t\t\t\t\t\t\tform-checkbox-styled \n\t\t\t\t\t\t\t\t" + (this.showError ? 'form-checkbox-error' : '') + " \n\t\t\t\t\t\t\t", checked: this.checked, required: this.required, onInput: this.onUserInteraction.bind(this) })), h("label", { class: "" + (this.showLabel ? 'form-label' : 'form-label-sr-only'), htmlFor: this.name }, this.label)), bottomText));
    };
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
List.style = checkboxCss;
var clientLogoCss$1 = ".outer-container{max-height:4.625rem;position:relative;height:100%;display:-ms-flexbox;display:flex}.client-logo-container{padding-left:.25rem;padding-right:.25rem;border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);background-color:#fff;height:100%;z-index:50}.client-logo,.client-logo-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.client-logo{width:112px;height:59px}.client-logo-image{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;overflow:hidden}.account-navigation-container{width:40px;height:59px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.dd-panel{position:absolute;width:100%;margin-top:.5rem;border-radius:.375rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);z-index:40}.dd-panel.show{top:58px;pointer-events:auto;opacity:1;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.2s;transition-duration:.2s}.dd-panel.hide{top:-30px;pointer-events:none;opacity:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:.1s;transition-duration:.1s}.dd-panel-container{border-bottom-right-radius:.375rem;border-bottom-left-radius:.375rem;background-color:#d0dfe3;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.05);box-shadow:0 0 0 1px rgba(0,0,0,.05)}.dd-panel-bg{padding:.75rem .25rem .25rem}.show-dividing-border{display:block;border:solid #363154;border-width:0 0 1px}";
var AppHeader$2 = /** @class */ (function () {
    function AppHeader$2(hostRef) {
        registerInstance(this, hostRef);
        this.showClientLogo = false;
        this.clientLogoSource = null;
        this.showUserAccount = false;
        this.isOpen = false;
        this.dropdownItems = [
            { label: 'My Account', value: 'userAccount' },
            { label: 'Log Out', value: 'signOut' }
        ];
        this.dropdownIdentifier = "user-account-dd-nav";
        this.tfUserAccountDropdownSelected = createEvent(this, "tfUserAccountDropdownSelected", 7);
    }
    AppHeader$2.prototype.userAccountMenuItemsPropChanged = function (newValue, oldValue) {
        if (newValue !== oldValue) {
            this.setDropdownItems();
        }
    };
    AppHeader$2.prototype.handleClick = function (event) {
        if (this.isOpen) {
            var target = event.composedPath()[0];
            if (!target.matches('.dd-panel') &&
                !target.matches('.dd-panel-container') &&
                !target.matches('.dd-panel-bg') &&
                !target.matches('.dd-link') &&
                !target.matches('slot')) {
                event.preventDefault();
                event.stopPropagation();
                this.isOpen = false;
            }
        }
    };
    AppHeader$2.prototype.onHandleOptionClicked = function (event) {
        if (this.isOpen && event.detail.parent === this.dropdownIdentifier) {
            event.preventDefault();
            event.stopPropagation();
            this.tfUserAccountDropdownSelected.emit(Object.assign({}, event.detail));
            this.isOpen = false;
        }
    };
    AppHeader$2.prototype.onToggle = function () {
        this.isOpen = !this.isOpen;
    };
    AppHeader$2.prototype.componentWillLoad = function () {
        this.setDropdownItems();
    };
    AppHeader$2.prototype.setDropdownItems = function () {
    };
    AppHeader$2.prototype.render = function () {
        var _this = this;
        var userAccount = null;
        var userAccountDropdown = null;
        if (this.showUserAccount) {
            userAccount = (h("div", { class: "account-navigation-container" }, h("tf-icon-button", { icon: this.isOpen ? 'close' : 'user', size: "xs", colour: this.isOpen ? 'navy' : 'white', "outline-colour": "navy", onClick: this.onToggle.bind(this) })));
            //
            userAccountDropdown = (h("div", { class: "\n\t\t\t\t\tdd-panel \n\t\t\t\t\t" + (this.isOpen ? 'show' : 'hide') + "\n\t\t\t\t" }, h("div", { class: "dd-panel-container dd-panel-grey" }, h("div", { class: "dd-panel-bg" }, this.dropdownItems.map(function (item, index) {
                return (h("tf-dropdown-rendered-option", { class: index + 1 < _this.dropdownItems.length ? "show-dividing-border" : "", value: item.value, "element-title": item.label, colour: "grey", parent: _this.dropdownIdentifier }, item.label));
            })))));
        }
        //
        return (h("div", { class: "outer-container" }, h("div", { class: "client-logo-container" }, h("div", { class: "client-logo" }, h("img", { class: "client-logo-image", src: this.clientLogoSource })), userAccount), userAccountDropdown));
    };
    Object.defineProperty(AppHeader$2, "watchers", {
        get: function () {
            return {
                "userAccountMenuItems": ["userAccountMenuItemsPropChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return AppHeader$2;
}());
AppHeader$2.style = clientLogoCss$1;
var cardContainerCss$1 = "*{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}#card-container{display:-ms-flexbox;display:flex;margin-bottom:1.375rem}@media only screen and (max-width:640px){#card-container{-ms-flex-direction:column;flex-direction:column;margin-bottom:0}}#contained-card{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex:1;flex:1;padding:.9375rem 1.375rem;margin-bottom:1.375rem;border-radius:.75rem;-webkit-box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);box-shadow:0 .1875rem .375rem 0 rgba(0,0,0,.16);min-height:100%;height:inherit}#contained-card.default,#contained-card.grey{background-color:#d0dfe3}#contained-card.navy{background-color:#363154}#contained-card-slot-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}";
var ContainedCard = /** @class */ (function () {
    function ContainedCard(hostRef) {
        registerInstance(this, hostRef);
        this.colour = 'default';
    }
    ContainedCard.prototype.render = function () {
        return (h("div", { id: "contained-card", class: this.colour }, h("div", { id: "contained-card-slot-wrapper" }, h("slot", null))));
    };
    return ContainedCard;
}());
ContainedCard.style = cardContainerCss$1;
var elementsCss = "dd,dl,h1,h2,h5,p{margin:0}h1,h2,h5{font-size:inherit;font-weight:inherit}.colour-default,.colour-navy{color:#363154}.colour-white{color:#fff}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{background-color:transparent;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-a.colour-white:hover{color:#e7eff1}.tag-a.colour-blue:hover{color:#7a8fbf}.tag-a.colour-aqua:hover{color:#2ad2bb}.tag-a.colour-grey:hover{color:#9ba7aa}.tag-a.colour-default:hover,.tag-a.colour-navy:hover{color:#868398}.tag-h1{font-family:Roboto Condensed,sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{background-color:transparent;font-size:1.5rem;line-height:1.75rem}.span-title,.tag-h2{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.5rem;margin-bottom:.5rem;font-weight:800}.span-title{font-size:1.125rem;line-height:1.5rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold,.span-description{font-family:Roboto Condensed,sans-serif}.span-bold{font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";
var Divider = /** @class */ (function () {
    function Divider(hostRef) {
        registerInstance(this, hostRef);
    }
    Divider.prototype.render = function () {
        return (h("div", { class: "divider-wrapper" }, h("div", { class: "divider" })));
    };
    return Divider;
}());
Divider.style = elementsCss;
var dropdownCss = ".dd-container{position:relative;display:inline-block;text-align:left}.dd-panel{position:absolute;margin-top:.5rem;width:14rem;border-radius:.375rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);z-index:40}.dd-ql-panel{width:200px;left:-75px;-webkit-transform-origin:top left;transform-origin:top left}.right{-webkit-transform-origin:top right;transform-origin:top right;right:0}.left{-webkit-transform-origin:top left;transform-origin:top left;left:0}.center{left:-70px;-webkit-transform-origin:center;transform-origin:center}.dd-panel.show{pointer-events:auto;opacity:1;--transform-scale-x:1;--transform-scale-y:1;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.1s;transition-duration:.1s}.dd-panel.hide{pointer-events:none;opacity:0;--transform-scale-x:.95;--transform-scale-y:.95;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:75ms;transition-duration:75ms}.dd-panel-container{border-radius:.375rem;background-color:#d0dfe3;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.05);box-shadow:0 0 0 1px rgba(0,0,0,.05)}.colour-blue{background-color:#224595}.colour-aqua{background-color:#32f7dc}.colour-navy{background-color:#363154}.colour-default,.colour-grey{background-color:#d0dfe3}.colour-white{background-color:#fff}.dd-panel-bg{padding-top:.25rem;padding-bottom:.25rem}";
var Dropdown = /** @class */ (function () {
    function Dropdown(hostRef) {
        registerInstance(this, hostRef);
        this.generatedId = String(Math.floor(Math.random() * 99999));
        this.isOpen = false;
        this.displayTitle = "";
        this.dropdownId = null;
        this.size = 'default';
        this.colour = 'grey';
        this.disabled = false;
        this.position = "right";
        this.parsedOptions = [];
        this.tfDropdownSelected = createEvent(this, "tfDropdownSelected", 7);
    }
    Dropdown.prototype.handleClick = function (event) {
        if (this.isOpen) {
            var target = event.composedPath()[0];
            if (!target.matches('.dd-panel') &&
                !target.matches('.dd-panel-container') &&
                !target.matches('.dd-panel-bg') &&
                !target.matches('.dd-link') &&
                !target.matches('slot')) {
                event.preventDefault();
                event.stopPropagation();
                this.isOpen = false;
            }
        }
    };
    Dropdown.prototype.onHandleCloseDropdown = function () {
        this.isOpen = false;
    };
    Dropdown.prototype.onHandleOptionClicked = function (event) {
        if (this.isOpen && event.detail.parent === this.generatedId) {
            event.preventDefault();
            event.stopPropagation();
            var dropdownId = this.dropdownId;
            this.tfDropdownSelected.emit(Object.assign(Object.assign({}, event.detail), { dropdownId: dropdownId }));
            //
            this.isOpen = false;
        }
    };
    Dropdown.prototype.onToggle = function () {
        this.isOpen = !this.isOpen;
    };
    Dropdown.prototype.componentWillLoad = function () {
        var _this = this;
        // parse table header element
        var optionsEls = this.slotElement.getElementsByTagName('tf-dropdown-option');
        // 
        Array.from(optionsEls).forEach(function (opt) {
            var title = opt.innerHTML.replace(/<\!--.*?-->/g, "");
            _this.parsedOptions.push({
                value: opt.getAttribute('value'),
                title: title,
            });
        });
    };
    Dropdown.prototype.render = function () {
        var _this = this;
        var pos = this.position.toLowerCase() === 'left' ? 'left' : 'right';
        var options = (h("slot", null));
        if (this.parsedOptions.length) {
            options = this.parsedOptions.map(function (opt) { return (h("tf-dropdown-rendered-option", { value: opt.value, "element-title": opt.title, colour: _this.colour, parent: _this.generatedId }, opt.title)); });
        }
        return (h("div", { class: "dd-container" }, h("tf-button-container", { id: this.dropdownId }, h("tf-button", { size: 'm', icon: this.isOpen ? 'chevron-up' : 'chevron-down', "icon-position": "right", colour: this.colour, onClick: this.onToggle.bind(this) }, this.displayTitle)), h("div", { class: "\n\t\t\t\t\tdd-panel \n\t\t\t\t\t" + pos + " \n\t\t\t\t\t" + (this.isOpen ? 'show' : 'hide') + "\n\t\t\t\t" }, h("div", { class: "\n\t\t\t\t\t\tdd-panel-container \n\t\t\t\t\t\t" + getColourClassname(this.colour) + "\n\t\t\t\t\t" }, h("div", { class: "dd-panel-bg" }, options)))));
    };
    Object.defineProperty(Dropdown.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return Dropdown;
}());
Dropdown.style = dropdownCss;
var dropdownLinkCss = ".dd-link{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.5rem .75rem;text-decoration:none;cursor:pointer;color:#363154;background-color:#d0dfe3;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.dd-link:focus,.dd-link:hover{background-color:#b1bdc1}.dd-link:focus{outline:0}.colour-blue{color:#fff;background-color:#224595}.colour-blue:hover{background-color:#4260a4}.colour-blue:focus{outline:0;background-color:#1e3d85}.colour-aqua{color:#363154;background-color:#32f7dc}.colour-aqua:hover{background-color:#84faea}.colour-aqua:focus{outline:0;background-color:#2ad2bb}.colour-navy{color:#fff;background-color:#363154}.colour-navy:hover{background-color:#534f6d}.colour-navy:focus{outline:0;background-color:#25223a}.colour-default,.colour-grey{color:#363154;background-color:#d0dfe3}.colour-default:hover,.colour-grey:hover{background-color:#b1bdc1}.colour-default:focus,.colour-grey:focus{outline:0;background-color:#b1bdc1}.colour-white{color:#363154;background-color:#fff}.colour-white:hover{background-color:#ecf2f3}.colour-white:focus{outline:0;background-color:#e7eff1}.dd-link-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Roboto Condensed,sans-serif;line-height:1.25rem}";
var DropdownLink = /** @class */ (function () {
    function DropdownLink(hostRef) {
        registerInstance(this, hostRef);
        this.hrefTarget = "_self";
        this.colour = 'grey';
        this.tfDropdownLinkClicked = createEvent(this, "tfDropdownLinkClicked", 7);
        this.tfCloseDropdown = createEvent(this, "tfCloseDropdown", 7);
    }
    DropdownLink.prototype.onDropdownLinkClicked = function () {
        this.tfDropdownLinkClicked.emit({
            routerLink: this.routerLink
        });
        this.tfCloseDropdown.emit();
    };
    DropdownLink.prototype.render = function () {
        var t = !this.hrefTitle ? "Link to " + this.hrefLink : this.hrefTitle;
        var linkButton = (h("a", { href: this.hrefLink, title: t, target: this.hrefTarget, class: "\n\t\t\t\t\tdd-link \n\t\t\t\t\t" + getColourClassname(this.colour) + "\n\t\t\t\t" }, h("span", { class: "dd-link-title" }, h("slot", null))));
        if (this.routerLink) {
            t = !this.hrefTitle ? "Go to " + this.hrefLink : this.hrefTitle;
            linkButton = (h("a", { onClick: this.onDropdownLinkClicked.bind(this), title: t, class: "\n\t\t\t\t\t\tdd-link \n\t\t\t\t\t\t" + getColourClassname(this.colour) + "\n\t\t\t\t\t" }, h("span", { class: "dd-link-title" }, h("slot", null))));
        }
        return (linkButton);
    };
    return DropdownLink;
}());
DropdownLink.style = dropdownLinkCss;
var DropdownOption = /** @class */ (function () {
    function DropdownOption(hostRef) {
        registerInstance(this, hostRef);
    }
    DropdownOption.prototype.render = function () {
        return (h("slot", null));
    };
    return DropdownOption;
}());
var dropdownLinkCss$1 = ".dd-link{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.5rem .75rem;text-decoration:none;cursor:pointer;color:#363154;background-color:#d0dfe3;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.dd-link:focus,.dd-link:hover{background-color:#b1bdc1}.dd-link:focus{outline:0}.colour-blue{color:#fff;background-color:#224595}.colour-blue:hover{background-color:#4260a4}.colour-blue:focus{outline:0;background-color:#1e3d85}.colour-aqua{color:#363154;background-color:#32f7dc}.colour-aqua:hover{background-color:#84faea}.colour-aqua:focus{outline:0;background-color:#2ad2bb}.colour-navy{color:#fff;background-color:#363154}.colour-navy:hover{background-color:#534f6d}.colour-navy:focus{outline:0;background-color:#25223a}.colour-default,.colour-grey{color:#363154;background-color:#d0dfe3}.colour-default:hover,.colour-grey:hover{background-color:#b1bdc1}.colour-default:focus,.colour-grey:focus{outline:0;background-color:#b1bdc1}.colour-white{color:#363154;background-color:#fff}.colour-white:hover{background-color:#ecf2f3}.colour-white:focus{outline:0;background-color:#e7eff1}.dd-link-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Roboto Condensed,sans-serif;line-height:1.25rem}";
var DropdownRenderedOption = /** @class */ (function () {
    function DropdownRenderedOption(hostRef) {
        registerInstance(this, hostRef);
        this.colour = 'grey';
        this.elementTitle = '';
        this.value = '';
        this.parent = '';
        this.tfDropdownOptionClicked = createEvent(this, "tfDropdownOptionClicked", 7);
    }
    DropdownRenderedOption.prototype.onDropdownOptionClicked = function () {
        this.tfDropdownOptionClicked.emit({
            value: this.value,
            parent: this.parent
        });
    };
    DropdownRenderedOption.prototype.render = function () {
        return (h("div", { onClick: this.onDropdownOptionClicked.bind(this), "element-title": !this.elementTitle ? "" + this.value : this.elementTitle, class: "\n\t\t\t\t\tdd-link \n\t\t\t\t\t" + getColourClassname(this.colour) + "\n\t\t\t\t" }, h("span", { class: "dd-link-title" }, h("slot", null))));
    };
    return DropdownRenderedOption;
}());
DropdownRenderedOption.style = dropdownLinkCss$1;
var iconsCss = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";
var SVGIcon = /** @class */ (function () {
    function SVGIcon(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("polygon", { fill: "currentColor", "fill-rule": "nonzero", points: "11.6 8.4 18 8.4 18 11.6 11.6 11.6 11.6 18 8.4 18 8.4 11.6 2 11.6 2 8.4 8.4 8.4 8.4 2 11.6 2" })));
    };
    return SVGIcon;
}());
SVGIcon.style = iconsCss;
var iconsCss$1 = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";
var SVGIcon$1 = /** @class */ (function () {
    function SVGIcon$1(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon$1.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("polygon", { fill: "currentColor", points: "9 16.172 2.929 10.101 1.515 11.515 10 20 10.707 19.293 18.485 11.515 17.071 10.101 11 16.172 11 0 9 0" })));
    };
    return SVGIcon$1;
}());
SVGIcon$1.style = iconsCss$1;
var iconsCss$2 = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";
var SVGIcon$2 = /** @class */ (function () {
    function SVGIcon$2(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon$2.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("polygon", { fill: "currentColor", points: "3.828 9 9.899 2.929 8.485 1.515 0 10 .707 10.707 8.485 18.485 9.899 17.071 3.828 11 20 11 20 9 3.828 9" })));
    };
    return SVGIcon$2;
}());
SVGIcon$2.style = iconsCss$2;
var iconsCss$3 = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";
var SVGIcon$3 = /** @class */ (function () {
    function SVGIcon$3(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon$3.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("polygon", { fill: "currentColor", points: "16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" })));
    };
    return SVGIcon$3;
}());
SVGIcon$3.style = iconsCss$3;
var iconsCss$4 = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";
var SVGIcon$4 = /** @class */ (function () {
    function SVGIcon$4(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon$4.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("polygon", { fill: "currentColor", points: "9 3.828 2.929 9.899 1.515 8.485 10 0 10.707 .707 18.485 8.485 17.071 9.899 11 3.828 11 20 9 20 9 3.828" })));
    };
    return SVGIcon$4;
}());
SVGIcon$4.style = iconsCss$4;
var buttonCss$1 = "#button-containing-span{display:-ms-inline-flexbox;display:inline-flex;width:100%;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.tw-btn{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;width:100%;-ms-flex-align:center;align-items:center;border-width:1px;border-color:transparent;text-align:center;font-family:Roboto Condensed,sans-serif;font-weight:500;text-transform:uppercase;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.size-s{padding:.5rem .75rem;line-height:1rem}.size-default,.size-m,.size-s{font-size:.875rem;border-radius:.375rem}.size-default,.size-m{padding:.5rem 1rem;line-height:1.25rem}.size-l{padding:.5rem 1rem}.size-l,.size-xl{font-size:1rem;line-height:1.5rem;border-radius:.375rem}.size-xl{padding:.75rem 1.5rem}.colour-blue,.colour-default{color:#fff;background-color:#224595}.colour-blue:hover,.colour-default:hover{background-color:#4260a4}.colour-blue:active,.colour-default:active{outline:0;border-color:#32f7dc;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45);background-color:#1e3d85}.colour-blue:focus,.colour-default:focus{outline:0;border-color:#1e3d85;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-aqua{outline:0;color:#122551;background-color:#32f7dc}.colour-aqua:hover{outline:0;background-color:#84faea}.colour-aqua:active{outline:0;border-color:transparent;background-color:#2ad2bb}.colour-aqua:focus{outline:0;border-color:#2ad2bb;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-navy{color:#fff;background-color:#363154}.colour-navy:hover{background-color:#534f6d}.colour-navy:active{border-color:#363154;background-color:#25223a}.colour-navy:active,.colour-navy:focus{outline:0;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-navy:focus{border-color:#25223a}.colour-grey{color:#122551;background-color:#d0dfe3}.colour-grey:hover{background-color:#d7e3e7}.colour-grey:active{border-color:#d0dfe3;background-color:#b1bdc1}.colour-grey:active,.colour-grey:focus{outline:0;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-grey:focus{border-color:#b1bdc1}.colour-white{color:#122551;background-color:#fff}.colour-white:hover{background-color:#ecf2f3}.colour-white:active{border-color:#ecf2f3;background-color:#e7eff1}.colour-white:active,.colour-white:focus{outline:0;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.colour-white:focus{border-color:#e7eff1}.disabled,.disabled:hover{color:#b1bdc1;background-color:#e7eff1}.icon-xs-l{margin-left:-.125rem;margin-right:.5rem}.icon-xs-l,.icon-xs-r{height:1rem;width:1rem}.icon-xs-r{margin-left:.5rem;margin-right:-.125rem}.icon-s-l{margin-left:-.125rem;margin-right:.5rem}.icon-s-l,.icon-s-r{height:1rem;width:1rem}.icon-s-r{margin-left:.5rem;margin-right:-.125rem}.icon-default-l,.icon-m-l{margin-left:-.25rem;margin-right:.5rem;height:1.25rem;width:1.25rem}.icon-default-r,.icon-m-r{margin-left:.5rem;margin-right:-.25rem;height:1.25rem;width:1.25rem}.icon-l-l{margin-left:-.25rem;margin-right:.75rem}.icon-l-l,.icon-l-r{height:1.25rem;width:1.25rem}.icon-l-r{margin-left:.75rem;margin-right:-.25rem}.icon-xl-l{margin-left:-.25rem;margin-right:.75rem}.icon-xl-l,.icon-xl-r{height:1.25rem;width:1.25rem}.icon-xl-r{margin-left:.75rem;margin-right:-.25rem}.hex-container{display:-ms-flexbox;display:flex;position:relative}.central-icon{position:absolute;z-index:50;pointer-events:none}.hex-btn{padding:0;display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;width:100%;-ms-flex-align:center;align-items:center;border:1px transparent;text-align:center;font-family:Roboto Condensed,sans-serif;font-weight:500;text-transform:uppercase;cursor:pointer;background-color:transparent}.hex-btn,.hex-fill,.hex-outline{-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.hex-fill,.hex-outline{fill:currentColor}.hex-btn:hover{border-style:none;background-color:transparent}.hex-btn:active,.hex-btn:focus{border-style:none;-webkit-box-shadow:none;box-shadow:none;background-color:transparent}.hexagon{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;z-index:40}.hexagon-svg{fill:rgba(255,255,0,0);width:100%;height:100%}";
var Button$2 = /** @class */ (function () {
    function Button$2(hostRef) {
        registerInstance(this, hostRef);
        this.buttonId = null;
        this.size = 'default';
        this.colour = 'default';
        this.outlineColour = null;
        this.icon = null;
        //
        this.buttonType = 'button';
        this.disabled = false;
    }
    Button$2.prototype.render = function () {
        var IconTag = "tf-icon-" + this.icon;
        var icon = h(IconTag, { class: "central-icon icon-size-" + this.size });
        return (h("div", { class: "hex-container icon-btn-size-" + this.size }, h("button", { class: "\n\t\t\t\t\t\thex-btn \n\t\t\t\t\t\t" + getSizeClassname(this.size) + "\n\t\t\t\t\t\t" + getColourClassname(this.colour) + "\n\t\t\t\t\t\t" + (this.disabled ? 'disabled' : '') + "\n\t\t\t\t\t", type: this.buttonType, id: this.buttonId, disabled: this.disabled }, icon, h("div", { class: "hexagon" }, h("svg", { class: "hexagon-svg", viewBox: "0 0 44 50", xmlns: "http://www.w3.org/2000/svg" }, h("g", { stroke: "none", "stroke-width": "0", fill: "none", "fill-rule": "evenodd" }, h("path", { class: "\n\t\t\t\t\t\t\t\t\t\thex-outline \n\t\t\t\t\t\t\t\t\t\t" + getSVGColourClassname(!this.outlineColour ? this.colour : this.outlineColour) + "\n\t\t\t\t\t\t\t\t\t", d: "M22.0051334,50 C20.9875773,50 19.94393,49.7081067 19.0307386,49.12432 L2.85420568,39.6510548 C1.00173174,38.642696 -0.12018909,36.5994427 0.0102668206,34.4500464 L0.0102668206,15.5300517 C-0.12018909,13.3806554 1.00173174,11.3374021 2.88029686,10.3025076 L19.0307386,0.855778161 C20.8310302,-0.285259387 23.1792366,-0.285259387 24.9795282,0.855778161 L41.1560611,10.3290434 C42.9302615,11.4435452 44,13.4071912 44,15.503516 L44,34.4765822 C44,36.572907 42.9302615,38.5630888 41.1821523,39.6510548 L24.9795282,49.1508558 C24.0663368,49.7081067 23.0487807,50 22.0051334,50 Z" }), h("path", { class: "\n\t\t\t\t\t\t\t\t\t\thex-fill \n\t\t\t\t\t\t\t\t\t\t" + getSVGColourClassname(this.colour) + "\n\t\t\t\t\t\t\t\t\t", d: "M21.991651,2 C21.2515462,2 20.5114415,2.20861678 19.8734201,2.62585034 L19.8478993,2.65192744 L4.0249702,11.9353741 C2.69788582,12.6655329 1.90673937,14.0997732 2.00882278,15.6122449 L2.00882278,15.6643991 L2.00882278,34.361678 C1.90673937,35.8741497 2.69788582,37.30839 3.99944934,38.0385488 L19.8734201,47.3741497 C21.1749837,48.2086168 22.8083183,48.2086168 24.1098818,47.3741497 L24.1354026,47.3480726 L39.9838526,38.0385488 C41.2343744,37.2562358 42,35.8219955 42,34.3095238 L42,15.6904762 C42,14.1780045 41.2343744,12.7437642 39.9583317,11.9353741 L24.1098818,2.59977324 C23.4718605,2.20861678 22.7317557,2 21.991651,2 Z" })))))));
    };
    return Button$2;
}());
Button$2.style = buttonCss$1;
var iconsCss$5 = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";
var SVGIcon$5 = /** @class */ (function () {
    function SVGIcon$5(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon$5.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", d: "M0 11l2-2 5 5L18 3l2 2L7 18z" })));
    };
    return SVGIcon$5;
}());
SVGIcon$5.style = iconsCss$5;
var iconsCss$6 = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";
var ChevronDown = /** @class */ (function () {
    function ChevronDown(hostRef) {
        registerInstance(this, hostRef);
    }
    ChevronDown.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" })));
        // return(
        // 	<svg 
        // 		aria-hidden="true" 
        // 		focusable="false" 
        // 		class="svg-inline chevron-down w-14" 
        // 		role="img" 
        // 		xmlns="http://www.w3.org/2000/svg" 
        // 		viewBox="0 0 448 512">
        // 			<path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z">
        // 			</path>	
        // 	</svg>
        // )
    };
    return ChevronDown;
}());
ChevronDown.style = iconsCss$6;
var iconsCss$7 = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";
var SVGIcon$6 = /** @class */ (function () {
    function SVGIcon$6(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon$6.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", d: "M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z" })));
    };
    return SVGIcon$6;
}());
SVGIcon$6.style = iconsCss$7;
var iconsCss$8 = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";
var SVGIcon$7 = /** @class */ (function () {
    function SVGIcon$7(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon$7.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", d: "M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" })));
    };
    return SVGIcon$7;
}());
SVGIcon$7.style = iconsCss$8;
var iconsCss$9 = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";
var ChevronUp = /** @class */ (function () {
    function ChevronUp(hostRef) {
        registerInstance(this, hostRef);
    }
    ChevronUp.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", d: "M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" })));
        // return(
        // 	<svg 
        // 		aria-hidden="true" 
        // 		focusable="false" 
        // 		class="svg-inline chevron-up w-14" 
        // 		role="img" 
        // 		xmlns="http://www.w3.org/2000/svg" 
        // 		viewBox="0 0 448 512">
        // 			<path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
        // 	</svg>
        // )
    };
    return ChevronUp;
}());
ChevronUp.style = iconsCss$9;
var iconsCss$a = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";
var SVGIcon$8 = /** @class */ (function () {
    function SVGIcon$8(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon$8.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" })));
    };
    return SVGIcon$8;
}());
SVGIcon$8.style = iconsCss$a;
var iconsCss$b = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";
var Envelope = /** @class */ (function () {
    function Envelope(hostRef) {
        registerInstance(this, hostRef);
    }
    Envelope.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", "fill-rule": "evenodd", d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z", "clip-rule": "evenodd" })));
    };
    return Envelope;
}());
Envelope.style = iconsCss$b;
var iconsCss$c = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";
var SVGIcon$9 = /** @class */ (function () {
    function SVGIcon$9(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon$9.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("g", { transform: "translate(8.000000, 2.000000)" }, h("polygon", { fill: "currentColor", "fill-rule": "nonzero", points: "0 0 4 0 4 10 0 10" }), h("polygon", { fill: "currentColor", "fill-rule": "nonzero", points: "0 12 4 12 4 16 0 16" }))));
    };
    return SVGIcon$9;
}());
SVGIcon$9.style = iconsCss$c;
var iconsCss$d = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";
var SVGIcon$a = /** @class */ (function () {
    function SVGIcon$a(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon$a.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("polygon", { fill: "currentColor", "fill-rule": "nonzero", points: "17 8 17 12 3 12 3 8" })));
    };
    return SVGIcon$a;
}());
SVGIcon$a.style = iconsCss$d;
var iconsCss$e = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";
var SVGIcon$b = /** @class */ (function () {
    function SVGIcon$b(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon$b.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", d: "M4 8a6 6 0 0 1 4.03-5.67 2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8zm8 10a2 2 0 1 1-4 0h4z" })));
    };
    return SVGIcon$b;
}());
SVGIcon$b.style = iconsCss$e;
var iconsCss$f = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";
var Search = /** @class */ (function () {
    function Search(hostRef) {
        registerInstance(this, hostRef);
    }
    Search.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" })));
    };
    return Search;
}());
Search.style = iconsCss$f;
var iconsCss$g = ".svg-inline{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em;-webkit-transform-origin:center center;transform-origin:center center}.svg-inline.w-14{width:.875em}.svg-inline.border{height:1.5em}.svg-inline.li{width:2em}";
var SVGIcon$c = /** @class */ (function () {
    function SVGIcon$c(hostRef) {
        registerInstance(this, hostRef);
    }
    SVGIcon$c.prototype.render = function () {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }, h("path", { fill: "currentColor", d: "M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z" })));
    };
    return SVGIcon$c;
}());
SVGIcon$c.style = iconsCss$g;
var infoPanelCss = ".cards{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}@media (min-width:640px){.cards{-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}}";
var InfoPanel = /** @class */ (function () {
    function InfoPanel(hostRef) {
        registerInstance(this, hostRef);
        //
        this.colour = 'transparent';
        this.padding = 'none';
    }
    //
    InfoPanel.prototype.render = function () {
        return (h("tf-card", { colour: this.colour, padding: this.padding }, h("div", { class: "cards" }, h("slot", null))));
    };
    return InfoPanel;
}());
InfoPanel.style = infoPanelCss;
var inputCss = ".form-label{display:block;font-size:.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}*,input,input[type=password],input[type=text]{-webkit-box-sizing:border-box;box-sizing:border-box}*{border:0 solid #d2d6dc}.label-input-container{margin-bottom:1rem}.input-container{display:-ms-flexbox;display:flex;margin-top:.25rem;position:relative;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.form-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#d0dfe3;border-width:1px;border-radius:.375rem;padding:.5rem .75rem;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.form-input::-webkit-input-placeholder{color:#d7e3e7;opacity:1}.form-input:-ms-input-placeholder{color:#d7e3e7;opacity:1}.form-input::-ms-input-placeholder{color:#d7e3e7;opacity:1}.form-input:-ms-input-placeholder,.form-input::-moz-placeholder,.form-input::-ms-input-placeholder,.form-input::-webkit-input-placeholder,.form-input::placeholder{color:#d7e3e7;opacity:1}.form-input.form-input-error::-webkit-input-placeholder{color:#f8b4b4;opacity:1}.form-input.form-input-error:-ms-input-placeholder{color:#f8b4b4;opacity:1}.form-input.form-input-error::-ms-input-placeholder{color:#f8b4b4;opacity:1}.form-input.form-input-error:-ms-input-placeholder,.form-input.form-input-error::-moz-placeholder,.form-input.form-input-error::-ms-input-placeholder,.form-input.form-input-error::-webkit-input-placeholder,.form-input.form-input-error::placeholder{color:#f8b4b4;opacity:1}.form-input:focus{outline:0;border-color:#8598c4;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.form-input-styled{display:block;width:100%}.form-input-error{color:#771d1d;border-color:#f8b4b4}.form-input-error:focus{border-color:#f8b4b4;-webkit-box-shadow:0 0 0 3px rgba(248,180,180,.45);box-shadow:0 0 0 3px rgba(248,180,180,.45)}.form-input-leading-icon{padding-left:2.5rem}.form-input-trailing-icon{padding-right:2.5rem}.hint{color:#d0dfe3}.error,.hint{margin-top:.5rem;font-size:.875rem}.error{color:#e02424}.svg-container{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:none}.svg-leading{top:0;bottom:0;left:0;padding-left:.75rem}.svg-trailing{top:0;bottom:0;right:0;padding-right:.75rem}.svg-icon{color:#9fa6b2}.svg-error-icon,.svg-icon{height:1.25rem;width:1.25rem}.svg-error-icon{color:#f98080}@media (min-width:640px){.form-input-styled{font-size:.875rem;line-height:1.25rem}}";
var List$1 = /** @class */ (function () {
    function class_2(hostRef) {
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
    class_2.prototype.errorChanged = function (newValue, oldValue) {
        if (newValue !== oldValue) {
            this.error = newValue;
            this.setError();
        }
    };
    class_2.prototype.getValue = function () {
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
    class_2.prototype.getItemRef = function () {
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
    class_2.prototype.componentWillLoad = function () {
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
    class_2.prototype.onUserInput = function (event) {
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
    class_2.prototype.setError = function () {
        if (!this.errorMessage) {
            this.errorMessage = 'Error with the input field';
        }
        this.showErrorIcon = this.showError = this.error;
    };
    class_2.prototype.render = function () {
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
        return (h("div", { class: "label-input-container" }, h("label", { class: "" + (this.showLabel ? 'form-label' : 'form-label-sr-only'), htmlFor: this.name }, this.label), h("div", { class: "input-container" }, leadingSVG, h("input", { id: this.name, ref: function (el) { return _this.itemRef = el; }, class: "\n\t\t\t\t\t\t\tform-input \n\t\t\t\t\t\t\tform-input-styled \n\t\t\t\t\t\t\t" + (this.showError ? 'form-input-error' : '') + " \n\t\t\t\t\t\t\t" + (this.showLeadingIcon ? 'form-input-leading-icon' : '') + " \n\t\t\t\t\t\t\t" + (this.showTrailingIcon || this.showErrorIcon ? 'form-input-trailing-icon' : '') + "\n\t\t\t\t\t\t", placeholder: this.placeholder, required: this.required, type: this.inputType, value: this.value, autoComplete: this.autoComplete, onInput: this.onUserInput.bind(this) }), trailingSVG), bottomText));
    };
    Object.defineProperty(class_2.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "watchers", {
        get: function () {
            return {
                "error": ["errorChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
List$1.style = inputCss;
var leadingIconLabelCss = ".container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:.875rem;line-height:1.25rem;color:#6b7280}.icon-container{margin-right:.5rem;height:1.25rem;width:1.25rem}";
var ListWrappingCell = /** @class */ (function () {
    function ListWrappingCell(hostRef) {
        registerInstance(this, hostRef);
        this.contentAlign = 'left';
    }
    ListWrappingCell.prototype.render = function () {
        return (h("div", { class: "container" }, h("div", { class: "icon-container" }, h("slot", { name: "icon" })), h("span", null, h("slot", null))));
    };
    return ListWrappingCell;
}());
ListWrappingCell.style = leadingIconLabelCss;
var listCss = ".list-container{overflow:hidden}ul{list-style-type:none;margin:0;padding:0}@media (min-width:640px){.list-container{border-radius:.25rem}}";
var List$2 = /** @class */ (function () {
    function List$2(hostRef) {
        registerInstance(this, hostRef);
    }
    List$2.prototype.render = function () {
        return (h("div", { class: "list-container" }, h("ul", null, h("slot", null))));
    };
    return List$2;
}());
List$2.style = listCss;
var listWrappingItemCss = "li{margin-bottom:.5rem;padding:.25rem .75rem;border-radius:.25rem}.list-container,li{background-color:#fff;-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);overflow:hidden}a{display:block;text-decoration:none;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}a:hover{background-color:#fafbfc}a:focus{outline:0;background-color:#f9fafb}.list-item-container{padding:.5rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.list-item{min-width:0;-ms-flex:1 1 0%;flex:1 1 0%}.chevron-container{margin-left:1.25rem;-ms-flex-negative:0;flex-shrink:0}.chevron-svg{height:1.25rem;width:1.25rem;color:#d0dfe3}@media (min-width:640px){.list-container{border-radius:.25rem}.list-item-container{padding-left:1.5rem;padding-right:1.5rem}.list-item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}}";
var ListWrappingItem = /** @class */ (function () {
    function ListWrappingItem(hostRef) {
        registerInstance(this, hostRef);
    }
    ListWrappingItem.prototype.getCellStyle = function (contentAlign) {
        return {
            display: 'flex',
            flex: '1',
            justifyContent: contentAlign,
        };
    };
    ListWrappingItem.prototype.render = function () {
        return (h("li", null, h("slot", null)));
    };
    Object.defineProperty(ListWrappingItem.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return ListWrappingItem;
}());
ListWrappingItem.style = listWrappingItemCss;
var ListWrappingCell$1 = /** @class */ (function () {
    function ListWrappingCell$1(hostRef) {
        registerInstance(this, hostRef);
        this.contentAlign = 'left';
    }
    ListWrappingCell$1.prototype.render = function () {
        return (h("div", { class: this.order ? 'wrap' : '' }, h("slot", null)));
    };
    return ListWrappingCell$1;
}());
ListWrappingCell$1.style = "div{\n\t\t\t@apply flex-shrink-0;\n\t\t}\n\t\t.wrap{\n\t\t\t@apply mt-4;\n\t\t}\n\t\t@screen sm {\n\t\t\tdiv{\n\t\t\t\t@apply mt-0;\n\t\t\t}\n\t\t}";
var listWrappingItemCss$1 = "li{margin-bottom:.5rem;padding:.25rem .75rem;border-radius:.25rem}.list-container,li{background-color:#fff;-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);overflow:hidden}a{display:block;text-decoration:none;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}a:hover{background-color:#fafbfc}a:focus{outline:0;background-color:#f9fafb}.list-item-container{padding:.5rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.list-item{min-width:0;-ms-flex:1 1 0%;flex:1 1 0%}.chevron-container{margin-left:1.25rem;-ms-flex-negative:0;flex-shrink:0}.chevron-svg{height:1.25rem;width:1.25rem;color:#d0dfe3}@media (min-width:640px){.list-container{border-radius:.25rem}.list-item-container{padding-left:1.5rem;padding-right:1.5rem}.list-item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}}";
var ListWrappingItem$1 = /** @class */ (function () {
    function ListWrappingItem$1(hostRef) {
        registerInstance(this, hostRef);
        this.itemData = [];
    }
    ListWrappingItem$1.prototype.componentWillLoad = function () {
        var _this = this;
        // parse items
        //tf-list-wrapping-cell
        var items = this.slotElement.getElementsByTagName('tf-list-wrapping-cell');
        Array.from(items).forEach(function (cell) {
            _this.itemData.push({
                contentAlign: cell.getAttribute('content-align'),
                body: cell.innerHTML
            });
        });
    };
    ListWrappingItem$1.prototype.getCellStyle = function (contentAlign) {
        // let style = {
        // 	display: 'flex',
        // }
        //
        return {
            display: 'flex',
            flex: '1',
            justifyContent: contentAlign,
        };
    };
    ListWrappingItem$1.prototype.render = function () {
        var _this = this;
        return (h("li", null, h("a", { href: "#" }, h("div", { class: "list-item-container" }, h("div", { class: "list-item" }, this.itemData.map(function (item, i) { return (h("tf-list-wrapping-cell", { order: i, style: _this.getCellStyle(item.contentAlign), innerHTML: item.body })); })), h("div", { class: "chevron-container" }, h("svg", { class: "chevron-svg", fill: "currentColor", viewBox: "0 0 20 20" }, h("path", { "fill-rule": "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", "clip-rule": "evenodd" })))))));
    };
    Object.defineProperty(ListWrappingItem$1.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return ListWrappingItem$1;
}());
ListWrappingItem$1.style = listWrappingItemCss$1;
var mainContentCss = "main{padding:0 1.375rem;display:block}";
var MainContent = /** @class */ (function () {
    function MainContent(hostRef) {
        registerInstance(this, hostRef);
    }
    MainContent.prototype.render = function () {
        return (h("main", null, h("slot", null)));
    };
    return MainContent;
}());
MainContent.style = mainContentCss;
var modalCss = ".modal-wrapper{position:fixed;bottom:0;right:0;left:0;padding-left:1rem;padding-right:1rem;padding-bottom:1.5rem;z-index:50}.modal-wrapper.show{pointer-events:auto}.modal-wrapper.hide{pointer-events:none}.backdrop-container{position:fixed;top:0;right:0;bottom:0;left:0;-webkit-transition-property:opacity;transition-property:opacity}.backdrop{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#868398;opacity:.75}.backdrop.hide{pointer-events:none;opacity:0;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:.2s;transition-duration:.2s}.backdrop.show{pointer-events:auto;opacity:.75;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.modal{background-color:#fff;border-radius:.5rem;padding:1.25rem 1rem 1rem;overflow:hidden;-webkit-box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;-webkit-transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));-webkit-transition-property:all;transition-property:all}.modal.show{pointer-events:auto;opacity:1;--transform-translate-y:0;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.modal.hide{pointer-events:none;opacity:0;--transform-translate-y:1rem;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:.2s;transition-duration:.2s}.modal-header{display:-ms-flexbox;display:flex}.title{-ms-flex:1 1 0%;flex:1 1 0%;font-weight:800;color:#363154}.close-button{margin-left:10px}#app-logo-initials{color:#363154;text-align:center}tf-icon-close{height:16px;width:16px}.modal-body{margin-top:.5rem;margin-bottom:.5rem}.modal-footer{margin-top:1.25rem}.cancel-wrapper,.confirm-wrapper{display:-ms-flexbox;display:flex;width:100%;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.cancel-wrapper{margin-top:.75rem}tf-button{width:100%}@media (min-width:640px){.modal-wrapper{top:0;right:0;bottom:0;left:0;padding:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.modal{max-width:32rem;width:100%;padding:1.5rem}.modal.show{--transform-scale-x:1;--transform-scale-y:1}.modal.hide,.modal.show{--transform-translate-y:0}.modal.hide{--transform-scale-x:.95;--transform-scale-y:.95}.modal-footer{margin-top:1.5rem;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-gap:.75rem;gap:.75rem;grid-auto-flow:row dense}.confirm-wrapper{grid-column-start:2}.cancel-wrapper{margin-top:0;grid-column-start:1}}";
var Modal = /** @class */ (function () {
    function class_3(hostRef) {
        registerInstance(this, hostRef);
        this.isOpen = false;
        this.headerStyle = "modal";
        this.showCancel = true;
        this.showConfirm = true;
        this.showClose = true;
        this.cancelText = "Cancel";
        this.confirmText = "Confirm";
        this.cancelColour = "grey";
        this.confirmColour = "aqua";
        this.tfModalClosed = createEvent(this, "tfModalClosed", 7);
        this.tfModalConfirmed = createEvent(this, "tfModalConfirmed", 7);
    }
    class_3.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.opened = true;
                return [2 /*return*/];
            });
        });
    };
    class_3.prototype.openedPropChanged = function (newValue, oldValue) {
        if (newValue !== oldValue) {
            // can do something here, set timers etc
            this.isOpen = newValue;
        }
    };
    class_3.prototype.onClose = function () {
        this.opened = false;
        this.tfModalClosed.emit();
    };
    class_3.prototype.onConfirm = function () {
        this.opened = false;
        this.tfModalConfirmed.emit();
    };
    class_3.prototype.render = function () {
        return (h("div", { class: "modal-wrapper " + (this.isOpen ? 'show' : 'hide') }, h("div", { class: "backdrop-container" }, h("div", { class: "\n\t\t\t\t\tbackdrop\n\t\t\t\t\t" + (this.isOpen ? 'show' : 'hide') + "\n\t\t\t\t" })), h("div", { class: "\n\t\t\t\tmodal\n\t\t\t\t" + (this.isOpen ? 'show' : 'hide') + "\n\t\t\t" }, h("header", { class: "modal-header header-style-" + this.headerStyle }, h("h2", { class: "title header-style-" + this.headerStyle }, this.displayTitle), this.showClose &&
            h("div", { class: "close-button" }, h("tf-icon-button", { onClick: this.onClose.bind(this), colour: "grey", icon: "close" }))), h("section", { class: "modal-body" }, h("slot", null)), h("footer", { class: "modal-footer" }, this.showConfirm &&
            h("span", { class: "confirm-wrapper" }, h("tf-button", { onClick: this.onConfirm.bind(this), colour: this.confirmColour }, this.confirmText)), this.showCancel &&
            h("span", { class: "cancel-wrapper" }, h("tf-button", { onClick: this.onClose.bind(this), colour: this.cancelColour }, this.cancelText))))));
    };
    Object.defineProperty(class_3, "watchers", {
        get: function () {
            return {
                "opened": ["openedPropChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_3;
}());
Modal.style = modalCss;
var nodeCss = "#node-container{margin-bottom:.5rem;background-color:#fff;border-radius:.25rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);padding:.25rem .75rem}#base-node,#node-container{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center}#fxl{margin-right:1rem}#flex,#fxl{display:-ms-flexbox;display:flex}#flex{-ms-flex:1 1 0%;flex:1 1 0%}#fxr{display:-ms-flexbox;display:flex;margin-left:1rem}";
var Node$1 = /** @class */ (function () {
    function Node$1(hostRef) {
        registerInstance(this, hostRef);
    }
    Node$1.prototype.render = function () {
        return (h("div", { id: "node-container" }, h("slot", null)));
    };
    return Node$1;
}());
Node$1.style = nodeCss;
var nodeCss$1 = "#node-container{margin-bottom:.5rem;background-color:#fff;border-radius:.25rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);padding:.25rem .75rem}#base-node,#node-container{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center}#fxl{margin-right:1rem}#flex,#fxl{display:-ms-flexbox;display:flex}#flex{-ms-flex:1 1 0%;flex:1 1 0%}#fxr{display:-ms-flexbox;display:flex;margin-left:1rem}";
var Node$2 = /** @class */ (function () {
    function Node$2(hostRef) {
        registerInstance(this, hostRef);
    }
    Node$2.prototype.render = function () {
        return (h("div", { id: "base-node" }, h("div", { id: "flex" }, h("slot", { name: "flex" }))));
    };
    return Node$2;
}());
Node$2.style = nodeCss$1;
var nodeCss$2 = "#node-container{margin-bottom:.5rem;background-color:#fff;border-radius:.25rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);padding:.25rem .75rem}#base-node,#node-container{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center}#fxl{margin-right:1rem}#flex,#fxl{display:-ms-flexbox;display:flex}#flex{-ms-flex:1 1 0%;flex:1 1 0%}#fxr{display:-ms-flexbox;display:flex;margin-left:1rem}";
var Node$3 = /** @class */ (function () {
    function Node$3(hostRef) {
        registerInstance(this, hostRef);
        this.rWidth = null;
    }
    Node$3.prototype.render = function () {
        var stylesR = {};
        if (this.rWidth) {
            stylesR['width'] = this.rWidth;
        }
        return (h("div", { id: "base-node" }, h("div", { id: "flex" }, h("slot", { name: "flex" })), h("div", { id: "fxr", style: stylesR }, h("slot", { name: "fxr" }))));
    };
    return Node$3;
}());
Node$3.style = nodeCss$2;
var nodeCss$3 = "#node-container{margin-bottom:.5rem;background-color:#fff;border-radius:.25rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);padding:.25rem .75rem}#base-node,#node-container{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center}#fxl{margin-right:1rem}#flex,#fxl{display:-ms-flexbox;display:flex}#flex{-ms-flex:1 1 0%;flex:1 1 0%}#fxr{display:-ms-flexbox;display:flex;margin-left:1rem}";
var Node$4 = /** @class */ (function () {
    function Node$4(hostRef) {
        registerInstance(this, hostRef);
        this.lWidth = null;
    }
    Node$4.prototype.render = function () {
        var stylesL = {};
        if (this.lWidth) {
            stylesL['width'] = this.lWidth;
        }
        return (h("div", { id: "base-node" }, h("div", { id: "fxl", style: stylesL }, h("slot", { name: "fxl" })), h("div", { id: "flex" }, h("slot", { name: "flex" }))));
    };
    return Node$4;
}());
Node$4.style = nodeCss$3;
var nodeCss$4 = "#node-container{margin-bottom:.5rem;background-color:#fff;border-radius:.25rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05);padding:.25rem .75rem}#base-node,#node-container{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center}#fxl{margin-right:1rem}#flex,#fxl{display:-ms-flexbox;display:flex}#flex{-ms-flex:1 1 0%;flex:1 1 0%}#fxr{display:-ms-flexbox;display:flex;margin-left:1rem}";
var Node$5 = /** @class */ (function () {
    function Node$5(hostRef) {
        registerInstance(this, hostRef);
        this.rWidth = null;
        this.lWidth = null;
    }
    Node$5.prototype.render = function () {
        var stylesR = {};
        if (this.rWidth) {
            stylesR['width'] = this.rWidth;
        }
        var stylesL = {};
        if (this.lWidth) {
            stylesL['width'] = this.lWidth;
        }
        return (h("div", { id: "base-node" }, h("div", { id: "fxl", style: stylesL }, h("slot", { name: "fxl" })), h("div", { id: "flex" }, h("slot", { name: "flex" })), h("div", { id: "fxr", style: stylesR }, h("slot", { name: "fxr" }))));
    };
    return Node$5;
}());
Node$5.style = nodeCss$4;
var nodeHeaderCss = "#node-header{margin-bottom:.25rem;background-color:transparent;padding:.25rem .75rem;display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center}";
var NodeHeader = /** @class */ (function () {
    function NodeHeader(hostRef) {
        registerInstance(this, hostRef);
    }
    NodeHeader.prototype.render = function () {
        return (h("div", { id: "node-header" }, h("slot", null)));
    };
    return NodeHeader;
}());
NodeHeader.style = nodeHeaderCss;
var NodeHeader$1 = /** @class */ (function () {
    function NodeHeader$1(hostRef) {
        registerInstance(this, hostRef);
        this.justify = "flex-start";
    }
    NodeHeader$1.prototype.render = function () {
        var styles = {
            justifyContent: this.justify,
        };
        return (h("span", { style: styles }, h("slot", null)));
    };
    return NodeHeader$1;
}());
NodeHeader$1.style = "span{\n\t\t\tmargin-block-start: 2px;\n\t\t\tmargin-block-end: 2px;\n\t\t\tmargin-inline-start: 0px;\n\t\t\tmargin-inline-end: 0px;\n\t\t\tmargin-left:0;\n\t\t\tmargin-right\t:0;\n\t\t\tfont-family: 'Roboto Condensed', sans-serif;\n\t\t\tfont-size: 11px;\n\t\t\tline-height: 14px;\n\t\t\ttext-transform:uppercase;\n\t\t\tdisplay:flex;\n\t\t\tflex:1;\n\t\t\toverflow-x:hidden;\n\t\t}";
var NodeText = /** @class */ (function () {
    function NodeText(hostRef) {
        registerInstance(this, hostRef);
        this.justify = "flex-start";
    }
    NodeText.prototype.render = function () {
        var styles = {
            justifyContent: this.justify,
        };
        return (h("span", { id: "node-text-span", style: styles }, h("slot", null)));
    };
    return NodeText;
}());
NodeText.style = "#node-text-span{\n\t\t\tmargin:0;\n\t\t\tpadding:0;\n\t\t\tfont-family: 'Roboto Condensed', sans-serif;\n\t\t\tfont-size: 15px;\n\t\t\tline-height: 20px;\n\t\t\tdisplay:flex;\n\t\t\tflex:1;\n\t\t}";
var ParaTag = /** @class */ (function () {
    function ParaTag(hostRef) {
        registerInstance(this, hostRef);
        this.url = null;
        this.tagTitle = null;
        this.textAlign = "left";
    }
    ParaTag.prototype.render = function () {
        var styles = {
            textAlign: this.textAlign,
        };
        return (h("p", { style: styles }, h("slot", null)));
    };
    return ParaTag;
}());
ParaTag.style = "p{\n\t\t\tmargin-block-start: 10px;\n    \tmargin-block-end: 10px;\n    \tmargin-inline-start: 0px;\n\t\t\tmargin-inline-end: 0px;\n\t\t\tmargin-left:0;\n\t\t\tmargin-right\t:0;\n\t\t\tfont-family: 'Roboto Condensed', sans-serif;\n\t\t\tfont-size: 15px;\n\t\t\tline-height: 20px;\n\t\t\tdisplay:block;\n\t\t}";
var overviewButtonCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}.card-container{min-width:100%;max-width:100%;min-height:210px;height:210px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;overflow:hidden;-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);border-radius:.5rem}.card-face,.card-over{height:175px;position:absolute;width:100%}.card-face{z-index:10;bottom:0}.card-over{height:177px;bottom:-177px;z-index:20;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.card-container:hover .card-over{bottom:-2px}.card-header{padding:.5rem .25rem 1.5rem;font-size:.875rem;line-height:1.25rem;text-transform:uppercase;font-weight:500;text-align:center;color:#363154;background-color:#32f7dc;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-top-left-radius:.5rem;border-top-right-radius:.5rem}.card-body{height:134px;background-color:#fff}.card-body,.card-over-body{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:.75rem .25rem;border-top-left-radius:.5rem;border-top-right-radius:.5rem}.card-over-body{background-color:#363154;height:100%}#product-title-span{width:80%}.product-cta{cursor:pointer}.card-footer{min-height:10px;padding:0 .25rem;border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;background-color:#fff}.footer-contents{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding-top:.5rem;padding-bottom:.5rem;border:solid #224595;border-width:1px 0 0}.over-text{width:60%}@media (min-width:640px){.card-container{min-width:195px;max-width:195px}.over-text{width:90%}}";
var StatDataCard = /** @class */ (function () {
    function StatDataCard(hostRef) {
        registerInstance(this, hostRef);
        this.cardTitle = 'Software Module';
        this.productTitle = '';
        this.productDescription = '';
        this.productCta = 'Find out more ask your Account Manager';
        this.productId = '';
        this.isActive = false;
        this.marketingCtaAsButton = false;
        this.tfPhOverviewButtonClicked = createEvent(this, "tfPhOverviewButtonClicked", 7);
        this.tfPhOverviewFindOutMoreClicked = createEvent(this, "tfPhOverviewFindOutMoreClicked", 7);
    }
    StatDataCard.prototype.onProductButtonClicked = function () {
        this.tfPhOverviewButtonClicked.emit({
            productId: this.productId,
            productTitle: this.productTitle,
            productInitials: this.productInitials,
            productCode: this.productCode
        });
    };
    StatDataCard.prototype.onProductFindOutMoreClicked = function () {
        this.tfPhOverviewFindOutMoreClicked.emit({
            productId: this.productId,
            productTitle: this.productTitle,
            productInitials: this.productInitials,
            productCode: this.productCode
        });
    };
    StatDataCard.prototype.componentWillLoad = function () {
        if (!this.productCode) {
            this.productCode = this.productInitials ? this.productInitials : null;
        }
    };
    StatDataCard.prototype.render = function () {
        var overContent = (h("div", { class: "card-over-body" }, h("tf-product-logo", { code: this.productCode, size: "xl" }), h("tf-button", { colour: "aqua", onClick: this.onProductButtonClicked.bind(this) }, "Open")));
        if (!this.isActive) {
            overContent = (h("div", { class: "card-over-body" }, h("tf-span-description", { class: "over-text", colour: "white", "text-align": "center" }, this.productDescription), h("tf-span-description", { class: "over-text " + (this.marketingCtaAsButton ? 'product-cta' : ''), colour: "aqua", "text-align": "center", onClick: this.onProductFindOutMoreClicked.bind(this) }, this.productCta)));
        }
        return [
            h("section", { class: "card-container" }, h("header", { class: "card-header" }, this.cardTitle), h("div", { class: "card-face" }, h("div", { class: "card-body" }, h("tf-product-logo", { colour: "blue", code: this.productCode }), h("tf-span-title", { id: "product-title-span", "text-align": "center", colour: "blue" }, this.productTitle)), h("div", { class: "card-footer" }, h("div", { class: "footer-contents" }, h("tf-status-beacon", { "traffic-light-colour": this.isActive ? "green" : "none" }), h("tf-span-description", { colour: "blue" }, this.isActive ? "ACTIVE" : "INACTIVE")))), h("div", { class: "card-over" }, overContent))
        ];
    };
    return StatDataCard;
}());
StatDataCard.style = overviewButtonCss;
var Bi = (h("g", { fill: "currentColor", stroke: "currentColor" }, getPath("M98.4,118.9l-4.7,4.7c-1,1-2.2,1.4-3.5,1.4H63.5V77.1h26.7c1.4,0,2.5,0.5,3.4,1.4l4.7,4.7c1,1,1.5,2.2,1.5,3.6\n\tv6.5c0,1.4-0.5,2.6-1.5,3.6l-4.1,4.1l4.1,4.1c1,1,1.5,2.2,1.5,3.6v6.6C100,116.6,99.4,117.9,98.4,118.9z M91.3,88.3\n\tc0-0.4-0.1-0.7-0.4-1l-1.6-1.6c-0.3-0.3-0.6-0.4-1-0.4H72.2V97h14.4c0.4,0,0.7-0.1,1-0.4l3.3-3.3c0.3-0.3,0.4-0.6,0.4-1V88.3z\n\t\tM91.3,109.9c0-0.4-0.1-0.7-0.4-1l-3.4-3.4c-0.3-0.3-0.6-0.4-1-0.4H72.2v11.8h16.2c0.4,0,0.7-0.1,1-0.4l1.6-1.6\n\tc0.3-0.3,0.4-0.6,0.4-1V109.9z"), getPath("M118.5,125V98h-7.3v-7.2h15.4V125H118.5z M118,84.7v-9.2h9.2v9.2H118z")));
var CM = (h("g", { fill: "currentColor", stroke: "currentColor" }, getPath("M80.7,123.5c-1,1-2.2,1.5-3.6,1.5H61.6c-1.4,0-2.6-0.5-3.6-1.5l-5.9-5.9c-1-1-1.5-2.2-1.5-3.6V88\n\t\tc0-1.4,0.5-2.6,1.5-3.6l5.9-5.9c1-1,2.2-1.5,3.6-1.5h15.6c1.4,0,2.6,0.5,3.6,1.5l6.2,6.2l-5.8,5.7l-4.9-4.9c-0.3-0.3-0.6-0.4-1-0.4\n\t\tH63.4c-0.4,0-0.7,0.1-1,0.4l-2.8,2.8c-0.3,0.3-0.4,0.6-0.4,1v23.1c0,0.4,0.1,0.7,0.4,1l2.8,2.8c0.3,0.3,0.6,0.4,1,0.4h11.9\n\t\tc0.4,0,0.7-0.1,1-0.4l4.9-4.9l5.8,5.7L80.7,123.5z"), getPath("M138.8,125V86.9L127.1,125h-8.9l-11.7-38.1V125H98V77.1h13.2l11.3,37.1L134,77.1h13.2V125H138.8z")));
var EL = (h("g", { fill: "currentColor", stroke: "currentColor" }, getPath("M64,125V77.1h32.1v8.2H72.6v11.6h23.5v8.2H72.6v11.7h23.5v8.2H64z"), getPath("M110.2,125V77.1h8.6v39.7h23.5v8.2H110.2z")));
var LM = (h("g", { fill: "currentColor", stroke: "currentColor" }, getPath("M53.6,125V77.1h8.6v39.7h23.5v8.2H53.6z"), getPath("M136,125V86.9L124.2,125h-8.9l-11.7-38.1V125h-8.4V77.1h13.2l11.3,37.1l11.3-37.1h13.2V125H136z")));
var MP = (h("g", { fill: "currentColor", stroke: "currentColor" }, getPath("M92,125V86.9L80.3,125h-8.9L59.7,86.9V125h-8.4V77.1h13.2l11.3,37.1l11.3-37.1h13.2V125H92z"), getPath("M151.4,99.9l-4.7,4.7c-0.9,0.9-2.1,1.4-3.4,1.4h-18.1V125h-8.6V77.1h26.7c1.4,0,2.5,0.5,3.4,1.4l4.7,4.7\n\t\tc1,1,1.5,2.2,1.5,3.6v9.5C153,97.7,152.4,98.9,151.4,99.9z M144.3,88.3c0-0.4-0.1-0.7-0.4-1l-1.6-1.6c-0.3-0.3-0.6-0.4-1-0.4h-16.2\n\t\tv12.6h16.2c0.4,0,0.7-0.1,1-0.4l1.6-1.6c0.3-0.3,0.4-0.6,0.4-1V88.3z")));
var R3 = (h("g", { fill: "currentColor", stroke: "currentColor" }, getPath("M88.4,125l-14.1-18.2c-0.3-0.4-0.7-0.6-1.2-0.6h-5.2V125h-8.6V77.1h26.7c1.4,0,2.5,0.5,3.4,1.4l4.7,4.7\n\t\tc1,1,1.5,2.2,1.5,3.6v9.5c0,1.4-0.5,2.6-1.5,3.6l-4.7,4.7c-0.9,0.9-2.1,1.4-3.4,1.4h-1.7L98.9,125H88.4z M86.9,88.3\n\t\tc0-0.4-0.1-0.7-0.4-1l-1.6-1.6c-0.3-0.3-0.6-0.4-1-0.4H67.8v12.6h16.2c0.4,0,0.7-0.1,1-0.4l1.6-1.6c0.3-0.3,0.4-0.6,0.4-1V88.3z"), getPath("M137.2,120l-3.4,3.4c-1,1-2.2,1.6-3.7,1.6h-14.8c-1.4,0-2.7-0.6-3.7-1.6l-5-5l5.1-5l4,4\n\t\tc0.3,0.3,0.6,0.4,1.1,0.4h11.8c0.4,0,0.8-0.1,1.1-0.4l0.3-0.3c0.3-0.3,0.4-0.6,0.4-1v-9.8c0-0.4-0.1-0.7-0.4-1l-1.6-1.6\n\t\tc-0.3-0.3-0.6-0.4-1.1-0.4h-8.5v-7.2h8.5c0.4,0,0.8-0.1,1.1-0.4l1.6-1.6c0.3-0.3,0.4-0.6,0.4-1V86c0-0.4-0.1-0.7-0.4-1l-0.3-0.3\n\t\tc-0.3-0.3-0.6-0.4-1.1-0.4h-11.8c-0.4,0-0.8,0.1-1.1,0.4l-4,4l-5.1-5l5-5c1-1,2.2-1.6,3.7-1.6h14.8c1.4,0,2.7,0.6,3.7,1.6l3.4,3.4\n\t\tc1,1,1.4,2.1,1.4,3.4v8.1c0,1.4-0.5,2.6-1.5,3.6l-2.5,2.5l2.6,2.6c1,1,1.4,2.1,1.4,3.4v10.8C138.6,117.9,138.2,119,137.2,120z")));
var RP = (h("g", { fill: "currentColor", stroke: "currentColor" }, getPath("M87.2,125l-14.1-18.2c-0.3-0.4-0.7-0.6-1.2-0.6h-5.2V125H58V77.1h26.7c1.4,0,2.5,0.5,3.4,1.4l4.7,4.7\n\t\tc1,1,1.5,2.2,1.5,3.6v9.5c0,1.4-0.5,2.6-1.5,3.6l-4.7,4.7c-0.9,0.9-2.1,1.4-3.4,1.4H83L97.8,125H87.2z M85.8,88.3\n\t\tc0-0.4-0.1-0.7-0.4-1l-1.6-1.6c-0.3-0.3-0.6-0.4-1-0.4H66.6v12.6h16.2c0.4,0,0.7-0.1,1-0.4l1.6-1.6c0.3-0.3,0.4-0.6,0.4-1V88.3z"), getPath("M144.8,99.9l-4.7,4.7c-0.9,0.9-2.1,1.4-3.4,1.4h-18.1V125h-8.6V77.1h26.7c1.4,0,2.5,0.5,3.4,1.4l4.7,4.7\n\t\tc1,1,1.5,2.2,1.5,3.6v9.5C146.3,97.7,145.8,98.9,144.8,99.9z M137.7,88.3c0-0.4-0.1-0.7-0.4-1l-1.6-1.6c-0.3-0.3-0.6-0.4-1-0.4\n\t\th-16.2v12.6h16.2c0.4,0,0.7-0.1,1-0.4l1.6-1.6c0.3-0.3,0.4-0.6,0.4-1V88.3z")));
var Si = (h("g", { fill: "currentColor", stroke: "currentColor" }, getPath("M102.6,117.6l-5.9,5.9c-1,1-2.2,1.5-3.6,1.5h-20c-1.4,0-2.6-0.5-3.6-1.5l-6.1-6.1l5.7-5.8l4.8,4.8\n\t\tc0.3,0.3,0.6,0.4,1,0.4h16.3c0.4,0,0.7-0.1,1-0.4l2.8-2.8c0.3-0.3,0.4-0.6,0.4-1v-4.6c0-0.7-0.6-1.4-1.4-1.4l-25.8-3.4\n\t\tc-2.8-0.4-5-2.9-5-5.6V88c0-1.4,0.5-2.6,1.5-3.6l5.9-5.9c1-1,2.2-1.5,3.6-1.5h20c1.4,0,2.6,0.5,3.6,1.5l6.1,6.1l-5.7,5.8l-4.8-4.8\n\t\tc-0.3-0.3-0.6-0.4-1-0.4H76.2c-0.4,0-0.7,0.1-1,0.4l-2.8,2.8c-0.3,0.3-0.4,0.6-0.4,1v4.6c0,0.7,0.6,1.4,1.3,1.4L99.1,99\n\t\tc2.8,0.4,5,2.9,5,5.6v9.4C104.1,115.3,103.6,116.6,102.6,117.6z"), getPath("M122.7,125V98h-7.3v-7.2h15.4V125H122.7z M122.2,84.7v-9.2h9.2v9.2H122.2z")));
var SM = (h("g", { fill: "currentColor", stroke: "currentColor" }, getPath("M86.1,117.6l-5.9,5.9c-1,1-2.2,1.5-3.6,1.5h-20c-1.4,0-2.6-0.5-3.6-1.5l-6.1-6.1l5.7-5.8l4.8,4.8\n\t\tc0.3,0.3,0.6,0.4,1,0.4h16.3c0.4,0,0.7-0.1,1-0.4l2.8-2.8c0.3-0.3,0.4-0.6,0.4-1v-4.6c0-0.7-0.6-1.4-1.4-1.4l-25.8-3.4\n\t\tc-2.8-0.4-5-2.9-5-5.6V88c0-1.4,0.5-2.6,1.5-3.6l5.9-5.9c1-1,2.2-1.5,3.6-1.5h20c1.4,0,2.6,0.5,3.6,1.5l6.1,6.1l-5.7,5.8l-4.8-4.8\n\t\tc-0.3-0.3-0.6-0.4-1-0.4H59.8c-0.4,0-0.7,0.1-1,0.4L56,88.5c-0.3,0.3-0.4,0.6-0.4,1v4.6c0,0.7,0.6,1.4,1.3,1.4L82.7,99\n\t\tc2.8,0.4,5,2.9,5,5.6v9.4C87.6,115.3,87.1,116.6,86.1,117.6z"), getPath("M141.4,125V86.9L129.7,125h-8.9l-11.7-38.1V125h-8.4V77.1h13.2l11.3,37.1l11.3-37.1h13.2V125H141.4z")));
var T = (h("g", { fill: "currentColor", stroke: "currentColor", transform: "translate(55, 67)" }, getPath("M38.3497327,64.8842632 C38.2733272,65.9947036 38.6512172,67.0883792 39.3959848,67.9122876 C40.1407525,68.7361961 41.1878744,69.2189579 42.2951179,69.2488947 C43.4014548,69.232514 44.4546498,68.7692546 45.2171993,67.9635852 C45.9797488,67.1579158 46.3874421,66.0776779 46.3483412,64.9664737 L46.3483412,19.5825263 C46.3854153,18.4732976 45.9765863,17.3957694 45.2140427,16.5929183 C44.4514991,15.7900672 43.3994468,15.329493 42.2951179,15.3150526 C41.1909407,15.342137 40.145584,15.8208726 39.4008328,16.6405307 C38.6560815,17.4601888 38.2764456,18.5497709 38.3497327,19.6572632 L38.3497327,64.8842632 Z"), getPath("M4.41793239,0.367684211 C3.31292656,0.290902886 2.22460366,0.670651488 1.40472752,1.41908204 C0.584851387,2.16751258 0.104452313,3.2197845 0.0746619497,4.33247368 C0.0919266492,5.44526108 0.554254431,6.50421099 1.35738336,7.27051411 C2.16051228,8.03681724 3.23681227,8.44594453 4.34356132,8.40563158 L80.3768239,8.40563158 C81.4806238,8.44288806 82.5528785,8.03204828 83.3518003,7.26575433 C84.1507221,6.49946037 84.6090422,5.44223392 84.6234119,4.33247368 C84.5955131,3.22183908 84.1177848,2.17075034 83.3007286,1.42233091 C82.4836724,0.673911478 81.3980655,0.29299296 80.2950157,0.367684211 L4.41793239,0.367684211 Z")));
var TM = (h("g", { fill: "currentColor", stroke: "currentColor" }, getPath("M71.6,85.2V125H63V85.2H49.1v-8.2h36.3v8.2H71.6z"), getPath("M136.2,125V86.9L124.5,125h-8.9l-11.7-38.1V125h-8.4V77.1h13.2l11.3,37.1l11.3-37.1h13.2V125H136.2z")));
var VL = (h("g", { fill: "currentColor", stroke: "currentColor" }, h("g", null, getPath("M78.1,125H67.8L52.3,77.1h8.9l11.9,38.6l12-38.6h8.7L78.1,125z"), getPath("M102.8,125V77.1h8.6v39.7h23.5v8.2H102.8z")), h("g", null, getPath("M138.3,81.4v8.5h-4.5v-8.5h-8.6v-4.5h8.6v-8.5h4.5v8.5h8.5v4.5H138.3z"))));
var VR = (h("g", { fill: "currentColor", stroke: "currentColor" }, getPath("M78,125H67.7L52.2,77.1h8.9L73,115.6l12-38.6h8.7L78,125z"), getPath("M131.9,125l-14.1-18.2c-0.3-0.4-0.7-0.6-1.2-0.6h-5.2V125h-8.6V77.1h26.7c1.4,0,2.5,0.5,3.4,1.4l4.7,4.7\n\t\tc1,1,1.5,2.2,1.5,3.6v9.5c0,1.4-0.5,2.6-1.5,3.6l-4.7,4.7c-0.9,0.9-2.1,1.4-3.4,1.4h-1.7l14.8,18.9H131.9z M130.5,88.3\n\t\tc0-0.4-0.1-0.7-0.4-1l-1.6-1.6c-0.3-0.3-0.6-0.4-1-0.4h-16.2v12.6h16.2c0.4,0,0.7-0.1,1-0.4l1.6-1.6c0.3-0.3,0.4-0.6,0.4-1V88.3z")));
function getPath(d) {
    return h("path", { d: d });
}
function getClientInitials(code) {
    if (!code) {
        return null;
    }
    switch (code.toLowerCase()) {
        case 'bi':
            return Bi;
        case 'cm':
            return CM;
        case 'el':
            return EL;
        case 'lm':
            return LM;
        case 'mp':
            return MP;
        case 'r3':
            return R3;
        case 'rp':
            return RP;
        case 'si':
            return Si;
        case 'sm':
            return SM;
        case 't':
            return T;
        case 'tm':
            return TM;
        case 'vl':
            return VL;
        case 'vr':
            return VR;
        case '':
        default:
            return null;
    }
}
var productCss = ".product-icon,.product-logo{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.product-logo{-webkit-transform:scale(1.185);transform:scale(1.185)}.product-logo svg{width:100%;height:100%;fill:transparent}.colour-default,.colour-white{color:#fff}.colour-navy{color:#363154}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.size-s{width:35px;height:40px;line-height:18px;font-size:18px}.size-default,.size-m{width:40px;height:46px;line-height:20px;font-size:20px}.size-l{width:45px;height:52px;line-height:21px;font-size:21px}.size-xl{width:50px;height:58px;line-height:23px;font-size:23px}.initials{display:-ms-flexbox;display:flex;position:absolute;z-index:5;text-transform:uppercase;font-weight:400;text-align:center}";
var fillData = "M84.7,188.6 C80.8,188.6 76.8,187.5 73.3,185.3 L11.3,149.6 C4.2,145.8 -0.1,138.1 0.4,130 L0.4,58.7 C-0.1,50.6 4.2,42.9 11.4,39 L73.3,3.4 C80.2,-0.9 89.2,-0.9 96.1,3.4 L158.1,39.1 C164.9,43.3 169,50.7 169,58.6 L169,130.1 C169,138 164.9,145.5 158.2,149.6 L96.1,185.4 C92.6,187.5 88.7,188.6 84.7,188.6 Z";
var outlineData = "M99.7,193.6c-3.9,0-7.9-1.1-11.4-3.3l-62-35.7c-7.1-3.8-11.4-11.5-10.9-19.6V63.7c-0.5-8.1,3.8-15.8,11-19.7\nL88.3,8.4c6.9-4.3,15.9-4.3,22.8,0l62,35.7c6.8,4.2,10.9,11.6,10.9,19.5v71.5c0,7.9-4.1,15.4-10.8,19.5l-62.1,35.8\nC107.6,192.5,103.7,193.6,99.7,193.6z M99.7,11.2c-2.9,0-5.8,0.8-8.3,2.4l-0.1,0.1l-62,35.6c-5.2,2.8-8.3,8.3-7.9,14.1v0.2v71.7\nc-0.4,5.8,2.7,11.3,7.8,14.1l62.2,35.8c5.1,3.2,11.5,3.2,16.6,0l0.1-0.1l62.1-35.7c4.9-3,7.9-8.5,7.9-14.3V63.7c0-5.8-3-11.3-8-14.4\nL108,13.5C105.5,12,102.6,11.2,99.7,11.2z";
function getInitialsColourFromBG(colour) {
    switch (colour.toLowerCase()) {
        case 'navy':
        case 'blue':
        case 'gradient':
            return "white";
        case 'default':
        case 'white':
        case 'grey':
        case 'aqua':
        default:
            return "navy";
    }
}
var ProductOutline = /** @class */ (function () {
    function ProductOutline(hostRef) {
        registerInstance(this, hostRef);
        this.colour = 'default';
        this.size = 'default';
        this.asOutline = true;
    }
    ProductOutline.prototype.render = function () {
        var initialsColourClass = this.initialsColour ? "colour-" + this.initialsColour : "colour-" + this.colour;
        if (!this.initialsColour && !this.asOutline) {
            initialsColourClass = "colour-" + getInitialsColourFromBG(this.colour);
        }
        var content = getClientInitials(this.code);
        var initialsFallback = null;
        if (!content) {
            initialsFallback = (h("div", { class: "initials " + initialsColourClass }, !this.initials ? this.code : this.initials));
        }
        return (h("div", { class: "\n\t\t\t\tproduct-logo \n\t\t\t\t" + (this.size === "xl" || this.size === "extra-large" ? "size-xl"
                : this.size === "l" || this.size === "large" ? "size-l"
                    : this.size === "m" || this.size === "medium" ? "size-m"
                        : this.size === "s" || this.size === "small" ? "size-s"
                            : this.size === "xs" || this.size === "extra-small" ? "size-s"
                                : "size-default") + " \n\t\t\t\t" + (this.colour === "white" ? "colour-white"
                : this.colour === "blue" ? "colour-blue"
                    : this.colour === "aqua" ? "colour-aqua"
                        : this.colour === "grey" ? "colour-grey"
                            : this.colour === "navy" ? "colour-navy"
                                : "colour-default") + " \n\t\t\t" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 200 200" }, h("linearGradient", { id: "grad", x1: "0%", y1: "0%", x2: "100%", y2: "0%" }, h("stop", { offset: "0%", "stop-color": "#005fab" }), h("stop", { offset: "30%", "stop-color": "#004997" }), h("stop", { offset: "67%", "stop-color": "#00297a" }), h("stop", { offset: "89%", "stop-color": "#00297a" }), h("stop", { offset: "89%", "stop-color": "#00287a" }), h("stop", { offset: "100%", "stop-color": "#161b4b" })), h("path", { fill: this.colour === "gradient" ? "url(#grad)" : "currentColor", stroke: "currentColor", transform: this.asOutline ? '' : "translate(12 5)", d: this.asOutline ? outlineData : fillData }), h("g", { class: initialsColourClass }, content)), initialsFallback));
    };
    return ProductOutline;
}());
ProductOutline.style = productCss;
var dropdownCss$1 = ".dd-container{position:relative;display:inline-block;text-align:left}.dd-panel{position:absolute;margin-top:.5rem;width:14rem;border-radius:.375rem;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);z-index:40}.dd-ql-panel{width:200px;left:-75px;-webkit-transform-origin:top left;transform-origin:top left}.right{-webkit-transform-origin:top right;transform-origin:top right;right:0}.left{-webkit-transform-origin:top left;transform-origin:top left;left:0}.center{left:-70px;-webkit-transform-origin:center;transform-origin:center}.dd-panel.show{pointer-events:auto;opacity:1;--transform-scale-x:1;--transform-scale-y:1;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.1s;transition-duration:.1s}.dd-panel.hide{pointer-events:none;opacity:0;--transform-scale-x:.95;--transform-scale-y:.95;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,1,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition-duration:75ms;transition-duration:75ms}.dd-panel-container{border-radius:.375rem;background-color:#d0dfe3;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.05);box-shadow:0 0 0 1px rgba(0,0,0,.05)}.colour-blue{background-color:#224595}.colour-aqua{background-color:#32f7dc}.colour-navy{background-color:#363154}.colour-default,.colour-grey{background-color:#d0dfe3}.colour-white{background-color:#fff}.dd-panel-bg{padding-top:.25rem;padding-bottom:.25rem}";
var QuickLinks = /** @class */ (function () {
    function QuickLinks(hostRef) {
        registerInstance(this, hostRef);
        this.generatedId = String(Math.floor(Math.random() * 99999));
        this.isOpen = false;
        // @Prop( {reflect: true, mutable:true }) displayTitle:string = "";
        this.dropdownId = null;
        // @Prop( {reflect: true}) size = 'default';
        // @Prop( {reflect: true}) colour = 'grey';
        this.disabled = false;
        this.parsedOptions = [];
        this.tfDropdownSelected = createEvent(this, "tfDropdownSelected", 7);
    }
    QuickLinks.prototype.handleClick = function (event) {
        if (this.isOpen) {
            var target = event.composedPath()[0];
            if (!target.matches('.dd-panel') &&
                !target.matches('.dd-panel-container') &&
                !target.matches('.dd-panel-bg') &&
                !target.matches('.dd-link') &&
                !target.matches('slot')) {
                event.preventDefault();
                event.stopPropagation();
                this.isOpen = false;
            }
        }
    };
    QuickLinks.prototype.onHandleCloseDropdown = function () {
        this.isOpen = false;
    };
    QuickLinks.prototype.onHandleOptionClicked = function (event) {
        if (this.isOpen && event.detail.parent === this.generatedId) {
            event.preventDefault();
            event.stopPropagation();
            var dropdownId = this.dropdownId;
            this.tfDropdownSelected.emit(Object.assign(Object.assign({}, event.detail), { dropdownId: dropdownId }));
            //
            this.isOpen = false;
        }
    };
    QuickLinks.prototype.onToggle = function () {
        this.isOpen = !this.isOpen;
    };
    QuickLinks.prototype.componentWillLoad = function () {
        var _this = this;
        // parse table header element
        var optionsEls = this.slotElement.getElementsByTagName('tf-dropdown-option');
        // 
        Array.from(optionsEls).forEach(function (opt) {
            var title = opt.innerHTML.replace(/<\!--.*?-->/g, "");
            _this.parsedOptions.push({
                value: opt.getAttribute('value'),
                title: title,
            });
        });
    };
    QuickLinks.prototype.render = function () {
        var _this = this;
        var options = (h("slot", null));
        if (this.parsedOptions.length) {
            options = this.parsedOptions.map(function (opt) { return (h("tf-dropdown-rendered-option", { value: opt.value, "element-title": opt.title, colour: "grey", parent: _this.generatedId }, opt.title)); });
        }
        return (h("div", { class: "dd-container" }, h("tf-icon-button", { size: 'xl', icon: this.isOpen ? 'close' : 'add', colour: this.isOpen ? 'navy' : 'aqua', onClick: this.onToggle.bind(this) }), h("div", { class: "\n\t\t\t\t\tdd-panel \n\t\t\t\t\tdd-ql-panel\n\t\t\t\t\t" + (this.isOpen ? 'show' : 'hide') + "\n\t\t\t\t" }, h("div", { class: "dd-panel-container dd-panel-grey" }, h("div", { class: "dd-panel-bg" }, options)))));
    };
    Object.defineProperty(QuickLinks.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return QuickLinks;
}());
QuickLinks.style = dropdownCss$1;
var radioCss = ".radio-wrapper{-ms-flex-direction:column;flex-direction:column;margin-top:.5rem}.form-label{display:block;font-size:.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.input-label-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.radio-container{width:30px;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start}*,input,input[type=checkbox]{-webkit-box-sizing:border-box;box-sizing:border-box}*{border:0 solid #d2d6dc}.form-radio{-webkit-print-color-adjust:exact;color-adjust:exact;background-origin:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;vertical-align:middle;-ms-flex-negative:0;flex-shrink:0;width:1.5rem;height:1.5rem;color:#224595;border-color:#d0dfe3;border-width:1px;border-radius:9999px}.form-radio:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E\");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:50%;background-repeat:no-repeat}@media not print{.form-radio::-ms-check{border-width:1px;color:transparent;background:inherit;border-color:inherit;border-radius:inherit}}.form-radio:focus{outline:0;border-color:#8598c4;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.form-radio:checked:focus{border-color:transparent}.form-radio-styled{height:1rem;width:1rem;color:#224595;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.form-radio-error{color:#771d1d;border-color:#f8b4b4}.form-radio-error:focus{border-color:#f8b4b4;-webkit-box-shadow:0 0 0 3px rgba(248,180,180,.45);box-shadow:0 0 0 3px rgba(248,180,180,.45)}.bottom-text{margin-left:30px;margin-top:2px;font-size:.875rem}.bottom-text.hide{visibility:hidden}.bottom-text.error{color:#e02424}.bottom-text.hint{color:#d0dfe3}";
var List$3 = /** @class */ (function () {
    function class_4(hostRef) {
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
        this.groupName = 'radioGroup';
        this.checked = false;
        this.required = false;
        this.errorMessage = null;
        this.error = false;
        this.hideLabel = false;
        this.tfOnChecked = createEvent(this, "tfOnChecked", 7);
        this.tfOnRadioSelected = createEvent(this, "tfOnRadioSelected", 7);
    }
    //
    class_4.prototype.errorChanged = function (newValue, oldValue) {
        if (newValue !== oldValue) {
            this.error = newValue;
            this.setError();
        }
    };
    class_4.prototype.getChecked = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.itemRef.checked];
                }
                catch (e) {
                    throw "Can't find itemRef.checked for " + this.name + " tf-radio. More details: " + e;
                }
                return [2 /*return*/];
            });
        });
    };
    class_4.prototype.getValue = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.itemRef.value];
                }
                catch (e) {
                    throw "Can't find itemRef.value for " + this.name + " tf-radio. More details: " + e;
                }
                return [2 /*return*/];
            });
        });
    };
    class_4.prototype.getItemRef = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.itemRef];
                }
                catch (e) {
                    throw "Can't find itemRef for " + this.name + " tf-radio. More details: " + e;
                }
                return [2 /*return*/];
            });
        });
    };
    class_4.prototype.componentWillLoad = function () {
        if (this.hint) {
            this.showHint = true;
        }
        this.setError();
        if (this.hideLabel) {
            this.showLabel = false;
        }
    };
    class_4.prototype.onUserInteraction = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var checked;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getChecked()];
                    case 1:
                        checked = _a.sent();
                        this.checked = checked;
                        this.tfOnChecked.emit({
                            id: this.name,
                            groupName: this.groupName,
                            checked: checked,
                            value: checked,
                            proxyEvent: Object.assign({}, event)
                        });
                        this.tfOnRadioSelected.emit({
                            id: this.name,
                            groupName: this.groupName,
                            checked: checked,
                            value: checked,
                            proxyEvent: Object.assign({}, event)
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    class_4.prototype.setError = function () {
        if (!this.errorMessage) {
            this.errorMessage = 'Error with the selection';
        }
        this.showErrorIcon = this.showError = this.error;
    };
    class_4.prototype.render = function () {
        var _this = this;
        var bottomText = h("p", { class: "bottom-text hide" }, "\u00A0");
        if (this.showHint) {
            bottomText = h("p", { class: "bottom-text hint" }, this.hint);
        }
        if (this.showError) {
            bottomText = h("p", { class: "bottom-text error" }, this.errorMessage);
        }
        return (h("div", { class: "radio-wrapper" }, h("div", { class: "input-label-container" }, h("div", { class: "radio-container" }, h("input", { id: this.name, name: this.groupName, ref: function (el) { return _this.itemRef = el; }, type: "radio", class: "\n\t\t\t\t\t\t\t\tform-radio\n\t\t\t\t\t\t\t\tform-radio-styled \n\t\t\t\t\t\t\t\t" + (this.showError ? 'form-radio-error' : '') + " \n\t\t\t\t\t\t\t", checked: this.checked, required: this.required, onInput: this.onUserInteraction.bind(this) })), h("label", { class: "" + (this.showLabel ? 'form-label' : 'form-label-sr-only'), htmlFor: this.name }, this.label)), bottomText));
    };
    Object.defineProperty(class_4, "watchers", {
        get: function () {
            return {
                "error": ["errorChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_4;
}());
List$3.style = radioCss;
var radioGroupCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #d2d6dc}fieldset{margin:0;padding:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}.form-label{display:block;font-size:.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.bottom-text{margin-left:0;margin-top:2px;font-size:.875rem}.bottom-text.hide{visibility:hidden}.bottom-text.error{color:#e02424}.bottom-text.hint{color:#d0dfe3}.description-text{margin-top:2px;display:block;font-size:.875rem;font-weight:500;line-height:1.25rem}.description-text.desc{color:#6b7280}";
var List$4 = /** @class */ (function () {
    function class_5(hostRef) {
        registerInstance(this, hostRef);
        this.generatedId = String(Math.floor(Math.random() * 99999));
        //
        this.showHint = false;
        this.showError = false;
        this.showLabel = true;
        this.showErrorIcon = false;
        this.selectedItem = null;
        //
        this.name = null;
        this.label = null;
        this.hint = null;
        this.description = null;
        this.groupName = 'radioGroup';
        this.required = false;
        this.errorMessage = null;
        this.error = false;
        this.hideLabel = false;
        this.tfOnItemSelected = createEvent(this, "tfOnItemSelected", 7);
    }
    //
    class_5.prototype.errorChanged = function (newValue, oldValue) {
        if (newValue !== oldValue) {
            this.error = newValue;
            this.setError();
        }
    };
    class_5.prototype.onHandleRadioSelected = function (event) {
        if (event.detail.groupName === this.name) {
            event.preventDefault();
            event.stopPropagation();
            if (this.selectedItem) {
                // remove prev selected radio
                this.selectedItem.checked = false;
            }
            this.selectedItem = event.target;
            this.value = event.detail.id;
            this.tfOnItemSelected.emit({
                id: this.name,
                value: this.value,
                proxyEvent: Object.assign({}, event)
            });
        }
    };
    class_5.prototype.getValue = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.itemRef.value];
                }
                catch (e) {
                    throw "Can't find itemRef.value for " + this.name + " tf-radio. More details: " + e;
                }
                return [2 /*return*/];
            });
        });
    };
    class_5.prototype.getItemRef = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.itemRef];
                }
                catch (e) {
                    throw "Can't find itemRef for " + this.name + " tf-radio. More details: " + e;
                }
                return [2 /*return*/];
            });
        });
    };
    class_5.prototype.componentWillLoad = function () {
        if (this.hint) {
            this.showHint = true;
        }
        this.setError();
        if (this.hideLabel) {
            this.showLabel = false;
        }
    };
    class_5.prototype.setError = function () {
        if (!this.errorMessage) {
            this.errorMessage = 'Error with the selection';
        }
        this.showErrorIcon = this.showError = this.error;
    };
    class_5.prototype.render = function () {
        var bottomText = h("p", { class: "bottom-text hide" }, "\u00A0");
        if (this.showHint) {
            bottomText = h("p", { class: "bottom-text hint" }, this.hint);
        }
        if (this.showError) {
            bottomText = h("p", { class: "bottom-text error" }, this.errorMessage);
        }
        var descriptionText = null;
        if (this.description) {
            descriptionText = h("p", { class: "description-text desc" }, this.description);
        }
        return (h("fieldset", { class: "radio-group-wrapper" }, h("legend", { class: "" + (this.showLabel ? 'form-label' : 'form-label-sr-only') }, this.label), descriptionText, h("slot", null), bottomText));
    };
    Object.defineProperty(class_5, "watchers", {
        get: function () {
            return {
                "error": ["errorChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_5;
}());
List$4.style = radioGroupCss;
var selectCss = ".form-label{display:block;font-size:.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}select{padding:0;line-height:inherit;color:inherit;text-transform:none;margin:0}*,select{-webkit-box-sizing:border-box;box-sizing:border-box}*{border:0 solid #d2d6dc}.label-select-container{margin-bottom:1rem}.input-container{display:-ms-flexbox;display:flex;margin-top:.25rem;position:relative;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.form-select{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M7 7l3-3 3 3m0 6l-3 3-3-3' stroke='%239fa6b2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");-webkit-print-color-adjust:exact;color-adjust:exact;background-repeat:no-repeat;background-position:right .5rem center;background-size:1.5em 1.5em;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#d0dfe3;border-width:1px;border-radius:.375rem;padding:.5rem 2.5rem .5rem .75rem;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.form-select::-ms-expand{color:#9fa6b2;border:none}@media not print{.form-select::-ms-expand{display:none}}@media print and (-ms-high-contrast:active),print and (-ms-high-contrast:none){.form-select{padding-right:.75rem}}.form-select:focus{outline:0;border-color:#8598c4;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.form-select-styled{display:block;width:100%}.form-select-error{color:#771d1d;border-color:#f8b4b4}.form-select-error:focus{border-color:#f8b4b4;-webkit-box-shadow:0 0 0 3px rgba(248,180,180,.45);box-shadow:0 0 0 3px rgba(248,180,180,.45)}.form-select option:disabled{color:#d7e3e7;opacity:1}.hint{color:#d0dfe3}.error,.hint{margin-top:.5rem;font-size:.875rem}.error{color:#e02424}tf-select-option{display:none}@media (min-width:640px){.form-select-styled{font-size:.875rem;line-height:1.25rem}}";
var List$5 = /** @class */ (function () {
    function class_6(hostRef) {
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
    class_6.prototype.errorChanged = function (newValue, oldValue) {
        if (newValue !== oldValue) {
            this.error = newValue;
            this.setError();
        }
    };
    class_6.prototype.getValue = function () {
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
    class_6.prototype.getItemRef = function () {
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
    class_6.prototype.componentWillLoad = function () {
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
    class_6.prototype.onUserInteraction = function (event) {
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
    class_6.prototype.setError = function () {
        if (!this.errorMessage) {
            this.errorMessage = 'Error with the selection';
        }
        this.showErrorIcon = this.showError = this.error;
    };
    class_6.prototype.render = function () {
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
        }, this.label), h("div", { class: "input-container" }, h("select", { id: this.name, ref: function (el) { return _this.itemRef = el; }, class: "\n\t\t\t\t\t\t\tform-select \n\t\t\t\t\t\t\tform-select-styled \n\t\t\t\t\t\t\t" + (this.showError ? 'form-select-error' : '') + " \n\t\t\t\t\t\t", required: this.required, onInput: this.onUserInteraction.bind(this) }, options)), bottomText));
    };
    Object.defineProperty(class_6.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_6, "watchers", {
        get: function () {
            return {
                "error": ["errorChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_6;
}());
List$5.style = selectCss;
var SelectOption = /** @class */ (function () {
    function SelectOption(hostRef) {
        registerInstance(this, hostRef);
    }
    SelectOption.prototype.render = function () {
        return (h("slot", null));
    };
    return SelectOption;
}());
SelectOption.style = "::slotted(*){\n\t\t\tcolor: red;\n\t\t}";
var sideDrawerCss = "aside{left:-100%;width:400px;max-width:80%;max-height:100vh;-webkit-transition:left .3s ease-out;transition:left .3s ease-out;z-index:100;-webkit-box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.backdrop,aside{height:100vh;position:fixed;top:0;background-color:#363154}.backdrop{left:0;width:100%;opacity:0;z-index:10;pointer-events:none;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}header{padding:0 1.375rem;margin-bottom:1.375rem;height:4.625rem;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.header-icon-container{height:4.625rem;display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end}.close-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.side-drawer-main{display:-ms-flexbox;display:flex;width:100%;height:100%;margin-bottom:1rem;overflow-y:hidden}";
var SideDrawer = /** @class */ (function () {
    function class_7(hostRef) {
        registerInstance(this, hostRef);
        this.showContactInfo = false;
    }
    class_7.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.opened = true;
                return [2 /*return*/];
            });
        });
    };
    class_7.prototype.onAppLogoClicked = function () {
        this.open();
    };
    class_7.prototype.onHandleCloseSideDrawer = function () {
        this.onCloseDraw();
    };
    class_7.prototype.stockSymbolChanged = function (newValue, oldValue) {
    };
    class_7.prototype.onCloseDraw = function () {
        this.opened = false;
    };
    class_7.prototype.onContentChange = function (content) {
        this.showContactInfo = content === 'contact';
    };
    class_7.prototype.render = function () {
        var mainContent = h("slot", null);
        return [
            h("div", { onClick: this.onCloseDraw.bind(this), class: "backdrop" }),
            h("aside", null, h("header", null, h("div", { class: "header-icon-container" }, h("div", { class: "close-icon" }, h("tf-icon-button", { size: "large", icon: "close", colour: "white", onClick: this.onCloseDraw.bind(this) })))), h("main", { class: "side-drawer-main" }, mainContent))
        ];
    };
    Object.defineProperty(class_7, "watchers", {
        get: function () {
            return {
                "opened": ["stockSymbolChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_7;
}());
SideDrawer.style = sideDrawerCss;
var sideDrawerNavCss = ".side-nav{-ms-flex:1 1 0%;flex:1 1 0%;padding:.75rem;width:100%;max-height:100%;overflow-y:auto}";
var SideDrawerNav = /** @class */ (function () {
    function SideDrawerNav(hostRef) {
        registerInstance(this, hostRef);
    }
    SideDrawerNav.prototype.render = function () {
        return (h("nav", { class: "side-nav" }, h("slot", null)));
    };
    return SideDrawerNav;
}());
SideDrawerNav.style = sideDrawerNavCss;
var sideDrawerNavLinkCss = ".tailwind-side-nav{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-family:Roboto Condensed,sans-serif;padding:.5rem .75rem;font-size:1.125rem;line-height:1.25rem;font-weight:500;text-decoration:none;cursor:pointer;color:#fff;background-color:#363154;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.tailwind-side-nav:hover{color:#1d1a2e;background-color:#d0dfe3}.tailwind-side-nav:focus{outline:0;color:#1d1a2e;background-color:#d7e3e7}.tailwind-side-nav-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Roboto Condensed,sans-serif;-ms-flex:1 1 0%;flex:1 1 0%}.tailwind-toggle-icon{display:-ms-flexbox;display:flex;color:#fff;-ms-flex-align:center;align-items:center;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.tailwind-toggle-icon.opened{color:#1d1a2e}tf-icon-chevron-down,tf-icon-chevron-up{width:20px;height:20px}.tailwind-side-nav.opened{color:#1d1a2e;background-color:#ecf2f3}.tailwind-side-nav:hover .tailwind-toggle-icon{color:#1d1a2e}.sub-nav-content{display:block;max-height:0;-webkit-transition:max-height .35s;transition:max-height .35s;overflow:hidden}.sub-nav-content.show{max-height:100vh}";
var SideDrawerNavLink = /** @class */ (function () {
    function SideDrawerNavLink(hostRef) {
        registerInstance(this, hostRef);
        this.isSubOpen = false;
        this.hasSubMenu = false;
        this.tfRouterLinkClicked = createEvent(this, "tfRouterLinkClicked", 7);
        this.tfCloseSideDrawer = createEvent(this, "tfCloseSideDrawer", 7);
    }
    //
    SideDrawerNavLink.prototype.onLinkClicked = function () {
        this.isSubOpen = !this.isSubOpen;
    };
    //
    SideDrawerNavLink.prototype.onRouterLinkClicked = function () {
        this.tfRouterLinkClicked.emit({
            routerLink: this.routerLink
        });
        this.tfCloseSideDrawer.emit();
    };
    //
    SideDrawerNavLink.prototype.componentWillLoad = function () {
        this.hasSubMenu = !!this.slotElement.querySelector('[slot="sub"]');
    };
    SideDrawerNavLink.prototype.render = function () {
        var sub = null;
        var linkButton = (h("a", { href: this.hrefLink, title: !this.hrefTitle ? "Link to " + this.hrefLink : this.hrefTitle, class: "tailwind-side-nav" }, h("span", { class: "tailwind-side-nav-title" }, h("slot", null))));
        if (this.routerLink) {
            linkButton = (h("a", {
                //routerLink={ this.routerLink } 
                onClick: this.onRouterLinkClicked.bind(this), title: !this.hrefTitle ? "Link to " + this.hrefLink : this.hrefTitle, class: "tailwind-side-nav"
            }, h("span", { class: "tailwind-side-nav-title" }, h("slot", null))));
        }
        if (this.hasSubMenu) {
            sub = (h("div", { class: "sub-nav-content " + (this.isSubOpen ? 'show' : 'hide') }, h("slot", { name: "sub" })));
            var icon = this.isSubOpen ? h("tf-icon-chevron-up", null) : h("tf-icon-chevron-down", null);
            linkButton = (h("div", { class: "tailwind-side-nav " + (this.isSubOpen ? 'opened' : ''), onClick: this.onLinkClicked.bind(this) }, h("span", { class: "tailwind-side-nav-title" }, h("slot", null)), h("span", { class: "tailwind-toggle-icon " + (this.isSubOpen ? 'opened' : '') }, icon)));
        }
        return [linkButton, sub];
    };
    Object.defineProperty(SideDrawerNavLink.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return SideDrawerNavLink;
}());
SideDrawerNavLink.style = sideDrawerNavLinkCss;
var sideDrawerSubNavCss = ".sub-nav-content{max-height:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);overflow:hidden;padding:.5rem;background-color:#d0dfe3;line-height:1.5}.opened{max-height:100vh}";
var SideDrawerSubNav = /** @class */ (function () {
    function SideDrawerSubNav(hostRef) {
        registerInstance(this, hostRef);
    }
    SideDrawerSubNav.prototype.render = function () {
        return (h("div", { class: "sub-nav-content opened" }, h("slot", null)));
    };
    return SideDrawerSubNav;
}());
SideDrawerSubNav.style = sideDrawerSubNavCss;
var sideDrawerSubNavLinkCss = ".tailwind-sub-nav{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.5rem .75rem;font-size:1.125rem;line-height:1.25rem;font-weight:500;text-decoration:none;cursor:pointer;color:#1d1a2e;background-color:#d0dfe3;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.tailwind-sub-nav:hover{color:#302c4b;background-color:#b1bdc1}.tailwind-sub-nav:focus{outline:0;color:#1d1a2e;background-color:#b1bdc1}.tailwind-sub-nav-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Roboto Condensed,sans-serif;-ms-flex:1 1 0%;flex:1 1 0%}.tailwind-toggle-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}";
var SideDrawerSubNavLink = /** @class */ (function () {
    function SideDrawerSubNavLink(hostRef) {
        registerInstance(this, hostRef);
        this.tfRouterLinkClicked = createEvent(this, "tfRouterLinkClicked", 7);
        this.tfCloseSideDrawer = createEvent(this, "tfCloseSideDrawer", 7);
    }
    SideDrawerSubNavLink.prototype.onRouterLinkClicked = function () {
        this.tfRouterLinkClicked.emit({
            routerLink: this.routerLink
        });
        this.tfCloseSideDrawer.emit();
    };
    SideDrawerSubNavLink.prototype.render = function () {
        var linkButton = (h("a", { href: this.hrefLink, title: !this.hrefTitle ? "Link to " + this.hrefLink : this.hrefTitle, class: "tailwind-sub-nav" }, h("span", { class: "tailwind-sub-nav-title" }, h("slot", null))));
        if (this.routerLink) {
            linkButton = (h("a", {
                //routerLink={ this.routerLink } 
                onClick: this.onRouterLinkClicked.bind(this), title: !this.hrefTitle ? "Link to " + this.hrefLink : this.hrefTitle, class: "tailwind-sub-nav"
            }, h("span", { class: "tailwind-sub-nav-title" }, h("slot", null))));
        }
        return (linkButton);
    };
    return SideDrawerSubNavLink;
}());
SideDrawerSubNavLink.style = sideDrawerSubNavLinkCss;
var elementsCss$1 = "dd,dl,h1,h2,h5,p{margin:0}h1,h2,h5{font-size:inherit;font-weight:inherit}.colour-default,.colour-navy{color:#363154}.colour-white{color:#fff}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{background-color:transparent;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-a.colour-white:hover{color:#e7eff1}.tag-a.colour-blue:hover{color:#7a8fbf}.tag-a.colour-aqua:hover{color:#2ad2bb}.tag-a.colour-grey:hover{color:#9ba7aa}.tag-a.colour-default:hover,.tag-a.colour-navy:hover{color:#868398}.tag-h1{font-family:Roboto Condensed,sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{background-color:transparent;font-size:1.5rem;line-height:1.75rem}.span-title,.tag-h2{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.5rem;margin-bottom:.5rem;font-weight:800}.span-title{font-size:1.125rem;line-height:1.5rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold,.span-description{font-family:Roboto Condensed,sans-serif}.span-bold{font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";
var ParaTag$1 = /** @class */ (function () {
    function ParaTag$1(hostRef) {
        registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
    }
    ParaTag$1.prototype.render = function () {
        return (h("span", { class: "\n\t\t\t\tspan-description \n\t\t\t\t" + getColourClassname(this.colour) + "\n\t\t\t\t" + getTextAlignClassname(this.textAlign) + "\n\t\t\t" }, h("slot", null)));
    };
    return ParaTag$1;
}());
ParaTag$1.style = elementsCss$1;
var elementsCss$2 = "dd,dl,h1,h2,h5,p{margin:0}h1,h2,h5{font-size:inherit;font-weight:inherit}.colour-default,.colour-navy{color:#363154}.colour-white{color:#fff}.colour-blue{color:#224595}.colour-aqua{color:#32f7dc}.colour-grey{color:#d0dfe3}.underlined{text-decoration:underline}.not-underlined{text-decoration:none}.tag-p{margin:1rem 0}.tag-a,.tag-p{display:block;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;font-weight:400}.tag-a{background-color:transparent;cursor:pointer;-webkit-transition-property:background-color,border-color,color,fill,stroke;transition-property:background-color,border-color,color,fill,stroke;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.3s;transition-duration:.3s}.tag-a.colour-white:hover{color:#e7eff1}.tag-a.colour-blue:hover{color:#7a8fbf}.tag-a.colour-aqua:hover{color:#2ad2bb}.tag-a.colour-grey:hover{color:#9ba7aa}.tag-a.colour-default:hover,.tag-a.colour-navy:hover{color:#868398}.tag-h1{font-family:Roboto Condensed,sans-serif;margin-top:1.5rem;font-size:1.875rem;line-height:2.25rem;font-weight:800}.tag-h2{background-color:transparent;font-size:1.5rem;line-height:1.75rem}.span-title,.tag-h2{display:block;font-family:Roboto Condensed,sans-serif;margin-top:.5rem;margin-bottom:.5rem;font-weight:800}.span-title{font-size:1.125rem;line-height:1.5rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.span-description{display:block;margin-top:.25rem;margin-bottom:.25rem;font-size:.75rem;line-height:1.375;font-weight:400}.span-bold,.span-description{font-family:Roboto Condensed,sans-serif}.span-bold{font-weight:700}.span-italic{font-weight:400}.span-italic,.span-italic-bold{font-family:Roboto Condensed,sans-serif;font-style:italic}.span-italic-bold{font-weight:700}.span-normal{font-family:Roboto Condensed,sans-serif;font-weight:400}.divider-wrapper{margin:1.5rem auto;width:100%}.divider{display:-ms-flexbox;display:flex;width:100%;height:.25rem;background-color:#d0dfe3}";
var ParaTag$2 = /** @class */ (function () {
    function ParaTag$2(hostRef) {
        registerInstance(this, hostRef);
        this.textAlign = "left";
        this.colour = "default";
    }
    ParaTag$2.prototype.render = function () {
        return (h("span", { class: "\n\t\t\t\tspan-title \n\t\t\t\t" + getColourClassname(this.colour) + "\n\t\t\t\t" + getTextAlignClassname(this.textAlign) + "\n\t\t\t" }, h("slot", null)));
    };
    return ParaTag$2;
}());
ParaTag$2.style = elementsCss$2;
var statDataCardCss = ".stat-card-container{background-color:#fff;overflow:hidden;-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);border-radius:.5rem}dl{-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;text-align:center}dt{padding:.5rem .25rem;font-size:.875rem;color:#25223a;line-height:1.25rem;font-weight:500;background-color:#d0dfe3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}dt.colour-blue,dt.colour-default{color:#fff;background-color:#224595}dd{-webkit-margin-start:0;margin-inline-start:0;padding:1.25rem .25rem;margin-top:.25rem;font-size:1.875rem;color:#25223a;line-height:2.25rem;font-weight:600}dd.colour-blue,dd.colour-default{color:#224595}@media (min-width:640px){.stats-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}";
var StatDataCard$1 = /** @class */ (function () {
    function StatDataCard$1(hostRef) {
        registerInstance(this, hostRef);
        this.colour = 'default';
    }
    StatDataCard$1.prototype.render = function () {
        return (h("div", { class: "stat-card-container" }, h("div", { class: "stat-card" }, h("dl", null, h("dt", { class: "colour-" + this.colour }, h("slot", { name: "title" })), h("dd", { class: "colour-" + this.colour }, h("slot", { name: "data" }))))));
    };
    return StatDataCard$1;
}());
StatDataCard$1.style = statDataCardCss;
var statsPanelCss = ".stats-grid{margin-top:.25rem;margin-bottom:.25rem;display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:1.25rem;gap:1.25rem}";
var StatsPanel = /** @class */ (function () {
    function StatsPanel(hostRef) {
        registerInstance(this, hostRef);
        this.cardCount = 3;
        this.maxCardCount = 6;
    }
    StatsPanel.prototype.componentWillLoad = function () {
        this.cardCount = this.slotElement.children.length > this.maxCardCount ? this.maxCardCount : this.slotElement.children.length;
    };
    StatsPanel.prototype.render = function () {
        return (h("tf-card", { colour: "navy" }, h("div", { class: "stats-grid grid-" + this.cardCount }, h("slot", null))));
    };
    Object.defineProperty(StatsPanel.prototype, "slotElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return StatsPanel;
}());
StatsPanel.style = statsPanelCss;
var statusCss = "span{padding-left:.75rem;padding-right:.75rem;display:-ms-inline-flexbox;display:inline-flex;font-size:.75rem;line-height:1.25rem;font-weight:600;border-radius:9999px}.beacon{display:block;height:8px;width:8px;border-radius:4px;margin:0 3px}.beacon.colour-default{background-color:#ecf2f3}";
var Status = /** @class */ (function () {
    function Status(hostRef) {
        registerInstance(this, hostRef);
        this.trafficLightColour = 'none';
    }
    Status.prototype.render = function () {
        return (h("span", { class: "\n\t\t\t\t" + getTrafficLightColourClassname(this.trafficLightColour) + "\n\t\t\t" }, h("slot", null)));
    };
    return Status;
}());
Status.style = statusCss;
var statusCss$1 = "span{padding-left:.75rem;padding-right:.75rem;display:-ms-inline-flexbox;display:inline-flex;font-size:.75rem;line-height:1.25rem;font-weight:600;border-radius:9999px}.beacon{display:block;height:8px;width:8px;border-radius:4px;margin:0 3px}.beacon.colour-default{background-color:#ecf2f3}";
var Status$1 = /** @class */ (function () {
    function Status$1(hostRef) {
        registerInstance(this, hostRef);
        this.trafficLightColour = 'none';
    }
    Status$1.prototype.render = function () {
        return (h("div", { class: "\n\t\t\t\tbeacon \n\t\t\t\t" + getTrafficLightColourClassname(this.trafficLightColour) + "\n\t\t\t" }));
    };
    return Status$1;
}());
Status$1.style = statusCss$1;
var textareaCss = ".form-label{display:block;font-size:.875rem;font-weight:500;line-height:1.25rem;color:#374151}.form-label-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}*,input,input[type=text],input[type=textarea],textarea{-webkit-box-sizing:border-box;box-sizing:border-box}*{border:0 solid #d2d6dc}.label-input-container{margin-bottom:1rem}.input-container{display:-ms-flexbox;display:flex;margin-top:.25rem;position:relative;border-radius:.375rem;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.form-textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#d0dfe3;border-width:1px;border-radius:.375rem;padding:.5rem .75rem;font-family:Roboto Condensed,sans-serif;font-size:1rem;line-height:1.5;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,-webkit-box-shadow,-webkit-transform;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.form-textarea::-webkit-input-placeholder{color:#d7e3e7;opacity:1}.form-textarea:-ms-input-placeholder{color:#d7e3e7;opacity:1}.form-textarea::-ms-input-placeholder{color:#d7e3e7;opacity:1}.form-textarea:-ms-input-placeholder,.form-textarea::-moz-placeholder,.form-textarea::-ms-input-placeholder,.form-textarea::-webkit-input-placeholder,.form-textarea::placeholder{color:#d7e3e7;opacity:1}.form-textarea.form-textarea-error::-webkit-input-placeholder{color:#f8b4b4;opacity:1}.form-textarea.form-textarea-error:-ms-input-placeholder{color:#f8b4b4;opacity:1}.form-textarea.form-textarea-error::-ms-input-placeholder{color:#f8b4b4;opacity:1}.form-textarea.form-textarea-error:-ms-input-placeholder,.form-textarea.form-textarea-error::-moz-placeholder,.form-textarea.form-textarea-error::-ms-input-placeholder,.form-textarea.form-textarea-error::-webkit-input-placeholder,.form-textarea.form-textarea-error::placeholder{color:#f8b4b4;opacity:1}.form-textarea:focus{outline:0;border-color:#8598c4;-webkit-box-shadow:0 0 0 3px rgba(164,202,254,.45);box-shadow:0 0 0 3px rgba(164,202,254,.45)}.form-textarea-styled{display:block;width:100%;resize:vertical}.form-textarea-error{color:#771d1d;border-color:#f8b4b4}.form-textarea-error:focus{border-color:#f8b4b4;-webkit-box-shadow:0 0 0 3px rgba(248,180,180,.45);box-shadow:0 0 0 3px rgba(248,180,180,.45)}.hint{color:#d0dfe3}.error,.hint{margin-top:.5rem;font-size:.875rem}.error{color:#e02424}@media (min-width:640px){.form-textarea-styled{font-size:.875rem;line-height:1.25rem}}";
var List$6 = /** @class */ (function () {
    function class_8(hostRef) {
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
        this.autoComplete = 'off';
        this.rowCount = 3;
        this.errorMessage = null;
        this.error = false;
        this.hideLabel = false;
        this.icon = null;
        this.iconPosition = null;
        this.tfOnInput = createEvent(this, "tfOnInput", 7);
    }
    //
    class_8.prototype.errorChanged = function (newValue, oldValue) {
        if (newValue !== oldValue) {
            this.error = newValue;
            this.setError();
        }
    };
    class_8.prototype.getValue = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.itemRef.value];
                }
                catch (e) {
                    throw "Can't find itemRef.value for " + this.name + " tf-textarea. More details: " + e;
                }
                return [2 /*return*/];
            });
        });
    };
    class_8.prototype.getItemRef = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, this.itemRef];
                }
                catch (e) {
                    throw "Can't find itemRef for " + this.name + " tf-textarea. More details: " + e;
                }
                return [2 /*return*/];
            });
        });
    };
    class_8.prototype.componentWillLoad = function () {
        if (this.hint) {
            this.showHint = true;
        }
        this.setError();
        if (this.hideLabel) {
            this.showLabel = false;
        }
    };
    class_8.prototype.onUserInput = function (event) {
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
    class_8.prototype.setError = function () {
        if (!this.errorMessage) {
            this.errorMessage = 'Error with the input field';
        }
        this.showErrorIcon = this.showError = this.error;
    };
    class_8.prototype.render = function () {
        var _this = this;
        var bottomText = null;
        if (this.showHint) {
            bottomText = h("p", { class: "hint" }, this.hint);
        }
        if (this.showError) {
            bottomText = h("p", { class: "error" }, this.errorMessage);
        }
        //
        return (h("div", { class: "label-input-container" }, h("label", { class: "" + (this.showLabel ? 'form-label' : 'form-label-sr-only'), htmlFor: this.name }, this.label), h("div", { class: "input-container" }, h("textarea", { id: this.name, ref: function (el) { return _this.itemRef = el; }, rows: this.rowCount, class: "\n\t\t\t\t\t\t\tform-textarea \n\t\t\t\t\t\t\tform-textarea-styled \n\t\t\t\t\t\t\t" + (this.showError ? 'form-textarea-error' : '') + " \n\t\t\t\t\t\t", placeholder: this.placeholder, required: this.required, value: this.value, onInput: this.onUserInput.bind(this) })), bottomText));
    };
    Object.defineProperty(class_8.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_8, "watchers", {
        get: function () {
            return {
                "error": ["errorChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_8;
}());
List$6.style = textareaCss;
var userCss = ".flex-row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.avatar{height:2.5rem;width:2.5rem;border-radius:9999px}.details{margin-left:1rem}";
var User = /** @class */ (function () {
    function User(hostRef) {
        registerInstance(this, hostRef);
    }
    User.prototype.render = function () {
        return (h("div", { class: "flex-row" }, h("div", { class: "avater-container" }, h("img", { class: "avatar", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "" })), h("div", { class: "details" }, h("tf-value-pair", null, h("span", { slot: "dark" }, "Bernard Lane"), h("span", { slot: "light" }, "bernardlane@example.com")))));
    };
    return User;
}());
User.style = userCss;
var valuePairCss = ".value-pair{-ms-flex-direction:column;flex-direction:column}.dark{font-size:1.125rem;font-weight:500;color:#161e2e}.dark,.light{line-height:1.25rem}.light{font-size:.875rem;color:#6b7280}";
var ValuePair = /** @class */ (function () {
    function ValuePair(hostRef) {
        registerInstance(this, hostRef);
    }
    ValuePair.prototype.render = function () {
        return (h("div", { class: "value-pair" }, h("div", { class: 'dark' }, h("slot", { name: "dark" })), h("div", { class: 'light' }, h("slot", { name: "light" }))));
    };
    return ValuePair;
}());
ValuePair.style = valuePairCss;
export { AppHeader as tf_app_base_header, AppHeader$1 as tf_app_client_logo, Button as tf_button, Button$1 as tf_button_container, Card as tf_card, CardContainer as tf_card_container, Node as tf_card_content, CardTitle as tf_card_title, List as tf_checkbox, AppHeader$2 as tf_client_logo, ContainedCard as tf_contained_card, Divider as tf_divider, Dropdown as tf_dropdown, DropdownLink as tf_dropdown_link, DropdownOption as tf_dropdown_option, DropdownRenderedOption as tf_dropdown_rendered_option, SVGIcon as tf_icon_add, SVGIcon$1 as tf_icon_arrow_down, SVGIcon$2 as tf_icon_arrow_left, SVGIcon$3 as tf_icon_arrow_right, SVGIcon$4 as tf_icon_arrow_up, Button$2 as tf_icon_button, SVGIcon$5 as tf_icon_check, ChevronDown as tf_icon_chevron_down, SVGIcon$6 as tf_icon_chevron_left, SVGIcon$7 as tf_icon_chevron_right, ChevronUp as tf_icon_chevron_up, SVGIcon$8 as tf_icon_close, Envelope as tf_icon_envelope, SVGIcon$9 as tf_icon_exclamation, SVGIcon$a as tf_icon_minus, SVGIcon$b as tf_icon_notification, Search as tf_icon_search, SVGIcon$c as tf_icon_user, InfoPanel as tf_info_panel, List$1 as tf_input, ListWrappingCell as tf_leading_icon_label, List$2 as tf_list, ListWrappingItem as tf_list_item, ListWrappingCell$1 as tf_list_wrapping_cell, ListWrappingItem$1 as tf_list_wrapping_item, MainContent as tf_main_content, Modal as tf_modal, Node$1 as tf_node, Node$2 as tf_node_flex, Node$3 as tf_node_flex_fxr, Node$4 as tf_node_fxl_flex, Node$5 as tf_node_fxl_flex_fxr, NodeHeader as tf_node_header, NodeHeader$1 as tf_node_header_title, NodeText as tf_node_text, ParaTag as tf_p_tag, StatDataCard as tf_ph_overview_button, ProductOutline as tf_product_logo, QuickLinks as tf_quick_links, List$3 as tf_radio, List$4 as tf_radio_group, List$5 as tf_select, SelectOption as tf_select_option, SideDrawer as tf_side_drawer, SideDrawerNav as tf_side_drawer_nav, SideDrawerNavLink as tf_side_drawer_nav_link, SideDrawerSubNav as tf_side_drawer_sub_nav, SideDrawerSubNavLink as tf_side_drawer_sub_nav_link, ParaTag$1 as tf_span_description, ParaTag$2 as tf_span_title, StatDataCard$1 as tf_stat_data_card, StatsPanel as tf_stats_panel, Status as tf_status, Status$1 as tf_status_beacon, List$6 as tf_textarea, User as tf_user, ValuePair as tf_value_pair };
